import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Calculator from "./components/Calculator";
import ContactForm from "./components/ContactForm";
import CompanyInfo from "./components/CompanyInfo";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Hero from "./components/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Calculator />
      <ContactForm />
      <CompanyInfo />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;