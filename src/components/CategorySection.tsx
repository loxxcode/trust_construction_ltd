interface CategorySectionProps {
  id: string;
  title: string;
  image: string;
  items: string[];
  reversed?: boolean;
}

export const CategorySection = ({ id, title, image, items, reversed }: CategorySectionProps) => {
  return (
    <div id={id} className="scroll-mt-24">
      <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}>
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-xl shadow-card group">
            <img
              src={image}
              alt={title}
              className="w-full h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <h3
              className="absolute bottom-6 left-6 text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h3>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <h3
            className="text-2xl font-semibold mb-6 text-gradient-gold lg:hidden"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 bg-card hover:bg-secondary rounded-lg px-5 py-4 transition-all duration-300 border border-border hover:border-primary/30 hover:shadow-gold cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-secondary-foreground group-hover:text-foreground transition-colors font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
