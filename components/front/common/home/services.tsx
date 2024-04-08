import Image from "next/image";
import localFont from "next/font/local";
import { BsCheckCircle } from "react-icons/bs";
import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";

const raleway = Ubuntu({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
});

const icomoonFont = localFont({
  src: "../../../../fonts/icomoon.ttf",
});

type Props = {}

function Services({}: Props) {
  return (
    <section className="mb-8 mt-16 section-padding">
        <div className="flex items-center flex-col">
          <span className="text-shikam-normal text-center font-semibold mb-3 text-lg">Création de site web et marketing</span>
          <h2 className={cn("text-4xl font-bold text-shikam-fonce text-center 2xl:px-64 xl:!leading-relaxed mb-28")}>Nous vous <span className="text-shikam-degrade">accompagnons de A à Z</span> dans vos projets sur le web</h2>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="grid lg:grid-cols-2 place-items-end">
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
              <div style={icomoonFont.style} className="text-shikam-normal 2xl:text-[2em] mb-2">c</div>
              <h3 className="text-2xl mb-6 font-semibold">Création de votre site web sur mesure <span className="text-shikam-normal">en mois de 15 jours</span></h3>
              <p>Graphistes, webdesigners, rédacteurs, référenceurs et community managers vous accompagnent dans la réalisation de votre projet. Graphistes, webdesigners, rédacteurs, référenceurs et community managers vous accompagnent dans la réalisation de votre projet.</p>
              <div className="grid md:grid-cols-2 mt-10">
                <div>
                  <p className="text-shikam-normal font-semibold bg-shikam-light inline-block py-2 px-4 rounded-md text-sm">Site web adapté à votre activité</p>
                  <p className="text-shikam-normal font-semibold bg-shikam-light inline-block py-2 px-4 rounded-md text-sm">Site web adapté au mobile</p>
                </div>
                <div>
                  <p className="text-shikam-normal font-semibold bg-shikam-light inline-block py-2 px-4 rounded-md text-sm">Site web personnalisé</p>
                  <p className="text-shikam-normal font-semibold bg-shikam-light inline-block py-2 px-4 rounded-md text-sm">Publicités sur TikTok</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 place-items-end">
            <div>
              <div style={icomoonFont.style} className="text-shikam-normal 2xl:text-[2.5em] mb-3">a</div>
              <h3 className="text-2xl mb-6 font-semibold">Création et gestion de vos publicités <span className="text-shikam-normal">sur les réseaux sociaux, Google et Bing</span></h3>
              <p>Attirez de nouveaux clients. Graphistes, webdesigners, rédacteurs, référenceurs et community managers vous accompagnent dans la réalisation de votre projet. Graphistes, webdesigners, rédacteurs, référenceurs et community managers vous accompagnent dans la réalisation de votre projet.</p>
              {/* <div className="grid md:grid-cols-2 mt-10">
                <div>
                  <p className="flex items-center text-shikam-normal font-semibold"><BsCheckCircle className="mr-2 text-2xl text-shikam-normal" />Publicités sur Facebook</p>
                  <p className="flex items-center text-shikam-normal font-semibold"><BsCheckCircle className="mr-2 text-2xl text-shikam-normal" />Publicités sur Instagram</p>
                  <p className="flex items-center text-shikam-normal font-semibold"><BsCheckCircle className="mr-2 text-2xl text-shikam-normal" />Publicités sur TikTok</p>
                  <p className="flex items-center text-shikam-normal font-semibold"><BsCheckCircle className="mr-2 text-2xl text-shikam-normal" />Publicités sur Youtube</p>
                </div>
                <div>
                  <p className="flex items-center text-shikam-normal font-semibold"><BsCheckCircle className="mr-2 text-2xl text-shikam-normal" />Publicités sur snapchat</p>
                  <p className="flex items-center text-shikam-normal font-semibold"><BsCheckCircle className="mr-2 text-2xl text-shikam-normal" />Visiblité sur Google</p>
                  <p className="flex items-center text-shikam-normal font-semibold"><BsCheckCircle className="mr-2 text-2xl text-shikam-normal" />Annonces sur Google</p>
                  <p className="flex items-center text-shikam-normal font-semibold"><BsCheckCircle className="mr-2 text-2xl text-shikam-normal" />Publicités sur réseau Google</p>
                </div>
              </div> */}
              <div className="grid md:grid-cols-2 mt-10 bg-shikam-light rounded-lg p-5 w-[90%]">
                <div>
                  <p className="text-shikam-normal bg-shikam-light inline-block py-1 px-4 font-light w-full">Publicités sur Facebook</p>
                  <p className="text-shikam-normal bg-shikam-light inline-block py-1 px-4 font-light">Publicités sur Instagram</p>
                  <p className="text-shikam-normal bg-shikam-light inline-block py-1 px-4 font-light">Publicités sur LinkedIn</p>
                </div>
                <div>
                  <p className="text-shikam-normal bg-shikam-light inline-block py-2 px-4 font-light">Visibilité sur Google et Bing</p>
                  <p className="text-shikam-normal bg-shikam-light inline-block py-2 px-4 font-light">Publicités sur Google et Bing</p>
                </div>
              </div>
            </div>
            <div className="justify-self-end">
              <Image
                src="/images/home/ShiKam-publicite-sur-reseaux-sociaux-3.png"
                alt="Agence Shikam publicité sur les réseaux sociaux"
                className="rounded-xl"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services