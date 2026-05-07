# Roteiro de Testes - Anjo ACS 🩺

Este guia descreve os passos para validar as principais funcionalidades do aplicativo.

---

## 1. Teste de Fluxo de Voz (Inteligência Artificial)
**Objetivo:** Validar se o reconhecimento de fala e o motor de decisão estão funcionando.

1.  Na tela inicial, clique no card central **"Falar com o Anjo"**.
2.  **Ação:** Mantenha o botão do microfone pressionado.
3.  **Falar:** "Como eu faço o pré-natal de uma gestante?"
4.  **Verificar:**
    *   O texto deve aparecer na caixa enquanto você fala.
    *   Ao soltar, o botão **"Prosseguir"** deve ser habilitado.
5.  Clique em **"Prosseguir"**.
6.  **Esperado:** O app deve levar à tela de confirmação dizendo: *"Você quer saber como: Pré-natal"*.

---

## 2. Teste de Acessibilidade (Áudio)
**Objetivo:** Garantir que o ACS consiga ouvir as instruções em campo.

1.  Em qualquer tela, localize o botão **"Ouvir"** ou o ícone de volume.
2.  **Ação:** Clique no ícone de volume ao lado de um passo do guia.
3.  **Esperado:** O dispositivo deve narrar o texto em voz alta (Português Brasil).
4.  **Ação:** Clique no botão vermelho **"Parar Áudio"** enquanto ele fala.
5.  **Esperado:** O áudio deve ser interrompido imediatamente.

---

## 3. Teste de Guia Passo a Passo
**Objetivo:** Validar a clareza das instruções de trabalho.

1.  Acesse o guia de **"Cadastrar nova família"** (via busca ou voz).
2.  **Verificar:**
    *   Cada passo deve estar numerado.
    *   O resumo no topo deve explicar o objetivo do guia.
3.  Clique em **"Pronto"** ao final dos passos.
4.  **Esperado:** Deve exibir a tela de "Missão Cumprida" com a mensagem do Ministério da Saúde.

---

## 4. Teste de Central de Ajuda (Suporte)
**Objetivo:** Testar o envio de dúvidas críticas para a supervisão.

1.  No menu inferior, clique em **"Ajuda"**.
2.  Preencha os campos (Nome, UBS, Equipe e Dúvida).
3.  Clique em **"Enviar Mensagem"**.
4.  **Esperado:** Após o carregamento, deve aparecer a tela de sucesso confirmando o envio.

---

## 5. Teste de Biblioteca de Manuais
**Objetivo:** Validar a busca de documentos oficiais.

1.  No menu inferior, clique em **"Manual"**.
2.  Na barra de busca, digite **"SUS"**.
3.  **Verificar:** A lista deve filtrar automaticamente, mostrando apenas manuais que contenham "SUS" no título ou descrição.
4.  Clique em **"Abrir Arquivo"**.
5.  **Esperado:** O botão deve simular a abertura (ação visual de clique).

---

## 6. Teste de Motivação (Saúde Mental do ACS)
**Objetivo:** Validar a função de apoio emocional.

1.  Na tela inicial, clique no botão rosa **"Mensagem do Dia"**.
2.  **Verificar:** 
    *   Uma frase motivacional aleatória deve ser exibida.
    *   O player de "Áudio do dia" deve estar visível.
3.  Clique em **"Obrigado, Anjo"**.
4.  **Esperado:** Deve retornar para a tela inicial.

---

## Observações Técnicas para o Teste:
*   **Microfone:** Certifique-se de dar permissão ao navegador quando solicitado.
*   **Voz:** O volume do dispositivo deve estar ligado para ouvir o sintetizador de voz.
*   **Layout:** Teste preferencialmente na visualização mobile (celular) para garantir a melhor experiência.