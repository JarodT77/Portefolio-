import React from 'react';

function Project() {
  return (
    <section id="project" className="mt-20 px-6 md:px-20">
      <h1 className="text-2xl text-center"><b>Mes Projets</b></h1>
      <h2 className="text-lg text-center mb-10">
        Quelques exemples de mes réalisations
      </h2>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Projet Zoo d'Arcadia */}
        <div className="bg-blue-600 px-4 py-4 rounded-xl">
          <div className="flex justify-center">
            <img
              src="/src/icones/arcadia2.png"
              alt="Zoo d'Arcadia"
              className="rounded-lg w-full max-w-xs"
            />
          </div>
          <h1 className="mb-2 text-center text-xl font-bold">Zoo d'Arcadia</h1>
          <p className="text-center">Projet de formation (HTML/CSS/JavaScript/PHP)</p>
          <p className="text-center">Framework : Bootstrap</p>
        </div>

        {/* Projet Les voyages de Jarod */}
        <div className="bg-blue-600 px-4 py-4 rounded-xl">
          <div className="flex justify-center">
            <img
              src="/src/icones/Blog.png"
              alt="Les voyages de Jarod"
              className="rounded-lg w-full max-w-xs"
            />
          </div>
          <h1 className="mb-2 text-center text-xl font-bold">
            Les voyages de Jarod
          </h1>
          <p className="text-center">Projet personnel</p>
          <p className="text-center">(HTML/CSS/PHP/JavaScript)</p>
        </div>

        {/* Projet Portefolio */}
        <div className="bg-blue-600 px-4 py-4 rounded-xl">
          <div className="flex justify-center">
            <img
              src="/src/icones/Portefolio.png"
              alt="Portfolio"
              className="rounded-lg w-full max-w-xs"
            />
          </div>
          <h1 className="mb-2 text-center text-xl font-bold">Portefolio</h1>
          <p className="text-center">Portfolio créé avec React et TailwindCSS</p>
        </div>
      </div>
    </section>
  );
}

export default Project;
