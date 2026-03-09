"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "idle" | "voice" | "chat" | "mic-error";

interface Message { role: "user" | "azure"; text: string; }

export default function SpeakWithAzureButton() {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget) { setReady(true); clearInterval(interval); }
    }, 300);
    setTimeout(() => clearInterval(interval), 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleVoiceClick() {
    // Check mic permission first
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setMode("mic-error");
      return;
    }

    const widget = document.querySelector("elevenlabs-convai") as
      | (HTMLElement & { open?: () => void }) | null;
    if (!widget) { setMode("mic-error"); return; }

    widget.style.visibility = "visible";
    widget.style.display = "block";
    widget.style.position = "fixed";
    widget.style.bottom = "20px";
    widget.style.right = "20px";
    widget.style.zIndex = "9999";
    widget.style.pointerEvents = "auto";

    if (typeof widget.open === "function") { widget.open(); setMode("voice"); return; }

    const tryClick = (attempts = 0) => {
      const btn = widget.shadowRoot?.querySelector("button");
      if (btn) { btn.click(); setMode("voice"); }
      else if (attempts < 10) { setTimeout(() => tryClick(attempts + 1), 200); }
      else { setMode("mic-error"); }
    };
    tryClick();
  }

  async function sendChat() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/azure-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: messages }),
      });
      const data = await res.json();
      setMessages(m => [...m, { role: "azure", text: data.reply }]);
    } catch {
      setMessages(m => [...m, { role: "azure", text: "Sorry, I'm having trouble connecting. Please call us at (703) 777-1234 or email hello@emberandasure.com." }]);
    } finally {
      setLoading(false);
    }
  }

  if (mode === "mic-error" || mode === "chat") {
    return (
      <div className="mt-6 w-full max-w-md mx-auto">
        {mode === "mic-error" && (
          <p className="text-center text-sm text-[#0ea5e9] mb-3">
            🎙 Looks like there's an issue with your microphone.<br />
            <span className="text-warm-white/60">Feel free to chat with us instead.</span>
          </p>
        )}
        <div className="border border-warm-white/10 rounded-sm bg-zinc-900/80 flex flex-col" style={{ height: 320 }}>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-warm-white/40 text-sm text-center mt-8">
                Hi! I'm Azure, your concierge. Ask me anything about Ember & Azure.
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs px-3 py-2 rounded text-sm ${
                  m.role === "user"
                    ? "bg-[#0ea5e9]/20 text-warm-white"
                    : "bg-zinc-800 text-warm-white/90"
                }`}>
                  {m.role === "azure" && <span className="text-[#0ea5e9] font-semibold text-xs block mb-1">Azure</span>}
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 px-3 py-2 rounded text-warm-white/40 text-sm">Azure is typing...</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="border-t border-warm-white/10 p-3 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendChat()}
              placeholder="Ask about reservations, menu, hours..."
              className="flex-1 bg-zinc-800 text-warm-white text-sm px-3 py-2 rounded-sm outline-none placeholder-warm-white/30"
            />
            <button
              onClick={sendChat}
              disabled={loading || !input.trim()}
              className="text-[#0ea5e9] text-sm font-semibold px-3 disabled:opacity-40"
            >
              Send
            </button>
          </div>
        </div>
        <button
          onClick={() => setMode("idle")}
          className="mt-2 text-xs text-warm-white/30 w-full text-center hover:text-warm-white/60"
        >
          Try voice instead
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleVoiceClick}
        className="rounded-sm border border-[#0ea5e9] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#0ea5e9] transition-all hover:bg-[#0ea5e9]/10"
      >
        🎙 Speak with Azure
      </button>
      <button
        type="button"
        onClick={() => { setMode("chat"); setMessages([]); }}
        className="text-xs text-warm-white/30 hover:text-warm-white/60 transition-colors"
      >
        Prefer to chat? →
      </button>
      <p className="text-xs text-warm-white/40">
        {ready ? "Our AI concierge is available now" : "Loading concierge..."}
      </p>
    </div>
  );
}
