import Image from "next/image";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiUserPlus } from "react-icons/hi2";
import { IoTrendingUpOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { BsCheck } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import localFont from "next/font/local";

const icomoonFont = localFont({
  src: "../../../fonts/icomoon.ttf",
});

type Props = {}

function Benefits({}: Props) {
  return (
    <section className="mb-20 mt-28 container">
        <div className="grid lg:grid-cols-2">
          <div>
            <Image
              src="/images/home/agence-shikam-avantages.webp"
              alt="Agence Shikam création site web vitrine et site web e-commerce"
              className="rounded-xl"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-shikam-normal font-semibold text-lg">Création de site web et marketing</span>
              <h2 className="text-4xl font-bold text-shikam-fonce">Libérer du temps pour vous concentrer <span className="text-shikam-degrade">pleinement sur votre métier</span></h2>
            </div>
              <div className="mb-4">
                <div style={icomoonFont.style} className="text-shikam-normal text-[3em] mb-6">g</div>
                <p className="font-semibold">Confiez la gestion de votre présence sur le web à notre équipe et focalisez-vous sur votre activité. </p>
                <p className="mb-0">En déléguant la création de votre site web, la réalisation et la gestion de vos campagnes publicitaires à nos spécialistes, vous gagnez du temps et améliorez votre productivité, tout en sachant que votre image en ligne est entre de bonnes mains.</p>
              </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-24">
            <div className="bg-shikam-degrade-fonce p-8 rounded-tl-3xl text-white">
                <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                    <HiUserPlus className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3">Accompagnement personnalisé</h3>
                <p className="font-light mb-0 text-indigo-100">Nous vous proposons un suivi sur mesure, adapté aux spécificités de votre structure et de votre secteur d'activité pour assurer une stratégie optimale et des résultats concrets.</p>
            </div>
            <div className="bg-shikam-light p-8 rounded-tr-3xl">
                <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                    <TbWorldWww className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-shikam-fonce">Équipe d'experts du web</h3>
                <p className="font-light mb-0">Notre agence est composée d'une équipe de spécialistes passionnés du web. Chacun possède une expertise unique, permettant de couvrir tous les aspects de votre présence en ligne.</p>
            </div>
            <div className="bg-shikam-light p-8 rounded-bl-3xl">
                <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                    <IoTrendingUpOutline className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-shikam-fonce">Adaptation aux tendances</h3>
                <p className="font-light mb-0">Nous veillons à ce que vos stratégies restent en phase avec les dernières évolutions du marché, garantissant que votre marque demeure à la pointe des nouveautés et des tendances du secteur.</p>
            </div>
            <div className="bg-shikam-degrade-fonce p-8 rounded-br-3xl text-white">
                <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                    <MdOutlineDesignServices className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3">Design et Performance</h3>
                <p className="font-light mb-0 text-indigo-100">Nous combinons design moderne et ergonomique pour créer des sites web et des visuels publicitaires non seulement attrayants, mais aussi performants en termes de visibilité et d'expérience utilisateur.</p>
            </div>
        </div>
      </section>
  )
}

export default Benefits