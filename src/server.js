// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//     organization: "org-DH65y7mKHwBpuSbgNrspNS18",
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// // Set up the server
// app.use(bodyParser.json());
// app.use(cors())

// const express = require('express');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// const cors = require("cors");
// // app.use(express.json());
// app.use(cors());

// // Start the server
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const apiUrl = 'https://api.openai.com/v1/chat/completions';
// // Set up the ChatGPT endpoint
// const options = {
//   method: "POST",
//   headers:{
//     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     model:"gpt-3.5-turbo",
//     messages: [{role:"user", content:"how are you?"}],
//     max_tokens: 100
//   })
// }

// app.post('/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await axios.post(apiUrl, {
//       prompt: message,
//       max_tokens: 50,
//       temperature: 0.6,
//       n: 1
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
//       },
//       body: JSON.stringify({
//         model:"gpt-3.5-turbo",
//         max_tokens: 100
//       })
//     });

//     const botReply = response.data.choices[0].text.trim();
//     res.send({ reply: botReply });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'An error occurred' });
//   }
// });

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

import OpenAI from "openai";
// const { Configuration, OpenAIApi } = openai;

const openai = new OpenAI({
  apiKey: "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",
  organization: "org-DH65y7mKHwBpuSbgNrspNS18"
});
// new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors())

// Set up the ChatGPT endpoint
app.post("/chat", async (req, res) => {
  // Get the prompt from the request
  const prompt = res.req.body;

  // Generate a response with ChatGPT
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt.message }],
  });
  res.send(completion.choices[0].message.content);
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});