import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sanitary Ware", href: "#sanitary" },
  { label: "Lighting", href: "#lighting" },
  { label: "Flooring", href: "#flooring" },
  { label: "Ceiling", href: "#ceiling" },
  { label: "Wall", href: "#wall" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-border dark:bg-background/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          <img src={logo} alt="Logo" width={100} height={50} className="text-gradient-gold" />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:font-bold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-gradient-gold text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold text-center"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};
