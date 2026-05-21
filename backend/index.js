const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { GoogleGenAI } = require('@google/genai')

const app = express()
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

app.use(cors({ origin: 'https://tcc-ciberseguranca.vercel.app' }))
app.use(express.json())

app.post('/chat', async (req, res) => {
  console.log('Pergunta recebida:', req.body)
  const { pergunta } = req.body

  const response = await ai.models.generateContent({
    model: 'gemini-flash-latest',
    contents: pergunta,
    config: {
      systemInstruction: `Você é um assistente do aplicativo "CiberGuardião",
      que ensina pessoas idosas a se protegerem na internet.

      Responda de forma simples, gentil e com paciência.
      Use frases curtas. Evite termos técnicos.
      Se usar um termo técnico, explique o que significa.

      O aplicativo tem 4 seções:
      - Conheça os tipos de ataques: phishing, golpes por WhatsApp, spam, links maliciosos
      - Adote boas práticas: senhas fortes, privacidade, cuidado com o que compartilha
      - Canais para relatar ataque: delegacias de crimes cibernéticos, Procon
      - Saiba como se proteger: antivírus, verificação em duas etapas, atualizações

      Responda apenas perguntas relacionadas a segurança digital.
      Se a pergunta fugir do tema, redirecione gentilmente.`
    }
  })

  res.json({ resposta: response.text })
})

app.listen(3000, () => {
  console.log('Backend rodando em http://localhost:3000')
})