import { useState, type FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import emailjs from 'emailjs-com';

const projectTypes = [
  'Installation panneaux solaires',
  'Chauffe-eau solaire',
  'Maintenance',
  'Autre',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    project_type: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.city || !form.project_type) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    setStatus('loading');

    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('leads')
        .insert([form]);

      if (error) throw error;

      // Send Email with EmailJS
      await emailjs.send(
        'service_5mdb0hj',
        'template_5y1ja3i',
        {
          name: form.name,
          phone: form.phone,
          city: form.city,
          project_type: form.project_type,
        },
        'KDQ3Jj6U6gPxh9eHN'
      );

      setStatus('success');

      setForm({
        name: '',
        phone: '',
        city: '',
        project_type: '',
      });

    } catch (err) {
      console.error('SEND ERROR:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
            Contact
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Demandez votre{' '}
            <span className="text-emerald-600">
              devis gratuit
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les 24h.
          </p>
        </div>

        <div className="max-w-xl mx-auto">

          {status === 'success' ? (
            <div className="bg-white rounded-2xl border border-emerald-200 p-10 text-center">

              <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Demande envoyée !
              </h3>

              <p className="text-gray-600 mb-6">
                Notre équipe vous contactera rapidement.
              </p>

              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-3 bg-emerald-600 text-white rounded-xl"
              >
                Envoyer une autre demande
              </button>

            </div>
          ) : (

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border p-8 shadow-sm"
            >

              <div className="space-y-6">

                <input
                  type="text"
                  placeholder="Nom"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full p-3 border rounded"
                />

                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full p-3 border rounded"
                />

                <input
                  type="text"
                  placeholder="Ville"
                  value={form.city}
                  onChange={(e) =>
                    setForm({ ...form, city: e.target.value })
                  }
                  className="w-full p-3 border rounded"
                />

                <select
                  value={form.project_type}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      project_type: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded"
                >
                  <option value="">
                    Choisir un projet
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                {status === 'error' && (
                  <p className="text-red-500">
                    Erreur lors de l'envoi
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-emerald-600 text-white py-3 rounded"
                >
                  {status === 'loading'
                    ? 'Envoi...'
                    : 'Envoyer'}
                </button>

              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
