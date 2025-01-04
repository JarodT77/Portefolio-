import React from "react";
import ProfilImage from "../assets/images/profil.jpg";

function Profil() {
  return (
    <section id="profil" className="mt-20 px-6 md:px-20">
      <h1 className="text-2xl text-center mb-10"><b>À propos de moi</b></h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image de profil */}
        <img src={ProfilImage} alt="Photo de profil" className="w-80 h-80 sm:w-72 sm:h-72 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-xl"/>

        {/* Texte de présentation */}
        <p className="text-justify md:text-left md:ml-10 text-lg">
          Je me présente, je m'appelle Jarod. Après avoir travaillé dans la
          vente, je me suis récemment reconverti dans le domaine du
          développement web, une passion que j'ai découverte en créant de petits
          sites sur des plateformes comme Shopify et WordPress. Pour approfondir
          mes compétences et exceller dans ce domaine, j'ai suivi une formation
          aboutissant au titre professionnel de Développeur Web et Web Mobile.
          <br />
          <br />
          Cette formation m'a permis d'acquérir de solides bases dans plusieurs
          langages de programmation tels que JavaScript et PHP, ainsi que dans
          la réalisation de sites web en HTML et CSS, souvent avec l'aide de
          frameworks modernes. J'ai également appris à gérer des bases de
          données avec SQL, à concevoir des maquettes fonctionnelles sur Figma,
          et à explorer l'univers de l'UI/UX design. Ces expériences m'ont donné
          une vision complète de la création et de la gestion de projets web.
          <br />
          <br />
          Aujourd'hui, je suis motivé à rejoindre une entreprise pour mettre mes
          compétences et mon savoir-faire au service de projets ambitieux, tout
          en continuant à apprendre et à évoluer dans ce secteur passionnant.
        </p>
      </div>

      {/* Bouton Télécharger CV */}
      <div className="mt-10 text-center">
        <a
          href="/public/icones/wordpress_icone.png"
          download="wordpress_icone.png"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}

export default Profil;
