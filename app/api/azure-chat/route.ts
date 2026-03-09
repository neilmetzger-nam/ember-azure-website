import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `You are Azure, the AI concierge for Ember & Azure restaurant at Village at Leesburg, Virginia.
Ember & Azure is an upscale casual Pan-Asian wood-fire restaurant with a raw bar. 
Centerpiece: floor-to-ceiling wood fire grill. Raw bar: oysters, crab legs, raw seafood.
Cuisine: Thai, Chinese, Japanese. Full bar. ~120 seats.
Address: 1600 Village Market Blvd, Leesburg VA (Wegmans center).
Opening soon — you can help guests with reservations interest, menu questions, and general info.
Be warm, elegant, and concise. Never make up specific hours or prices — say "coming soon" for those.`;

export async function POST(req: NextRequest) {
  const { message, history = [] } = await req.json();

  const messages = [
    ...history.map((m: { role: string; text: string }) => ({
      role: m.role === "user" ? "user" as const : "assistant" as const,
      content: m.text,
    })),
    { role: "user" as const, content: message },
  ];

  const response = await client.messages.create({
    model: "claude-haiku-20240307",
    max_tokens: 300,
    system: SYSTEM,
    messages,
  });

  const reply = response.content[0].type === "text" ? response.content[0].text : "I'm sorry, I couldn't process that.";
  return NextResponse.json({ reply });
}
