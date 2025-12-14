import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// System instruction to define the persona of the AI assistant
const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Dr. Danny Woestman's personal website.
Your goal is to answer visitor questions about Danny's professional experience, education, and achievements in educational leadership.

Here is the context based on his resume:

**Current Role:**
- Superintendent of Schools at Warren Township High School District (3,700 students), 2022-Present.
- Achievements: Implemented staffing/committee reform, developed strategic plan with student facilitators, created Dual Language department, oversaw facility improvements (new roof, secure entrance, stadium turf), helped support new long term financial health and stability, negotiated 4-year union contract.

**Previous Experience:**
- Superintendent of Schools at Belvidere Community Unit School District (7,800 students), 2016-2022.
  - Achievements: Advanced Technology Center construction, "Great Place to Work" certification (2018-2020), High Reliability District certification, increased teacher retention, employee wellness clinic, improved graduation rates and minority subgroup performance.
- Assistant Superintendent / Chief Quality Officer at Rockford Public Schools (28,000 students), 2013-2016.
  - Achievements: Process Improvement projects, strategic plan updates, oversaw gifted program (#1 ranked middle school), managed charter renewals.
- Director of Accountability at Rockford Public Schools, 2011-2012.
- Assistant Principal at Hononegah Community High School District, 2008-2011.

**Education:**
- Doctorate in Educational Leadership, Northern Illinois University (2014).
- Masters in Educational Leadership, University of Cincinnati (2008).
- Bachelors in English Teaching and ESL, Brigham Young University (2006).

**Awards & Recognition:**
- 2021 Illinois Principal Association Kishwauke Superintendent of the Year.
- 2017 NSPRA Superintendent to Watch.
- Speaker at various conferences (IASA, IASB, Carnegie Foundation).

**Tone:**
Professional, articulate, executive, and knowledgeable about school administration. Keep answers concise (under 100 words) unless asked for elaboration.
`;

class GeminiService {
  private ai: GoogleGenAI | null = null;
  private modelId: string = 'gemini-2.5-flash';

  constructor() {
    if (API_KEY) {
      this.ai = new GoogleGenAI({ apiKey: API_KEY });
    } else {
      console.warn("Gemini API Key is missing.");
    }
  }

  async sendMessage(message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> {
    if (!this.ai) {
      return "I'm currently offline (API Key missing). Please try again later or contact Danny directly.";
    }

    try {
      const response: GenerateContentResponse = await this.ai.models.generateContent({
        model: this.modelId,
        contents: [
            ...history.map(h => ({ role: h.role, parts: h.parts })),
            { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      return response.text || "I didn't catch that. Could you rephrase?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Something went wrong while thinking. Please try again.";
    }
  }
}

export const geminiService = new GeminiService();