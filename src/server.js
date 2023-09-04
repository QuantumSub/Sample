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