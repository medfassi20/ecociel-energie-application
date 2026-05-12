import { MapPin, Phone, Clock, Star } from 'lucide-react';

function useOpeningStatus() {
  const now = new Date();

  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const currentMinutes = hours * 60 + minutes;
  const openMinutes = 8 * 60 + 30;
  const closeMinutes = 18 * 60;

  const days = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ];

  const isSunday = day === 0;
  const isOpen =
    !isSunday &&
    currentMinutes >= openMinutes &&
    currentMinutes < closeMinutes;

  if (isOpen) {
    const remaining = closeMinutes - currentMinutes;
    const h = Math.floor(remaining / 60);
    const m = remaining % 60;

    let timeText = "";
    if (h > 0) {
      timeText = `${h}h`;
      if (m > 0) timeText += ` ${m}min`;
    } else {
      timeText = `${m}min`;
    }

    return {
      isOpen: true,
      message: `Ferme dans ${timeText}`,
    };
  }

  if (!isSunday && currentMinutes < openMinutes) {
    const diff = openMinutes - currentMinutes;
    const h = Math.floor(diff / 60);
    const m = diff % 60;

    return {
      isOpen: false,
      message: `Ouvre dans ${h > 0 ? `${h}h ` : ""}${m}min`,
    };
  }

  let nextDay = day;

  while (true) {
    nextDay = (nextDay + 1) % 7;
    if (nextDay !== 0) break;
  }

  return {
    isOpen: false,
    message: `Réouverture ${days[nextDay]} à 08:30`,
  };
}

export default function CompanyInfo() {
  const { isOpen, message } = useOpeningStatus();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
              À propos
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Votre partenaire{" "}
              <span className="text-emerald-600">
                énergie solaire
              </span>{" "}
              à Fès
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              EcoCiel est spécialisée dans les solutions
              d’énergie solaire durables pour les particuliers
              et les entreprises.
            </p>

           {/* 🗺️ GOOGLE MAPS */}
            <div className="rounded-2xl overflow-hidden shadow-lg border">
            <iframe
              src="https://www.google.com/maps?q=EcoCiel%20Fes&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation EcoCiel"
            ></iframe>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            {/* Adresse */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex gap-4">
                <MapPin className="text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-sm text-gray-600">
                    48 K Lot Jihan I Rte Ain Chkef, 30000 Fès, Maroc
                  </p>

                  <a
                    href="https://www.google.com/maps/place/EcoCiel/@33.9610092,-5.0301414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 text-sm font-medium hover:underline mt-2 inline-block"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
          </div>
            {/* Phone */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex gap-4">
                <Phone className="text-emerald-600" />
                <div>
                  <h3 className="font-semibold">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+212661989339"
                    className="text-emerald-600"
                  >
                    +212 6 61 98 93 39
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex gap-4">
                <Clock className="text-emerald-600" />
                <div>
                  <h3 className="font-semibold">
                    Horaires
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lundi - Samedi : 08:30 - 18:00
                  </p>
                  <p className="text-sm text-gray-600">
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>

            {/* STATUS */}
            <div
              className={`p-6 rounded-2xl ${
                isOpen
                  ? "bg-emerald-50"
                  : "bg-red-50"
              }`}
            >
              <span
                className={`font-bold text-lg ${
                  isOpen
                    ? "text-emerald-700"
                    : "text-red-700"
                }`}
              >
                {isOpen ? "Ouvert" : "Fermé"}
              </span>

              <p
                className={`text-sm ${
                  isOpen
                    ? "text-emerald-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
