"use client";

export default function SpeakWithAzureButton() {
  function handleClick() {
    const widget = document.querySelector("elevenlabs-convai") as
      | (HTMLElement & { open?: () => void })
      | null;
    if (widget) {
      widget.style.visibility = "visible";
      widget.style.bottom = "20px";
      widget.style.right = "20px";
      widget.style.pointerEvents = "auto";
      if (typeof widget.open === "function") widget.open();
      // Fallback: click the start call button inside shadow DOM
      setTimeout(() => {
        const btn = widget.shadowRoot?.querySelector("button");
        btn?.click();
      }, 300);
    }
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
        Our AI concierge is available now
      </p>
    </div>
  );
}
