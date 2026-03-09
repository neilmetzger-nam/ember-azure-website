"use client";

import { useEffect, useState } from "react";

export default function SpeakWithAzureButton() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget) { setReady(true); clearInterval(interval); }
    }, 300);
    setTimeout(() => clearInterval(interval), 10000);
    return () => clearInterval(interval);
  }, []);

  function handleClick() {
    const widget = document.querySelector("elevenlabs-convai") as
      | (HTMLElement & { open?: () => void }) | null;
    if (!widget) return;

    widget.style.visibility = "visible";
    widget.style.display = "block";
    widget.style.position = "fixed";
    widget.style.bottom = "20px";
    widget.style.right = "20px";
    widget.style.zIndex = "9999";
    widget.style.pointerEvents = "auto";

    if (typeof widget.open === "function") { widget.open(); return; }

    const tryClick = (attempts = 0) => {
      const btn = widget.shadowRoot?.querySelector("button");
      if (btn) { btn.click(); }
      else if (attempts < 10) { setTimeout(() => tryClick(attempts + 1), 200); }
    };
    tryClick();
  }

  return (
    <div className="mt-6 flex flex-col items-center">
      <button
        type="button"
        onClick={handleClick}
        className="rounded-sm border border-[#0ea5e9] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#0ea5e9] transition-all hover:bg-[#0ea5e9]/10"
      >
        🎙 Speak with Azure
      </button>
      <p className="mt-2 text-xs text-warm-white/40">
        {ready ? "Our AI concierge is available now" : "Loading concierge..."}
      </p>
    </div>
  );
}
