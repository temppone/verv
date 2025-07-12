import React from "react";
import Logo from "@/public/primitiva_logo.svg";

export default function Footer() {
  return (
    <footer className="px-6 bg-black text-white py-12 border-t border-white-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="animate-fadeIn">
          <span className="text-off-white">
            <img
              src={Logo.src}
              alt="Primitiva Studio"
              className="w-16 invert brightness-0 filter"
            />
          </span>
        </div>
        <div className="animate-fadeIn animation-delay-200">
          <h2 className="font-medium mb-4 text-base">Social</h2>
          <ul className="space-y-2 opacity-70">
            <li>
              <a
                href="https://instagram.com/primitiva.cc"
                className="hover:text-pale-pink transition-colors duration-300 inline-block hover:translate-x-1"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://behance.net/primitiva.cc"
                className="hover:text-pale-pink transition-colors duration-300 inline-block hover:translate-x-1"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
        <div className="animate-fadeIn animation-delay-600">
          <h2 className="font-medium mb-4 text-base">Contato</h2>
          <p>
            <a
              href="https://wa.me/5532999508150"
              className="text-pale-pink mb-2 transition-colors duration-300"
            >
              +55 32 99950-8150
            </a>
          </p>

          <p className="opacity-70 mb-2">oi@primitiva.cc</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white-900 text-sm opacity-50">
        <p>
          © {new Date().getFullYear()} Primitiva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
