"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

interface MenuSection {
  title: string;
  subtitle?: string;
  footnote?: string;
  items: MenuItem[];
}

export default function MenuContent({
  sections,
}: {
  sections: MenuSection[];
}) {
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <>
      {/* Menu sections */}
      <div className="mx-auto mt-16 max-w-4xl px-6">
        {sections.map((section) => (
          <div key={section.title} className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-ember">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="mt-1 text-sm text-warm-white/40">
                {section.subtitle}
              </p>
            )}
            <div className="mt-2 h-px w-12 bg-ember" />

            <div className="mt-8 space-y-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-4 border-b border-white/5 pb-6"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md transition-opacity hover:opacity-80"
                    aria-label={`View ${item.name}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-heading text-lg font-bold text-warm-white">
                        {item.name}
                      </h3>
                      <span className="shrink-0 text-sm font-medium text-gold">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-warm-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {section.footnote && (
              <p className="mt-6 text-center text-xs italic text-warm-white/40">
                {section.footnote}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-6 text-4xl leading-none text-warm-white/70 transition-colors hover:text-warm-white"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Content — stop propagation so clicking image doesn't close */}
          <div
            className="flex max-w-2xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] w-full overflow-hidden rounded-lg">
              <Image
                src={selected.image}
                alt={selected.alt}
                width={512}
                height={512}
                className="h-auto max-h-[80vh] w-full object-contain"
              />
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold text-warm-white">
              {selected.name}
            </h3>
            <p className="mt-1 text-center text-sm text-warm-white/60">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
