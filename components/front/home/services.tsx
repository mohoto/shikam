import Image from "next/image";
import localFont from "next/font/local";
import { BsCheck } from "react-icons/bs";
import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";

const raleway = Ubuntu({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
});

const icomoonFont = localFont({
  src: "../../../fonts/icomoon.ttf",
});

type Props = {}

function Services({}: Props) {
  return (
    <section className="mb-10 mt-20 container">
        <div className="flex items-center flex-col">
          <span className="text-shikam-normal text-center font-semibold mb-3 text-lg">AGENCE WEB POUR LES PROS</span>
          <h2 className={cn("text-4xl font-bold text-shikam-fonce text-center 2xl:px-64 xl:!leading-relaxed mb-24")}>Nous vous <span className="text-shikam-degrade">accompagnons de A à Z</span> dans vos projets sur le web</h2>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="grid lg:grid-cols-2 place-items-center">
            <div className="justify-self-start">
              <Image
                src="/images/home/Shikam-creation-sites-web-5.jpeg"
                alt="Agence Shikam publicité sur les réseaux sociaux"
                className="rounded-xl"
                width={600}
                height={600}
                priority
              />
            </div>
            <div>
              <div style={icomoonFont.style} className="text-shikam-normal text-[2em] mb-2">c</div>
              <h3 className="text-3xl mb-6 font-semibold text-shikam-fonce">Création de votre site web sur mesure <span className="text-shikam-normal">en mois de 15 jours</span></h3>
              <div className="grid md:grid-cols-2 mt-10">
                <ul>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Site web vitrine</p>
                  </li>
                  <li className="py-1 font-light w-full flex items-center">
                  <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Site web e-commerce</p>
                  </li>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Reférencé sur Google et Bing</p>
                  </li>
                </ul>
                <ul>
                  <li className="py-1 font-light w-full flex items-center">
                    {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Site web personnalisé</p>
                  </li>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Adapté à votre activité</p>
                  </li>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Adapté au mobile</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 place-items-center">
            <div>
              <div style={icomoonFont.style} className="text-shikam-normal text-[2.5em] mb-3">a</div>
              <h3 className="text-3xl mb-6 font-semibold text-shikam-fonce">Création et gestion de vos publicités <span className="text-shikam-normal">sur les réseaux sociaux, Google et Bing</span></h3>
              {/* <p>Attirez de nouveaux clients. Graphistes, webdesigners, rédacteurs, référenceurs et community managers vous accompagnent dans la réalisation de votre projet. Graphistes, webdesigners, rédacteurs, référenceurs et community managers vous accompagnent dans la réalisation de votre projet.</p> */}
              <div className="grid md:grid-cols-2 mt-10">
                <ul>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Publicités sur Facebook</p>
                  </li>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Publicités sur Instagram</p>
                  </li>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Publicités sur LinkedIn</p>
                  </li>
                </ul>
                <ul>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Visibilité sur Google et Bing</p>
                  </li>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Publicités sur Google et Bing</p>
                  </li>
                  <li className="py-1 font-light w-full flex items-center">
                    <div className="bg-shikam-degrade rounded-full mr-2">
                      <BsCheck className=" w-5 h-5 text-white"/>
                    </div>
                    <p className="text-lg !mb-0">Annonces Local Services</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="justify-self-end">
              <Image
                src="/images/home/ShiKam-publicite-sur-reseaux-sociaux-3.png"
                alt="Agence Shikam publicité sur les réseaux sociaux"
                className="rounded-xl"
                width={440}
                height={450}
                priority
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services