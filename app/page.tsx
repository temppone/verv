"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-off-white to-off-white-100">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-800/10">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-dark-teal">ArtistBrand</div>
          <div className="flex gap-8">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <a
                key={item}
                className="text-gray-800 hover:text-pale-pink transition-colors"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="container mx-auto pt-40 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-dark-teal to-sage-green">
              Creative Design
            </span>
            <br /> for Creative Artists
          </h1>
          <p className="text-xl text-gray-800 mb-10">
            Transform your artistic vision into a compelling brand that stands
            out
          </p>
          <button className="px-8 py-3 bg-dark-teal text-white rounded-lg font-medium shadow-lg hover:bg-dark-teal-400 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-pale-pink">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Identity",
                icon: "✨",
                description:
                  "Unique visual identity that captures your artistic style",
              },
              {
                title: "Website Design",
                icon: "🖥️",
                description:
                  "Beautiful, responsive websites to showcase your artwork",
              },
              {
                title: "Marketing Materials",
                icon: "📱",
                description:
                  "Cohesive promotional materials for online and print",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-off-white p-8 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-dark-teal">
                  {service.title}
                </h3>
                <p className="text-gray-800">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-light-green-100 to-sage-green-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Transform your artistic vision into a{" "}
                <span className="text-dark-teal">powerful brand</span>
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                We understand the unique needs of artists. Our design approach
                highlights your creative voice while building a professional
                presence that attracts your ideal audience.
              </p>
              <button className="px-6 py-3 border-2 border-dark-teal text-dark-teal rounded-lg font-medium hover:bg-dark-teal hover:text-white transition-colors">
                Learn More
              </button>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                <div className="w-full h-full bg-gradient-to-tr from-pale-pink-300 to-light-green-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">ArtistBrand</h3>
              <p className="text-gray-400 max-w-md">
                Creating beautiful brand identities for artists who want to
                elevate their presence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-sage-green">
                  Services
                </h4>
                <ul className="space-y-2">
                  {["Branding", "Web Design", "Print", "Strategy"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-pale-pink"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-sage-green">
                  Connect
                </h4>
                <ul className="space-y-2">
                  {["Instagram", "Behance", "Dribbble", "Pinterest"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-pale-pink"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} ArtistBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
