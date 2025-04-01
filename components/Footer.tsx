import React from "react";
import Logo from "@/public/verv_logo.svg";

export default function Footer() {
  return (
    <footer className="px-6 bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="animate-fadeIn">
          <span className="text-off-white">
            <img
              src={Logo.src}
              alt="Verv Studio"
              className="w-16 invert brightness-0 filter"
            />
          </span>{" "}
        </div>
        <div className="animate-fadeIn animation-delay-200">
          <h4 className="font-medium mb-4">Social</h4>
          <ul className="space-y-2 opacity-70">
            <li>
              <a
                href="https://instagram.com/estudioverv"
                className="hover:text-pale-pink transition-colors duration-300 inline-block hover:translate-x-1"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://behance.net/verv"
                className="hover:text-pale-pink transition-colors duration-300 inline-block hover:translate-x-1"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
        <div className="animate-fadeIn animation-delay-600">
          <h4 className="font-medium mb-4">Contato</h4>
          <p className="opacity-70 mb-2">hello@vervstudio.com.br</p>
          <a
            href="https://wa.me/yourphonenumber"
            className="border-b border-pale-pink text-pale-pink hover:text-white hover:border-white transition-colors duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-sm opacity-50">
        <p>© {new Date().getFullYear()} Verv. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
