import { NextResponse } from "next/server";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/tts", async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Texto não fornecido" });
  }

  try {
    // Faz proxy para o Piper rodando em localhost:5000
    const piperRes = await fetch("http://localhost:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    // Copia headers relevantes (principalmente Content-Type)
    const contentType = piperRes.headers.get("content-type") || "audio/wav";

    // Encaminha o stream de áudio diretamente ao cliente
    const audioStream = piperRes.body;
    if (audioStream) {
      res.setHeader("Content-Type", contentType);
      audioStream.pipe(res);
    } else {
      // Caso Piper retorne algo inesperado
      const buffer = await piperRes.arrayBuffer();
      res.setHeader("Content-Type", contentType);
      res.send(Buffer.from(buffer));
    }
  } catch (err) {
    console.error("Proxy TTS error:", err);
    res.status(500).json({ error: "Erro ao contatar o Piper" });
  }
});

// Exporta o handler para ser usado pelo Next.js / Express
export const config = {
  api: {
    bodyParser: false,
  },
};

export default app;