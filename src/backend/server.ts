import express from "express";
import cors from "cors";
import { createServer } from "http";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/tts", async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: "Texto não fornecido" });
    return;
  }

  try {
    const piperRes = await fetch("http://localhost:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const contentType = piperRes.headers.get("content-type") || "audio/wav";
    res.setHeader("Content-Type", contentType);

    const piperStream = piperRes.body;
    if (piperStream) {
      piperStream.pipe(res);
    } else {
      const buffer = await piperRes.arrayBuffer();
      res.end(Buffer.from(buffer));
    }
  } catch (err) {
    console.error("TTS proxy error:", err);
    res.status(500).json({ error: "Falha ao contatar o Piper" });
  }
});

const server = createServer(app);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Backend TTS rodando em http://localhost:${PORT}`);
});