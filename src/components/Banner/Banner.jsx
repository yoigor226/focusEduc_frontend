import React from 'react'
import Slider from 'react-slick'
import '/src/index.css'
import { useNavigate } from 'react-router-dom';

    


const Banner = () => {

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login');
  };

  const goToInscriptionPage = () => {
    navigate('/inscription');
  };
    
  return (
    <main className="pt-20 pb-10 h-162 mb-15 ml-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-1/2 lg:pb-8 xl:pb-0">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 lg:h-126 w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 px-4 sm:px-6 lg:px-8">
                  <div className="text-center lg:text-left">

                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">Apprendre sans limites</span>
                      <span className="block text-indigo-600">
                        Partout, tout le temps
                      </span>
                    </h1>

                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                      Accédez à des milliers de ressources pédagogiques,
                      collaborez avec vos pairs et suivez votre progression.
                      Notre plateforme vous accompagne dans votre parcours
                      d'apprentissage, même sans connexion internet.
                    </p>

                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                      <div className="rounded-md shadow">
                        <button className="whitespace-nowrap !rounded-button cursor-pointer w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        onClick={goToInscriptionPage}>
                          S'inscrire
                        </button>
                      </div>


                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button className="whitespace-nowrap !rounded-button cursor-pointer w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        onClick={goToLoginPage}>
                          Se Connecter
                        </button>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>

            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-126"
                src="https://images.squarespace-cdn.com/content/v1/584ae135440243178f9f5c9b/1511641698604-GVJVFTASASCY0PPJD1J4/19-Adam+Dickens+2017+-+Lyra+in+Africa%2C+Tanzania+127.jpg"
                alt="Environnement d'apprentissage moderne"
              />
            </div>
          </div> 
        </div>
    </main>
           
  )
}

export default Banner
