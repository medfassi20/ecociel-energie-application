import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '212661989339';
  const message = encodeURIComponent('Bonjour EcoCiel, je souhaite avoir des informations sur vos services solaires.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 bg-[#25D366] text-white font-semibold rounded-full shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 group"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
