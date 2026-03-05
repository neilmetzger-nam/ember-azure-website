import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu | Ember & Azure",
  description:
    "Pan-Asian wood-fire cuisine, raw bar, lunch specials, and craft cocktails at Ember & Azure.",
};

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

const menuSections: MenuSection[] = [
  {
    title: "Raw Bar",
    items: [
      {
        name: "Oysters on the Half Shell",
        description: "East coast selection, mignonette, cocktail sauce, lemon",
        price: "$18",
        image: "/images/oysters-half-shell-1.webp",
        alt: "Oysters on the half shell",
      },
      {
        name: "Shellfish Tower",
        description:
          "Oysters, crab legs, shrimp, hamachi crudo — for two or more",
        price: "Market Price",
        image: "/images/seafood-tower-1.webp",
        alt: "Shellfish tower with oysters and crab",
      },
      {
        name: "King Crab Legs",
        description: "Clarified butter, finger lime, grilled lemon",
        price: "Market Price",
        image: "/images/crab-legs-1.webp",
        alt: "King crab legs with clarified butter",
      },
      {
        name: "Tuna Tartare",
        description: "Avocado, soy ginger dressing, wonton crisps, tobiko",
        price: "$22",
        image: "/images/tuna-tartare-1.webp",
        alt: "Tuna tartare with wonton crisps",
      },
      {
        name: "Hamachi Crudo",
        description: "Yuzu kosho, crispy shallot, micro greens, sesame oil",
        price: "$21",
        image: "/images/hamachi-crudo-1.webp",
        alt: "Hamachi crudo with yuzu kosho",
      },
    ],
  },
  {
    title: "From the Fire",
    items: [
      {
        name: "Yakitori Omakase",
        description:
          "Seven skewers, chef's selection — thigh, breast, meatball, skin, heart, liver, tsukune",
        price: "$38",
        image: "/images/yakitori-skewers-1.webp",
        alt: "Yakitori skewers grilled over binchotan charcoal",
      },
      {
        name: "Whole Fire-Roasted Bronzino",
        description: "Green curry, kaffir lime, Thai basil, charred scallion",
        price: "$42",
        image: "/images/whole-fish-1.webp",
        alt: "Whole fire-roasted bronzino",
      },
      {
        name: "Slow-Roasted Pork Ribs",
        description: "Tamarind glaze, pickled daikon, cilantro, toasted peanut",
        price: "$36",
        image: "/images/pork-ribs-1.webp",
        alt: "Slow-roasted pork ribs with tamarind glaze",
      },
      {
        name: "A5 Wagyu Ribeye",
        description: "12oz, gochujang butter, charred broccolini, garlic chips",
        price: "$65",
        image: "/images/wagyu-ribeye-1.webp",
        alt: "A5 Wagyu ribeye with gochujang butter",
      },
      {
        name: "Miso Black Cod",
        description: "48-hour marinated, dashi broth, scallion, shiso",
        price: "$38",
        image: "/images/miso-black-cod-1.webp",
        alt: "Miso black cod in dashi broth",
      },
      {
        name: "Wood-Fired Pork Chop",
        description: "Honey-soy glaze, smoked over applewood, Asian pear slaw",
        price: "$32",
        image: "/images/pork-chop-1.webp",
        alt: "Wood-fired pork chop with honey-soy glaze",
      },
    ],
  },
  {
    title: "Small Plates",
    items: [
      {
        name: "Thai Beef Larb",
        description: "Toasted rice powder, fresh herbs, lime, chili flakes",
        price: "$16",
        image: "/images/beef-larb-1.webp",
        alt: "Thai beef larb with fresh herbs",
      },
      {
        name: "Crispy Brussels Sprouts",
        description: "Fish sauce caramel, crushed peanut, Thai chili, lime",
        price: "$14",
        image: "/images/brussels-sprouts-1.webp",
        alt: "Crispy Brussels sprouts with fish sauce caramel",
      },
      {
        name: "Dan Dan Noodles",
        description: "Szechuan pork ragù, chili oil, pickled mustard greens",
        price: "$16",
        image: "/images/dan-dan-noodles-1.webp",
        alt: "Dan dan noodles with Szechuan pork",
      },
      {
        name: "Charred Shishito Peppers",
        description: "Bonito flakes, ponzu aioli, flaky sea salt",
        price: "$12",
        image: "/images/shishito-peppers-1.webp",
        alt: "Charred shishito peppers with bonito flakes",
      },
      {
        name: "Wood-Fired Edamame",
        description: "Smoked sea salt, togarashi, garlic",
        price: "$10",
        image: "/images/edamame-1.webp",
        alt: "Wood-fired edamame",
      },
      {
        name: "Crispy Rice",
        description: "Spicy tuna, avocado, sriracha aioli, sesame",
        price: "$14",
        image: "/images/crispy-rice-1.webp",
        alt: "Crispy rice with spicy tuna",
      },
    ],
  },
  {
    title: "Lunch Specials",
    subtitle: "11:30am – 3pm weekdays",
    footnote:
      "Add protein skewer: Chicken +$6 · Prawns +$9 · Lamb +$10 · A5 Wagyu +$14",
    items: [
      {
        name: "Ember Bowl",
        description:
          "Wood-grilled chicken, jasmine rice, Thai chili glaze, crispy shallots",
        price: "$18",
        image: "/images/ramen-bowl-1.webp",
        alt: "Ember bowl with wood-grilled chicken",
      },
      {
        name: "Omakase Bowl",
        description:
          "Chef's daily sashimi-grade fish, seasoned rice, yuzu ponzu, tobiko",
        price: "$26",
        image: "/images/omakase-bowl-1.webp",
        alt: "Omakase bowl with sashimi-grade fish",
      },
      {
        name: "Cold Soba Bowl",
        description: "Buckwheat noodles, soft boiled egg, sesame ponzu",
        price: "$19",
        image: "/images/cold-soba-bowl-1.webp",
        alt: "Cold soba bowl with soft boiled egg",
      },
      {
        name: "Build Your Own Ramen",
        description:
          "Choose broth (Tonkotsu / Miso / Tom Kha / Tantanmen), noodle, protein",
        price: "$26",
        image: "/images/tom-kha-ramen-1.webp",
        alt: "Ramen with rich broth and toppings",
      },
      {
        name: "Green Curry",
        description:
          "Coconut, Thai eggplant, kaffir lime, jasmine rice + protein skewer",
        price: "$19",
        image: "/images/green-curry-1.webp",
        alt: "Green curry with jasmine rice",
      },
      {
        name: "Massaman Curry",
        description:
          "Peanut, potato, warm spices, jasmine rice + protein skewer",
        price: "$19",
        image: "/images/massaman-curry-1.webp",
        alt: "Massaman curry with peanut and potato",
      },
      {
        name: "Panang Curry",
        description:
          "Rich coconut, makrut lime leaf, jasmine rice + protein skewer",
        price: "$19",
        image: "/images/panang-curry-1.webp",
        alt: "Panang curry with makrut lime",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Matcha Crème Brûlée",
        description:
          "Torched tableside, white chocolate tuile, black sesame",
        price: "$14",
        image: "/images/matcha-brulee-1.webp",
        alt: "Matcha crème brûlée torched tableside",
      },
      {
        name: "Charcoal Soft Serve",
        description: "Coconut activated charcoal, mochi pearls, yuzu curd",
        price: "$11",
        image: "/images/charcoal-soft-serve-1.webp",
        alt: "Charcoal soft serve with mochi pearls",
      },
      {
        name: "Mango Sticky Rice",
        description: "Warm coconut cream, toasted sesame, pandan",
        price: "$13",
        image: "/images/mango-sticky-rice-1.webp",
        alt: "Mango sticky rice with coconut cream",
      },
    ],
  },
  {
    title: "Cocktails",
    items: [
      {
        name: "Ember Negroni",
        description: "Mezcal, Campari, sweet vermouth, smoked orange peel",
        price: "$17",
        image: "/images/cocktail-negroni-1.webp",
        alt: "Ember Negroni with smoked orange peel",
      },
      {
        name: "Tokyo Mule",
        description:
          "Butterfly pea gin, yuzu, ginger beer, blue-to-violet gradient",
        price: "$16",
        image: "/images/cocktail-tokyo-mule-1.webp",
        alt: "Tokyo Mule shifting blue to violet",
      },
      {
        name: "Fire & Ice",
        description:
          "Jalapeño tequila, yuzu, coconut cream, torched pineapple",
        price: "$18",
        image: "/images/cocktail-fire-ice-1.webp",
        alt: "Fire and Ice cocktail with torched pineapple",
      },
      {
        name: "Lychee Saketini",
        description: "Junmai sake, lychee liqueur, elderflower, lime",
        price: "$16",
        image: "/images/cocktail-saketini-1.webp",
        alt: "Lychee Saketini with elderflower",
      },
      {
        name: "Smoked Old Fashioned",
        description:
          "Japanese whisky, demerara, Angostura, cedarwood smoke",
        price: "$19",
        image: "/images/cocktail-old-fashioned-1.webp",
        alt: "Smoked Old Fashioned with cedarwood smoke",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-28 pb-24">
      {/* Header */}
      <div className="px-6 text-center">
        <h1 className="font-heading text-5xl font-bold text-warm-white md:text-6xl">
          The Menu
        </h1>
        <p className="mt-4 text-sm uppercase tracking-widest text-warm-white/40">
          Wood Fire &bull; Raw Bar &bull; Pan-Asian
        </p>
        <div className="mx-auto mt-4 h-px w-16 bg-ember" />
      </div>

      {/* Menu sections */}
      <div className="mx-auto mt-16 max-w-4xl px-6">
        {menuSections.map((section) => (
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
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
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
    </div>
  );
}
