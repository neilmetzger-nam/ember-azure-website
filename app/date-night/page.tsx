import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Date Night | Ember & Azure",
  description:
    "The perfect date night in Leesburg — dinner at Ember & Azure, movies at Cobb Village 14, bowling at The Branch.",
};

export default function DateNightPage() {
  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-24">
      {/* Hero */}
      <section className="px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-ember mb-3">Village at Leesburg</p>
        <h1 className="font-heading text-5xl font-bold text-warm-white md:text-6xl">
          Make a night of it.
        </h1>
        <div className="mx-auto mt-4 h-px w-16 bg-ember" />
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-white/60">
          Ember & Azure is designed to anchor your evening — not just dinner, but a full destination.
          Village at Leesburg puts everything you need within steps of each other.
        </p>
      </section>

      {/* Perfect Evening */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl rounded-lg border border-ember/20 bg-ember/5 p-8 text-center">
          <p className="text-gold font-semibold mb-3">The Perfect Evening</p>
          <p className="text-warm-white/70 leading-relaxed">
            Arrive at 6:30 for dinner and cocktails. Wood-fired steak, raw bar, a great bottle of wine.
            Linger over dessert. Then at 9:00 — walk next door for the late show, or cross the street
            for bowling and a nightcap. This is what Village at Leesburg was built for.
          </p>
        </div>
      </section>

      {/* Three Cards */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-white/5 bg-stone-950 p-6">
            <div className="text-3xl mb-3">🔥</div>
            <h2 className="font-heading text-xl font-bold text-warm-white">Dinner at Ember & Azure</h2>
            <p className="mt-3 text-sm text-warm-white/50 leading-relaxed">
              Start your evening with wood-fired small plates, raw bar, craft cocktails, and something
              from the grill. Refined casual — dress up if you feel like it. Perfect for a first date,
              an anniversary, or just a great Tuesday.
            </p>
            <Link href="/menu" className="mt-4 inline-block text-xs text-ember hover:text-gold transition-colors">
              View our menu →
            </Link>
          </div>

          <div className="rounded-lg border border-white/5 bg-stone-950 p-6">
            <div className="text-3xl mb-3">🎬</div>
            <h2 className="font-heading text-xl font-bold text-warm-white">Cobb Village 14</h2>
            <p className="mt-3 text-sm text-warm-white/50 leading-relaxed">
              Catch a late show right next door. Dinner first, then the movies — the way an evening
              out is supposed to feel. The theater is steps away from our front door.
              Check what is playing before you reserve your table.
            </p>
            <a
              href="https://www.cobbtheatres.com/village14"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs text-ember hover:text-gold transition-colors"
            >
              Showtimes →
            </a>
          </div>

          <div className="rounded-lg border border-white/5 bg-stone-950 p-6">
            <div className="text-3xl mb-3">🎳</div>
            <h2 className="font-heading text-xl font-bold text-warm-white">The Branch</h2>
            <p className="mt-3 text-sm text-warm-white/50 leading-relaxed">
              Bowling, entertainment, and good times across the street. Perfect after dinner —
              or grab a late drink with us after a few frames.
              Village at Leesburg has everything you need for a full night out.
            </p>
            <a
              href="https://www.thebranchleesburg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs text-ember hover:text-gold transition-colors"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-warm-white">Refined Casual</h2>
          <div className="mx-auto mt-3 h-px w-12 bg-ember" />
          <p className="mx-auto mt-6 max-w-xl text-warm-white/60 leading-relaxed">
            We love when guests dress up — but you will never feel out of place if you come as you are.
            Ember & Azure is the kind of place where a little effort goes a long way.
            Come in a blazer. Come in jeans. Just come hungry.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 text-center">
        <Link
          href="/reservations"
          className="inline-block rounded border border-ember px-10 py-3 text-sm font-semibold uppercase tracking-widest text-ember transition-all hover:bg-ember hover:text-charcoal"
        >
          Reserve Your Table
        </Link>
      </section>
    </div>
  );
}
