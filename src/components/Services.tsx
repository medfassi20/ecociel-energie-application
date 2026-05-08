import { Sun, Droplets, Wrench } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Installation Panneaux Solaires',
    description:
      'Conception et installation de systèmes photovoltaiques adaptés à votre consommation. Des solutions sur mesure pour les maisons, commerces et bâtiments industriels.',
    features: ['Étude personnalisée', 'Panneaux haute rendement', 'Installation professionnelle', 'Raccordement réseau'],
    color: 'emerald',
  },
  {
    icon: Droplets,
    title: 'Chauffe-eau Solaire',
    description:
      'Profitez de l\'énergie solaire pour votre eau chaude sanitaire. Des systèmes thermiques fiables et économiques adaptés au climat marocain.',
    features: ['Économie 70% eau chaude', 'Cuves isothermes', 'Résistant au gel', 'Faible entretien'],
    color: 'amber',
  },
  {
    icon: Wrench,
    title: 'Maintenance & SAV',
    description:
      'Service de maintenance préventif et curatif pour assurer la performance optimale de vos installations solaires tout au long de leur durée de vie.',
    features: ['Visite annuelle', 'Nettoyage panneaux', 'Diagnostic système', 'Intervention rapide'],
    color: 'sky',
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
  sky: { bg: 'bg-sky-50', icon: 'text-sky-600', border: 'border-sky-200', badge: 'bg-sky-100 text-sky-700' },
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Des solutions solaires <span className="text-emerald-600">complètes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            De l'étude à la maintenance, nous vous accompagnons à chaque étape de votre projet solaire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl ${colors.bg} ${colors.border} border mb-6`}>
                  <service.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')}`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
