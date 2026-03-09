import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.jpeg";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gradient-gold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Your trusted partner for premium building materials, interior solutions, and decorative finishes.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Product Categories</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#sanitary" className="hover:text-primary transition-colors">Sanitary Ware</a></li>
            <li><a href="#lighting" className="hover:text-primary transition-colors">Lighting</a></li>
            <li><a href="#flooring" className="hover:text-primary transition-colors">Flooring</a></li>
            <li><a href="#ceiling" className="hover:text-primary transition-colors">Ceiling Decorations</a></li>
            <li><a href="#wall" className="hover:text-primary transition-colors">Wall Decoration</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <span>info@materiaux.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-primary shrink-0" />
              <span>123 Showroom Ave, Building District</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
        © 2026 Matériaux. All rights reserved.
      </div>
    </footer>
  );
};
