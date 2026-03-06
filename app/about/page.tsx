import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Ember & Azure",
  description:
    "The story behind Ember & Azure — wood fire philosophy and Pan-Asian inspiration.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-24">
      {/* Hero section */}
      <section className="relative px-6 py-16">
        {/* IMAGE: wood-fire-grill-interior.jpg */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-5xl font-bold text-warm-white md:text-6xl">
            Our Story
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-ember" />
        </div>
      </section>

      {/* The story */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed text-warm-white/70">
            We&apos;ve been feeding Loudoun County for years. Ember &amp; Azure
            is what we&apos;ve always wanted to build.
          </p>
          <p className="text-lg leading-relaxed text-warm-white/70">
            The idea was simple but ambitious: a restaurant where fire and water
            coexist as equal forces. Where the primal, transformative power of an
            open wood fire meets the cool, pristine elegance of a world-class raw
            bar. Where Pan-Asian flavors — Thai, Chinese, Japanese — find a new
            home in the rolling hills of Virginia.
          </p>
          <p className="text-lg leading-relaxed text-warm-white/70">
            Our floor-to-ceiling wood fire grill isn&apos;t just a kitchen
            feature — it&apos;s the soul of the restaurant. Every guest sees it,
            hears it, feels its warmth. It informs every dish that leaves the
            kitchen, from slow-roasted pork ribs lacquered in tamarind glaze to
            whole bronzino draped in green curry and kaffir lime.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Fire */}
            <div>
              <div className="relative mb-8 h-80 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/wood-fire-grill-1.webp"
                  alt="Wood fire grill with flames behind hand-laid tile"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-heading text-3xl font-bold text-ember">
                The Fire
              </h2>
              <div className="mt-3 h-px w-12 bg-ember" />
              <p className="mt-6 leading-relaxed text-warm-white/60">
                At the heart of Ember &amp; Azure stands our wood fire hearth
                — a floor-to-ceiling feature that fills the room with the scent
                of smoke and the warmth of open flame. Every protein that leaves
                our kitchen has touched that fire. The char, the caramelization,
                the depth of flavor — it cannot be replicated. It can only be
                earned.
              </p>
            </div>

            {/* Water */}
            <div>
              <div className="relative mb-8 h-80 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/seafood-tower-1.webp"
                  alt="Seafood tower with oysters and fresh shellfish"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-heading text-3xl font-bold text-azure">
                The Water
              </h2>
              <div className="mt-3 h-px w-12 bg-azure" />
              <p className="mt-6 leading-relaxed text-warm-white/60">
                Our raw bar is a celebration of the sea at its purest. Oysters
                shucked to order. King crab cracked tableside. Hamachi crudo
                kissed with yuzu. No heat required — just the cold, clean
                honesty of the ocean. The water balances the fire. That tension
                is what makes this place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Elements */}
      <section className="bg-stone-900 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-warm-white md:text-4xl">
            Two Elements. One Kitchen.
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-ember" />
          <p className="mt-8 text-lg leading-relaxed text-warm-white/70">
            Ember &amp; Azure was born from a simple belief: that the most
            compelling dining experiences are built on contrast. Fire and water.
            Raw and roasted. Intimate and dramatic. We are a Pan-Asian kitchen
            that respects ancient technique and embraces modern vision. Every
            dish, every cocktail, every evening here is the result of those two
            forces in conversation.
          </p>
        </div>
      </section>
    </div>
  );
}
