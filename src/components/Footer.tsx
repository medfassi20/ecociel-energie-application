import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-bold">
              Eco<span className="text-yellow-400">Ciel</span>
            </span>
          </div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} EcoCiel. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#calculator" className="hover:text-white transition-colors">Calculateur</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
