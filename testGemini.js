import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config({ path: ".env.local" });

console.log("✅ GEMINI_API_KEY =", process.env.GEMINI_API_KEY ? "Loaded" : "❌ Not Loaded");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGemini() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent("Say hello world!");
    const response = await result.response;
    console.log("✅ Gemini says:", response.text());
  } catch (error) {
    console.error("❌ Gemini Error:", error);
  }
}

testGemini();
