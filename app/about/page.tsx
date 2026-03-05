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
              <div className="relative mb-8 h-64 overflow-hidden rounded-md shadow-lg">
                <Image
                  src="/images/wood-fire-grill-2.webp"
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
                Our 48-inch wood fire grill anchors the room. The fire glows
                behind hand-laid tile — you feel its warmth from every seat in
                the house. Oak, cherry, and applewood fuel the flames. We use
                binchotan charcoal for yakitori, open flame for whole fish, and
                low-and-slow smoke for ribs. Every cut of wood matters. Every
                ember tells a story.
              </p>
            </div>

            {/* Water */}
            <div>
              {/* TODO: raw-bar-oysters.webp */}
              <div className="mb-8 h-64 rounded-md bg-gradient-to-br from-charcoal to-azure/20 shadow-lg" />
              <h2 className="font-heading text-3xl font-bold text-azure">
                The Water
              </h2>
              <div className="mt-3 h-px w-12 bg-azure" />
              <p className="mt-6 leading-relaxed text-warm-white/60">
                Our raw bar is a counterpoint of cool precision. We source oysters
                from both coasts, king crab from Alaska, and seasonal fish from
                Tokyo&apos;s Tsukiji market tradition. Each piece is handled with
                respect, served simply, and allowed to speak for itself. The ocean
                needs no embellishment — only care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Space */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gold">
            The Space
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mt-8 text-lg leading-relaxed text-warm-white/60">
            One hundred twenty seats surround the open kitchen and its towering
            wood fire grill. Dark woods, warm metals, and soft lighting set the
            mood — upscale enough for a special occasion, relaxed enough for any
            Tuesday. The raw bar anchors one end of the room, the full bar the
            other, and the fire commands the center.
          </p>
          {/* IMAGE: restaurant-interior-wide.jpg */}
          <div className="mt-12 h-72 rounded-sm bg-gradient-to-r from-ember/10 via-charcoal to-azure/10" />
        </div>
      </section>
    </div>
  );
}
