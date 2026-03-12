import { Award, Globe, Truck, Shield } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const AboutSection = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Globe, label: "Countries Served", value: "6+" },
    { icon: Truck, label: "Products Delivered", value: "50K+" },
    { icon: Shield, label: "Warranty Years", value: "1" },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-2">Who We Are</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
              About <span className="text-gradient-gold">Us</span>
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                We are a leading supplier of premium building materials and interior finishing solutions. For over 15 years, we have been partnering with architects, designers, contractors, and homeowners to bring visionary spaces to life.
              </p>
              <p>
                Our curated portfolio spans sanitary ware, modern lighting, durable flooring, and decorative ceiling and wall panels — all sourced from world-class manufacturers and rigorously tested for quality.
              </p>
              <p>
                From concept to completion, our expert team provides personalized guidance, competitive pricing, and reliable delivery to ensure your project exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-card">
              <img
                src={heroBanner}
                alt="Our showroom"
                className="w-full h-96 lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-card max-w-xs hidden lg:block">
              <p className="text-gradient-gold font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>Our Mission</p>
              <p className="text-muted-foreground text-sm mt-2">
                To deliver exceptional building materials that inspire creativity and stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
