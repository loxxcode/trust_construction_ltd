import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import logo from "../assets/logo.jpeg";

export const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    toast({
      title: "Success!",
      description:
        "Your message has been sent successfully. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <footer
      id="contact"
      className="bg-black/90 text-white py-10 px-6 dark:bg-black/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        {/* <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <img
              src={logo}
              alt="Trust Construction Company"
              className="h-12 w-auto"
            />
          </div>
        </div> */}

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-6">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-amber-400 mb-8 font-sans">
              Contact Us
            </h3>

            {/* Branches */}
            <div className="space-y-4 mb-4">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="text-amber-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Kicukiro Branch</p>
                    <p className="text-gray-300">
                      Chez John Building, Kicukiro, Kigali
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="text-amber-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Gisozi Branch</p>
                    <p className="text-gray-300">
                      Companion House Room #7, Gisozi, Kigali
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-amber-400 shrink-0" size={20} />
                <span className="text-gray-300">+250 788 302 678</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-amber-400 shrink-0" size={20} />
                <span className="text-gray-300">trustconstructionltd@outlook.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-amber-400 shrink-0" size={20} />
                <span className="text-gray-300">
                  Mon-Fri: 9:00 AM - 6:00 PM
                </span>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="font-bold text-amber-400 mb-2">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a href="https://web.facebook.com/profile.php?id=61593990112440" target="_blank" className="text-gray-300 hover:text-amber-400">
                    <Facebook size={20} />
                  </a>
                  <a href="https://x.com/trust_construct" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 flex items-center">
                    <span className="text-lg font-bold leading-none">𝕏</span>
                  </a>
                  <a href="https://www.instagram.com/trust_constructionltd/" target="_blank" className="text-gray-300 hover:text-amber-400">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.youtube.com/@trustconstructionltd" target="_blank" className="text-gray-300 hover:text-amber-400">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-6 font-sans">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-black/20 text-white outline-none placeholder-gray-400 px-4 py-2 rounded border-b-2 border-gray-700 focus:border-amber-400 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-black/20 text-white outline-none placeholder-gray-400 px-4 py-2 rounded border-b-2 border-gray-700 focus:border-amber-400 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-black/20 text-white outline-none placeholder-gray-400 px-4 py-2 rounded border-b-2 border-gray-700 focus:border-amber-400 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full bg-black/20 text-white outline-none placeholder-gray-400 px-4 py-2 rounded border-b-2 border-gray-700 focus:border-amber-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-amber-400 text-gray-900 font-bold py-2 rounded hover:bg-amber-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 pt-4 text-center text-gray-400 text-sm mt-8">
        © 2026 Trust Construction Company. All rights reserved.
      </div>
    </footer>
  );
};
