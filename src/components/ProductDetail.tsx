import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/productsData";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link to="/" className="text-emerald-600 mb-6 inline-block">
          ← Retour
        </Link>
        <div className="p-10 text-center text-4xl font-bold text-gray-700">
          Produit introuvable
        </div>
      </div>
    );
  }

  // 🔹 Handle single image or gallery
  const images = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const currentIndex = images.indexOf(selectedImage);

  const prevImage = () => {
    const newIndex =
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1;

    setSelectedImage(images[newIndex]);
  };

  const nextImage = () => {
    const newIndex =
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* 🔙 Back */}
      <Link
        to="/"
        className="text-emerald-600 mb-6 inline-block"
      >
        ← Retour
      </Link>

      <div className="grid md:grid-cols-2 gap-10">

        {/* 🟢 IMAGE */}
        <div className="overflow-hidden rounded-xl border bg-white p-6">

          {/* Main Image Container */}
          <div className="relative">

            {/* Main Image */}
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-80 object-contain transition-transform duration-500 hover:scale-105"
            />

            {/* 🔹 Show arrows ONLY if multiple images */}
            {images.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 
                  bg-emerald-600 hover:bg-emerald-700 text-white 
                  w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
                >
                  ←
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 
                  bg-emerald-600 hover:bg-emerald-700 text-white 
                  w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* 🔹 Thumbnails ONLY if multiple images */}
          {images.length > 1 && (
            <div className="flex gap-3 mt-6 flex-wrap justify-center">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-contain border rounded-lg cursor-pointer p-1 transition shrink-0
                  ${
                    selectedImage === img
                      ? "border-emerald-600"
                      : "border-gray-200"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 🟢 INFO */}
        <div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          {/* Description */}
          <div
            className="text-gray-600 mb-6 leading-relaxed
            [&_ul]:list-disc
            [&_ul]:pl-6
            [&_ul]:mt-4
            [&_li]:mb-2"
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />

          {/* FICHE TECHNIQUE */}
          <div className="bg-gray-50 p-6 rounded-xl border mb-6">

            <h2 className="font-semibold text-lg mb-4">
              Fiche technique
            </h2>

            <div className="space-y-2">
              {product.fiche.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b pb-2 text-sm gap-4"
                >
                  <span className="text-gray-500">
                    {item.label}
                  </span>

                  <span className="font-medium text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DOWNLOADS */}
          {product.downloads.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {product.downloads.map((file, i) => (
                <div
                  key={i}
                  className="p-4 border rounded-xl bg-gray-50 w-full min-w-0"
                >
                  <p className="font-medium text-gray-800 mb-2 break-words whitespace-normal">
                    {file.name}
                  </p>

                  <a
                    href={file.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 text-sm hover:underline flex items-center gap-1"
                  >
                    Télécharger
                  </a>
                </div>
              ))} 
            </div>
          )} 
        </div>

      </div> 
    </div> 
  );
}