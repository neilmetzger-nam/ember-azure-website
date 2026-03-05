import Link from "next/link";
import Image from "next/image";
import EmberParticles from "./components/EmberParticles";

const featuredDishes = [
  {
    name: "Yakitori Omakase",
    description:
      "Seven skewers chosen by the chef, each kissed by binchotan charcoal. A journey through fire.",
    price: "$38",
    imageComment: "TODO: yakitori-skewers.webp",
  },
  {
    name: "Whole Fire-Roasted Fish",
    description:
      "Whole bronzino roasted over open flame, draped in green curry with kaffir lime and Thai basil.",
    price: "$42",
    imageComment: "TODO: whole-fish.webp",
  },
  {
    name: "Raw Bar Tower",
    description:
      "Oysters, king crab, hamachi crudo, and seasonal shellfish — a monument to the sea.",
    price: "Market Price",
    imageComment: "TODO: raw-bar-tower.webp",
  },
];

const cocktails = [
  {
    name: "Ember Negroni",
    description: "Mezcal, Campari, sweet vermouth, smoked orange peel",
  },
  {
    name: "Azure Mule",
    description: "Butterfly pea gin, lime, ginger beer, shifting from blue to violet",
  },
  {
    name: "Fire & Ice",
    description: "Jalapeño tequila, yuzu, coconut cream, torched pineapple",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/wood-fire-grill-1.webp"
          alt="Wood fire grill at Ember & Azure"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        {/* Subtle ember glow at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ember/10 to-transparent" />

        <EmberParticles />

        <div className="relative z-10 px-6 text-center">
          {/* Logo */}
          <h1 className="mb-4">
            <span className="font-heading text-6xl font-bold tracking-wide text-ember md:text-8xl">
              EMBER
            </span>
            <br />
            <span className="font-heading text-4xl font-light italic text-azure md:text-6xl">
              &amp; Azure
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-md text-lg tracking-widest text-warm-white/70">
            Wood Fire. Raw Bar. Pan-Asian.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/reservations"
              className="rounded-sm bg-ember px-8 py-3 text-sm font-semibold uppercase tracking-widest text-warm-white transition-all hover:bg-ember/80"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="rounded-sm border border-warm-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-warm-white transition-all hover:border-warm-white/60"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-charcoal px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gold md:text-4xl">
            Born from Fire and Water
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-ember" />
          <p className="mt-8 text-lg leading-relaxed text-warm-white/70">
            Ember &amp; Azure is where primal fire meets the cool elegance of the sea.
            Our 48-inch wood fire grill anchors the room. The fire glows behind
            hand-laid tile — you feel its warmth from every seat in the house.
            At the raw bar, pristine shellfish and delicate crudo offer a counterpoint
            of purity. This is Pan-Asian cuisine reimagined through flame and water,
            bold yet refined, theatrical yet deeply personal.
          </p>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-charcoal px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-warm-white md:text-4xl">
            From Our Kitchen
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-ember" />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="group overflow-hidden rounded-sm border border-white/5 bg-white/[0.02] transition-all hover:border-ember/30"
              >
                {/* {dish.imageComment} */}
                <div className="h-56 bg-gradient-to-br from-charcoal via-charcoal to-ember/20" />
                <div className="p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-heading text-xl font-bold text-warm-white">
                      {dish.name}
                    </h3>
                    <span className="text-sm font-medium text-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-warm-white/50">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raw Bar Callout */}
      <section className="relative overflow-hidden px-6 py-24">
        {/* IMAGE: raw-bar-spread.jpg */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-azure/20" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-azure md:text-4xl">
            The Raw Bar
          </h2>
          <div className="mt-4 h-px w-16 bg-azure" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-warm-white/70">
            Pristine oysters on the half shell. Chilled king crab legs with clarified
            butter. Hamachi crudo with yuzu and crispy shallots. Seasonal shellfish
            sourced daily from the coast — served simply, letting the ocean speak.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm uppercase tracking-widest text-azure/80">
            <span>Oysters</span>
            <span className="text-azure/30">|</span>
            <span>Crab Legs</span>
            <span className="text-azure/30">|</span>
            <span>Seasonal Crudo</span>
            <span className="text-azure/30">|</span>
            <span>Shellfish Tower</span>
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section className="bg-charcoal px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-warm-white md:text-4xl">
            Craft Cocktails
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {cocktails.map((drink) => (
              <div key={drink.name} className="text-center">
                {/* IMAGE: cocktail placeholder */}
                <div className="mx-auto h-48 w-48 rounded-full bg-gradient-to-br from-charcoal to-ember/15" />
                <h3 className="mt-6 font-heading text-xl font-bold text-gold">
                  {drink.name}
                </h3>
                <p className="mt-2 text-sm text-warm-white/50">
                  {drink.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="border-t border-white/5 bg-charcoal px-6 py-24">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-warm-white">
              Hours
            </h2>
            <div className="mt-4 h-px w-12 bg-ember" />
            <div className="mt-6 space-y-2 text-warm-white/60">
              <p>Tuesday – Thursday: 5:00 PM – 10:00 PM</p>
              <p>Friday – Saturday: 5:00 PM – 11:00 PM</p>
              <p>Sunday: 5:00 PM – 9:00 PM</p>
              <p>Monday: Closed</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-warm-white">
              Location
            </h2>
            <div className="mt-4 h-px w-12 bg-azure" />
            <div className="mt-6 space-y-2 text-warm-white/60">
              <p>Village at Leesburg</p>
              <p>1600 Village Market Blvd</p>
              <p>Leesburg, VA 20175</p>
              <p className="mt-4 text-sm text-gold">Opening 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
