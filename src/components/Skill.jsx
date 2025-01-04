import React from "react";

function Skill() {
  return (
    <section id="skill" className="mt-20 px-6 md:px-20">
      <h1 className="text-2xl text-center mb-10"><b>Mes Compétences</b></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* FRONTEND */}
        <div className="rounded-xl bg-blue-600 p-4">
          <h1 className="text-lg font-bold mb-4 mt-2 text-center">FRONTEND</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="/src/icones/arcadia2.png"
                alt="HTML Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">HTML</p>
              <img
                src="/src/icones/css_icone.png"
                alt="CSS Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">CSS</p>
              <img
                src="/src/icones/javascipt_icone.png"
                alt="JavaScript Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/icones/bootstrap_icone.png"
                alt="Bootstrap Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">Bootstrap</p>
              <img
                src="/src/icones/tailwind_icone.png"
                alt="Tailwind Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">Tailwind</p>
              <img
                src="/src/icones/react_icone - .png"
                alt="React Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">React</p>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="rounded-xl bg-blue-600 p-4">
          <h1 className="text-lg font-bold mb-4 mt-2 text-center">BACKEND</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="/src/icones/php_icone.png"
                alt="PHP Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">PHP</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/src/icones/sql_icone.png"
                alt="SQL Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">SQL</p>
            </div>
          </div>
        </div>

        {/* CMS & DESIGN */}
        <div className="rounded-xl bg-blue-600 p-4">
          <h1 className="text-lg font-bold mb-4 mt-2 text-center">CMS & DESIGN</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="/src/icones/shopify_icone.png"
                alt="Shopify Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">Shopify</p>
              <img
                src="/src/icones/wordpress_icone.png"
                alt="WordPress Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">WordPress</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/src/icones/figma_icone.png"
                alt="Figma Icon"
                className="w-10 md:w-12 lg:w-14 mb-2"
              />
              <p className="mb-4">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
