import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoMeta } from "@/components/SeoMeta";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoMeta
        title="Construction Services Rwanda & Kigali"
        description="Trust Construction Rwanda provides construction services, building contractors support, renovation services, supply, installation and project consultation for residential and commercial projects in Kigali."
        path="/services"
        keywords={[
          "construction company Rwanda",
          "construction company Kigali",
          "construction services Rwanda",
          "building contractors Rwanda",
          "house construction Rwanda",
          "renovation services Rwanda",
        ]}
      />
      <Navbar />
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-sans">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide supply and installation services for a wide range of construction materials. Contact us for quotes and project consultations.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-2">Supply</h3>
              <p className="text-muted-foreground">We source and deliver high-quality materials for residential and commercial projects.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-muted-foreground">Professional installation services for flooring, ceiling, sanitary ware, lighting and more. Our certified installers ensure a neat, on-time job.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold mb-2">Consultation & Maintenance</h3>
              <p className="text-muted-foreground">Project consultation, measurement, and after-installation maintenance plans to keep your materials performing.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
