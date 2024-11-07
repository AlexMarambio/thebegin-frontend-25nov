import React, { useState } from 'react';

const CategoriesSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú

  const categories = [
    "The Begin", "Arte con Sentido", "Consumo con Sentido", "Bienestar",
    "Salud Mental", "Medio Ambiente", "Trueque", "Membresía"
  ];

  return (
    <div>
      {/* Botón de hamburguesa solo visible en pantallas pequeñas */}
      <button 
        className="md:hidden bg-[#766146] text-white p-2 rounded-sm mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Ícono de hamburguesa */}
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Sidebar: visible en pantallas grandes o cuando se abre el menú en pantallas pequeñas */}
      <aside className={`w-64 md:block ${isOpen ? 'block' : 'hidden'}`}>
        <h2 className="bg-[#766146] p-2 text-white text-lg rounded-sm font-bold">Categorías</h2>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category} className="bg-[#fefeff] p-2 rounded-sm flex items-center">
              <div className="w-4 h-4 bg-orange-500 mr-2 rounded-full"></div>
              <span className="text-gray-700">{category}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default CategoriesSidebar;
