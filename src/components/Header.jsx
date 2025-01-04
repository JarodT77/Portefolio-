import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Ferme le menu burger après le clic
    }
  };

  return (
    <header>
      <nav className="mx-6 md:mx-20 mt-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-blue-600">Jarod</h1>
        </div>

        {/* Menu pour les grands écrans */}
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            <li>
              <button
                onClick={() => handleScroll("profil")}
                className="text-lg hover:text-blue-600 transition"
              >
                Profil
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skill")}
                className="text-lg hover:text-blue-600 transition"
              >
                Compétences
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("project")}
                className="text-lg hover:text-blue-600 transition"
              >
                Projets
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-lg hover:text-blue-600 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Burger Icon pour les petits écrans */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Burger Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 text-white p-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            <li>
              <button
                onClick={() => handleScroll("profil")}
                className="text-lg hover:text-blue-400 transition"
              >
                Profil
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skill")}
                className="text-lg hover:text-blue-400 transition"
              >
                Compétences
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("project")}
                className="text-lg hover:text-blue-400 transition"
              >
                Projets
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-lg hover:text-blue-400 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
