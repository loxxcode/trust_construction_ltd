import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const decorationAssets = import.meta.glob("@/assets/decorations/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const decorationImages = Object.entries(decorationAssets)
  .filter(([path]) => !path.includes("/assets/products/"))
  .map(([path, src]) => ({
    path,
    src,
    name: path.split("/").pop()?.replace(/\.(png|jpe?g|webp)$/i, "") ?? "Decoration",
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const Decoration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-2">
              Decoration Gallery
            </p>
            <h1
              className="text-xl md:text-2xl font-bold mb-4 font-sans"
            >
              Transform Your House Into a <span className="text-gradient-gold">Beautiful Home</span>
            </h1>
            <p className="text-foreground text-lg max-w-xl mx-auto">
              Discover inspiring home decoration ideas that bring style, comfort, and personality to every room. Browse our gallery and find designs that help you create the perfect living space.
            </p>
          </div>

          {decorationImages.length === 0 ? (
            <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-6 text-center">
              <p className="text-foreground font-semibold mb-2">No decoration images found</p>
              <p className="text-muted-foreground text-sm">
                Add your decoration images to <code>src/assets</code> (not inside{" "}
                <code>src/assets/products</code>) and they will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {decorationImages.map((img) => (
                <div
                  key={img.path}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-gold"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={img.src}
                      alt={img.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                      {img.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Decoration;

