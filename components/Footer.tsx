import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 bg-black text-white py-12 border-t border-white-900">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="animate-fadeIn animation-delay-600">
          <h2 className="font-medium mb-4 text-base">Vamos conversar</h2>
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
      <div className="max-w-6xl mt-12 pt-6 border-t border-white-900 text-sm opacity-50">
        <p>
          © {new Date().getFullYear()} Primitiva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
