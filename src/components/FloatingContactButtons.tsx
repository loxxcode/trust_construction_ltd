import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const PHONE_NUMBER = "+250788302678";
const WHATSAPP_NUMBER = "+250788302678";

export const FloatingContactButtons = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsAppClick = () => {
    const encodedText = encodeURIComponent("Hello, I would like to know more about your services.");
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    const url = `https://wa.me/${cleanNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed right-1 bottom-4 flex flex-col gap-3 z-50">
      <button
        type="button"
        onClick={handleCallClick}
        className="flex items-center gap-2 rounded-full bg-[#00b050] text-white font-bold px-2 py-2 shadow-lg hover:bg-[#00c75a] transition-colors"
      >
        <Phone size={24} />
      </button>

      <button
        type="button"
        onClick={handleWhatsAppClick}
        className="flex items-center gap-2 rounded-full bg-[#25D366] text-white px-2 py-2 shadow-lg hover:bg-[#1ebe5d] transition-colors"
      >
        <SiWhatsapp size={24} />
      </button>
    </div>
  );
};

