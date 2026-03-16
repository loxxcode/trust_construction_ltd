import { MapPin } from "lucide-react";
import { useState } from "react";

const branches = [
  {
    id: "kicukiro",
    label: "Kicukiro Branch",
    address: "Chez John Building, Kicukiro, Kigali",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d127599.775758294!2d30.097408!3d-1.9562495999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2srw!4v1773169155563!5m2!1sen!2srw",
    mapsUrl:
      "https://www.google.com/maps?pb=!1m17!1m12!1m3!1d127599.775758294!2d30.097408!3d-1.9562495999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2srw!4v1773169155563!5m2!1sen!2srw",
  },
  {
    id: "gisozi",
    label: "Gisozi Branch",
    address: "Companion House Room #7, Gisozi, Kigali",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!3m2!1sen!2srw!4v1773389214866!5m2!1sen!2srw!6m8!1m7!1sLoOhP62RM1O0PX3m51dSgA!2m2!1d-1.924592512766222!2d30.07038662900572!3f331.3546936287711!4f3.61618932424075!5f0.7820865974627469",
    mapsUrl:
      "https://www.google.com/maps?pb=!3m2!1sen!2srw!4v1773389214866!5m2!1sen!2srw!6m8!1m7!1sLoOhP62RM1O0PX3m51dSgA!2m2!1d-1.924592512766222!2d30.07038662900572!3f331.3546936287711!4f3.61618932424075!5f0.7820865974627469",
  },
] as const;

export const LocationSection = () => {
  const [activeBranchId, setActiveBranchId] =
    useState<(typeof branches)[number]["id"]>("kicukiro");
  const activeBranch = branches.find((b) => b.id === activeBranchId) ?? branches[0];

  return (
    <section className="py-16 px-4 bg-muted/40" id="locations">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] items-start">
        <div className="space-y-6">
          <h2 className="text-3xl text-amber-400 md:text-4xl font-bold font-sans">
            Find Us
          </h2>

          <div className="space-y-4">
            {branches.map((branch) => (
              <button
                key={branch.id}
                type="button"
                onClick={() => setActiveBranchId(branch.id)}
                className={`w-full flex items-start gap-3 rounded-lg border px-4 py-3 text-left transition-colors ${
                  activeBranchId === branch.id
                    ? "bg-background border-amber-400"
                    : "bg-background/40 border-border hover:border-amber-400"
                }`}
              >
                <MapPin className="text-amber-400 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">{branch.label}</p>
                  <p className="text-sm text-muted-foreground">{branch.address}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border bg-background shadow-lg min-h-[320px]">
          <div className="px-4 py-3 flex items-center justify-between gap-4 border-b border-border bg-background/80">
            <div>
              <p className="font-semibold">{activeBranch.label}</p>
              <p className="text-sm text-muted-foreground">{activeBranch.address}</p>
            </div>
            <a
              className="text-amber-500 text-sm font-semibold hover:text-amber-400 whitespace-nowrap"
              href={activeBranch.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="w-full h-[360px] md:h-[420px]">
            <iframe
              title={`Map - ${activeBranch.label}`}
              src={activeBranch.embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

