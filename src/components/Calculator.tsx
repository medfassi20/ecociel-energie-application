import { useState } from 'react';
import { Calculator as CalcIcon, TrendingDown, Zap, Home } from 'lucide-react';

type HouseType = 'small' | 'medium' | 'large';

const houseLabels: Record<HouseType, string> = {
  small: 'Petite maison',
  medium: 'Maison moyenne',
  large: 'Grande maison',
};

const houseFactors: Record<HouseType, { savingsPercent: number; systemKw: number }> = {
  small: { savingsPercent: 65, systemKw: 3 },
  medium: { savingsPercent: 70, systemKw: 5 },
  large: { savingsPercent: 75, systemKw: 8 },
};

export default function Calculator() {
  const [bill, setBill] = useState('');
  const [houseType, setHouseType] = useState<HouseType>('medium');
  const [showResult, setShowResult] = useState(false);

  const billAmount = parseFloat(bill) || 0;
  const factors = houseFactors[houseType];
  const monthlySavings = billAmount * (factors.savingsPercent / 100);
  const annualSavings = monthlySavings * 12;
  const roiYears = billAmount > 0 ? Math.round((factors.systemKw * 8000) / annualSavings) : 0;

  const handleCalculate = () => {
    if (billAmount > 0) setShowResult(true);
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
            Calculateur
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Estimez vos <span className="text-emerald-600">économies</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez combien vous pouvez économiser en passant à l'énergie solaire.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 sm:p-10">
            <div className="space-y-8">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <TrendingDown className="w-4 h-4 text-emerald-600" />
                  Facture d'électricité mensuelle (MAD)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={bill}
                    onChange={(e) => { setBill(e.target.value); setShowResult(false); }}
                    placeholder="Ex: 500"
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></span>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <Home className="w-4 h-4 text-emerald-600" />
                  Type d'habitation
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.keys(houseLabels) as HouseType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => { setHouseType(type); setShowResult(false); }}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        houseType === type
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-emerald-300 hover:text-emerald-600'
                      }`}
                    >
                      {houseLabels[type]}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleCalculate}
                disabled={billAmount <= 0}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-600"
              >
                <CalcIcon className="w-5 h-5" />
                Calculer mes économies
              </button>
            </div>

            {showResult && billAmount > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200 animate-fade-in-up">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Vos économies estimées</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-5 border border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600">{factors.savingsPercent}%</div>
                    <div className="text-sm text-gray-500 mt-1">Réduction facture</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600">{Math.round(monthlySavings)} MAD</div>
                    <div className="text-sm text-gray-500 mt-1">Économie / mois</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600">{Math.round(annualSavings).toLocaleString()} MAD</div>
                    <div className="text-sm text-gray-500 mt-1">Économie / an</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600">{factors.systemKw} kW</div>
                    <div className="text-sm text-gray-500 mt-1">Puissance suggérée</div>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <div className="text-sm text-emerald-800">
                      <span className="font-semibold">Retour sur investissement estimé : {roiYears} ans</span>
                      <br />
                      Après cette période, votre électricité est quasiment gratuite !
                    </div>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-6 w-full flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all"
                >
                  Obtenir un devis personnalisé
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
