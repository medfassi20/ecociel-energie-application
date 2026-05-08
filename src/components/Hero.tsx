import { ArrowDown, Zap, Shield, TrendingDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[128px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-emerald-300 text-sm font-medium">Énergie solaire à Fès, Maroc</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Passez à l'énergie solaire et{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-emerald-400">
              réduisez vos factures
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            EcoCiel, votre partenaire de confiance à Fès, Maroc pour la conception, l'installation et la maintenance de systèmes solaires. Produisez une électricité propre et durable tout en réalisant des économies significatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up animation-delay-300">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-0.5"
            >
              Demander un devis
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Calculer vos économies
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
            {[
              { icon: TrendingDown, value: '70%', label: "Réduction facture" },
              { icon: Zap, value: '100%', label: 'Énergie propre' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <stat.icon className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
