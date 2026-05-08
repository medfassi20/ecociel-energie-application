import { Link } from "react-router-dom";
import { useState } from "react";

import img1 from "../assets/products/onduleur-reseau-5kw-double-mppt-sg50rs-sungrow.jpg";

export default function Products() {

  const products = Array(9).fill(null).map((_, i) => ({
    name: `Onduleur ${i + 1}`,
    description: "Onduleur solaire performant avec haute efficacité.",
    badge: i % 2 === 0 ? "Hybride" : "On-Grid",

    image: img1,
  }));

  // 🔹 Pagination state
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const visibleProducts = products.slice(start, end);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Nos Produits
        </h2>

        {/* 🔹 Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleProducts.map((p, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border hover:shadow-lg transition"
            >

              {/* Badge */}
              <span className="inline-block text-xs px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full mb-3">
                {p.badge}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {p.description}
              </p>

              {/* Button */}
              <Link
                to={`/product/${start + index}`}
                className="inline-block w-full text-center bg-emerald-600 text-white px-4 py-3 rounded-xl hover:bg-emerald-700 transition"
              >
                Voir détails →
              </Link>
            </div>
          ))}
        </div>

        {/* 🔹 Pagination */}
        <div className="mt-12 flex flex-col items-center gap-4">

          <p className="text-gray-600 text-sm">
            Affichage {start + 1}-{Math.min(end, products.length)} de {products.length} article(s)
          </p>

          <div className="flex gap-2 flex-wrap justify-center">

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setPage((p) => Math.min(p + 1, totalPages))
              }
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Suivant →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
