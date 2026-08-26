import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
  
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            <img src={logo} alt="Logo" width={100} height={50} className="text-gradient-gold" />
          </Link>
        </div>

        {/* centered links on medium+ screens */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* right-side actions: theme + mobile menu toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
