export default function InteriorPage() {
  const palette = [
    { name: "Oxford Blue", hex: "#002147" },
    { name: "Brass Gold", hex: "#B8924A" },
    { name: "Marble White", hex: "#F5F0E9" },
    { name: "Slate Gray", hex: "#6B7280" },
    { name: "Ember Black", hex: "#0A0A0A" },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div className="relative h-[70vh] overflow-hidden">
        <img src="/images/interior-hero-final.jpg" alt="Ember & Azure interior concept" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">Design Concept</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4">The Space</h1>
          <p className="text-xl text-stone-300 max-w-xl">Where fire meets elegance.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="text-stone-400 text-lg leading-relaxed">
          The following represents our initial design vision for Suite 120 at Village at Leesburg.
          These AI-generated concept renderings capture the palette, atmosphere, and material direction we are pursuing.{" "}
          <span className="text-amber-400 font-medium">More detailed architectural renderings will be provided shortly</span>{" "}
          as we finalize the floor plan and engage our design team.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-light text-white mb-8 text-center tracking-wide">Color Palette</h2>
        <div className="grid grid-cols-5 gap-3">
          {palette.map((color) => (
            <div key={color.name} className="text-center">
              <div className="h-24 rounded-lg mb-3 shadow-lg" style={{ backgroundColor: color.hex }} />
              <p className="text-xs text-stone-400 uppercase tracking-wide">{color.name}</p>
              <p className="text-xs text-stone-600 font-mono mt-1">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-light text-white mb-8 text-center tracking-wide">Materials & Finishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Walls", desc: "Deep Oxford Blue with navy fluted panel accents. Brass fixture trim throughout." },
            { title: "Ceiling", desc: "Matte black industrial — existing black ceiling retained and enhanced with exposed brass conduit detail." },
            { title: "Flooring", desc: "Existing dark slate tile retained in entry and bar zones. Dark stained oak in dining areas." },
            { title: "Tables", desc: "White Carrara marble tops with brushed brass bases. Round and rectangular configurations." },
            { title: "Seating", desc: "Deep navy velvet dining chairs and curved booth banquettes. Brass nail-head detail." },
            { title: "Lighting", desc: "Brass globe pendants at varying heights. Warm amber candlelight at every table. Sconce accents on feature walls." },
            { title: "Bar", desc: "Dark walnut bar top with brass rail. Backlit bottle display. Fluted navy cabinet fronts." },
            { title: "Wood Fire Hearth", desc: "Existing side-wall wood fire oven retiled in dark slate. Brushed bronze hood above. Feature focal point from all dining zones." },
          ].map((item) => (
            <div key={item.title} className="bg-stone-900 border border-stone-800 rounded-xl p-5">
              <h3 className="text-amber-400 font-medium mb-2">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-stone-900 border-y border-stone-800 py-16 px-6 text-center my-8">
        <h2 className="text-2xl font-light text-white mb-8 tracking-wide">The Atmosphere</h2>
        <div className="flex justify-center gap-16">
          {["Dramatic", "Intimate", "Elemental"].map((word) => (
            <div key={word} className="text-center">
              <p className="text-3xl font-light text-amber-400">{word}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="bg-stone-900 border border-amber-400/20 rounded-2xl p-8">
          <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-3">Coming Soon</p>
          <h3 className="text-2xl font-light text-white mb-4">Full Architectural Renderings</h3>
          <p className="text-stone-400 text-sm leading-relaxed">
            Detailed 3D architectural renderings showing every angle of the space —
            bar, dining room, raw bar station, and the wood fire hearth wall —
            are in development and will be shared with our leasing team shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
