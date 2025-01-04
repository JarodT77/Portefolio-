import React from "react";

function ContactForm() {
  return (
    <section id="contact" className="mt-20 px-6 pb-10 md:px-20">
      <h1 className="text-2xl text-center"><b>Me contacter</b></h1>
      <h2 className="text-lg text-center mb-10">
        Vous pouvez me contacter via le formulaire ou les liens proposés
      </h2>

      <div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonne gauche : Formulaire */}
          <div>
            <h2 className="text-lg text-center p-5 text-blue-600">
              Envoyer un message pour plus d'informations
            </h2>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block font-medium text-gray-300 mb-2"
              >
                Nom :
              </label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                className="w-full bg-transparent border border-gray-300 rounded-xl h-10 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block font-medium text-gray-300 mb-2"
              >
                Email :
              </label>
              <input
                type="email"
                id="email"
                placeholder="Votre email"
                className="w-full bg-transparent border border-gray-300 rounded-xl h-10 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block font-medium text-gray-300 mb-2"
              >
                Message :
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Votre message"
                className="w-full bg-transparent border border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-5/12 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition duration-300"
              >
                Envoyer
              </button>
            </div>
          </div>

          {/* Colonne droite : Informations */}
          <div className="space-y-6">
            <div className="text-center bg-blue-600 p-6 rounded-xl">
              <img
                src="/icones/email.png"
                className="w-12 h-12 mx-auto mb-4"
                alt="Email Icon"
              />
              <h1 className="text-lg font-bold">Envoyer un email :</h1>
              <p className="text-gray-300">Thongkhamdyjarod@gmail.com</p>
            </div>
            <div className="text-center bg-blue-600 p-6 rounded-xl">
              <h1 className="text-lg font-bold mb-4">Liens :</h1>
              <div className="flex justify-center gap-4">
              <a href="https://github.com/JarodT77" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition duration-300">
                <img
                  src="/icones/github.png"
                  alt="GitHub Icon"
                  className="w-10 h-10"
                /></a>
                <a href="https://www.linkedin.com/in/jarod-thongkhamdy-ba168119b/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition duration-300">
                <img
                  src="/icones/linkedin.png"
                  alt="LinkedIn Icon"
                  className="w-10 h-10"
                /></a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
