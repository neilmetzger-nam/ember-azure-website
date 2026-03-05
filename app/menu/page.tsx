import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Ember & Azure",
  description: "Pan-Asian wood-fire cuisine, raw bar, and craft cocktails.",
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  accent: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "Raw Bar",
    accent: "text-azure",
    items: [
      {
        name: "Oysters on the Half Shell (6pc)",
        description: "East coast selection, mignonette, cocktail sauce, lemon",
        price: "$24",
      },
      {
        name: "Hamachi Crudo",
        description: "Yuzu kosho, crispy shallot, micro greens, sesame oil",
        price: "$18",
      },
      {
        name: "King Crab Legs",
        description: "Clarified butter, finger lime, grilled lemon",
        price: "$58",
      },
      {
        name: "Tuna Tartare",
        description: "Avocado, soy ginger dressing, wonton crisps, tobiko",
        price: "$19",
      },
      {
        name: "Seasonal Shellfish Tower",
        description:
          "Oysters, crab legs, shrimp, hamachi crudo — for two or more",
        price: "Market",
      },
    ],
  },
  {
    title: "From the Fire",
    accent: "text-ember",
    items: [
      {
        name: "Yakitori Omakase (7 Skewers)",
        description:
          "Chef's selection, binchotan grilled — thigh, breast, meatball, skin, heart, liver, tsukune",
        price: "$38",
      },
      {
        name: "Whole Bronzino",
        description: "Green curry, kaffir lime, Thai basil, charred scallion",
        price: "$42",
      },
      {
        name: "Slow-Roasted Pork Ribs",
        description: "Tamarind glaze, pickled daikon, cilantro, toasted peanut",
        price: "$34",
      },
      {
        name: "Miso Black Cod",
        description: "48-hour marinated, dashi broth, scallion, shiso",
        price: "$36",
      },
      {
        name: "Fire-Kissed Wagyu Ribeye",
        description: "12oz, gochujang butter, charred broccolini, garlic chips",
        price: "$68",
      },
      {
        name: "Char Siu Berkshire Pork Chop",
        description:
          "Honey-soy glaze, smoked over applewood, Asian pear slaw",
        price: "$38",
      },
    ],
  },
  {
    title: "Small Plates",
    accent: "text-gold",
    items: [
      {
        name: "Thai Beef Larb",
        description: "Toasted rice powder, fresh herbs, lime, chili flakes",
        price: "$16",
      },
      {
        name: "Crispy Brussels Sprouts",
        description: "Fish sauce caramel, crushed peanut, Thai chili, lime",
        price: "$14",
      },
      {
        name: "Dan Dan Noodles",
        description: "Szechuan pork ragù, chili oil, pickled mustard greens",
        price: "$16",
      },
      {
        name: "Charred Shishito Peppers",
        description: "Bonito flakes, ponzu aioli, flaky sea salt",
        price: "$12",
      },
      {
        name: "Wood-Fired Edamame",
        description: "Smoked sea salt, togarashi, garlic",
        price: "$10",
      },
    ],
  },
  {
    title: "Desserts",
    accent: "text-gold",
    items: [
      {
        name: "Matcha Crème Brûlée",
        description: "Torched tableside, white chocolate tuile, black sesame",
        price: "$14",
      },
      {
        name: "Charcoal Soft Serve",
        description: "Coconut activated charcoal, mochi pearls, yuzu curd",
        price: "$11",
      },
      {
        name: "Mango Sticky Rice",
        description: "Warm coconut cream, toasted sesame, pandan",
        price: "$13",
      },
    ],
  },
  {
    title: "Bar Menu",
    accent: "text-ember",
    items: [
      {
        name: "Ember Negroni",
        description: "Mezcal, Campari, sweet vermouth, smoked orange peel",
        price: "$17",
      },
      {
        name: "Azure Mule",
        description: "Butterfly pea gin, lime, ginger beer — shifts blue to violet",
        price: "$16",
      },
      {
        name: "Fire & Ice",
        description: "Jalapeño tequila, yuzu, coconut cream, torched pineapple",
        price: "$18",
      },
      {
        name: "Lychee Saketini",
        description: "Junmai sake, lychee liqueur, elderflower, lime",
        price: "$16",
      },
      {
        name: "Smoked Old Fashioned",
        description: "Japanese whisky, demerara, Angostura, cedarwood smoke",
        price: "$19",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-24">
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
            <h2
              className={`font-heading text-3xl font-bold ${section.accent}`}
            >
              {section.title}
            </h2>
            <div
              className={`mt-2 h-px w-12 ${
                section.accent === "text-azure"
                  ? "bg-azure"
                  : section.accent === "text-ember"
                  ? "bg-ember"
                  : "bg-gold"
              }`}
            />

            <div className="mt-8 space-y-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="group border-b border-white/5 pb-6"
                >
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
