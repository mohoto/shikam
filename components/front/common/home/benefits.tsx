import Image from "next/image";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiUserPlus } from "react-icons/hi2";
import { IoTrendingUpOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

type Props = {}

function Benefits({}: Props) {
  return (
    <section className="py-16 section-padding">
        <div className="grid lg:grid-cols-2">
          <div>
            <Image
              src="/images/home/agence-shikam-avantages.jpeg"
              alt="Agence Shikam création site web vitrine et site web e-commerce"
              className="rounded-xl"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col">
              <span className="text-shikam-normal font-semibold mb-3 text-lg">Création de site web et marketing</span>
              <h2 className="text-4xl font-bold text-shikam-fonce mb-6">Libérer du temps pour vous concentrer <span className="text-shikam-degrade">pleinement sur votre métier</span></h2>
            </div>
            <div>
               {/*  <div className="bg-shikam-degrade p-1 inline-block rounded-md mb-4">
                    <AiOutlineFieldTime className="h-8 w-8 text-white"/>
                </div> */}
                <h3 className="text-xl font-semibold mb-3">Plus de temps pour votre activité et pour vous</h3>
                <p className="font-extralight mb-0">Nous allégeons votre charge de travail en gérant les aspects techniques et stratégiques liés à votre présence sur le web, vous permettant ainsi de vous consacrer entièrement au cœur de votre activité professionnelle.</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-16 2xl:px-20">
            <div className="bg-shikam-degrade-fonce p-5 rounded-tl-3xl text-white">
                <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                    <HiUserPlus className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3">Un accompagnement personnalisé</h3>
                <p className="font-extralight mb-0 text-indigo-100">Nous vous accompagnons dans la mise en place de stratégies de communication digitale performantes, vous permettant ainsi de toucher un public plus large et de fidéliser votre clientèle existante.</p>
            </div>
            <div className="bg-shikam-light p-5 rounded-tr-3xl">
                <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                    <TbWorldWww className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3">Une équipe d'experts du web</h3>
                <p className="font-extralight mb-0">Notre équipe de professionnels qualifiés prend en charge la création et la gestion de votre site web, ainsi que la mise en place de stratégies publicitaires efficaces, vous garantissant ainsi une visibilité accrue sur le web.</p>
            </div>
            <div className="bg-shikam-light p-5 rounded-bl-3xl">
                <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                    <IoTrendingUpOutline className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3">Adaptation aux tendances</h3>
                <p className="font-extralight mb-0">Nous veillons à ce que vos stratégies restent en phase avec les dernières évolutions du marché, garantissant ainsi que votre marque demeure à la pointe des nouveautés et des tendances du secteur.</p>
            </div>
            <div className="bg-shikam-degrade-fonce p-5 rounded-br-3xl text-white">
                <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                    <IoTrendingUpOutline className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold mb-3">Adaptation aux tendances</h3>
                <p className="font-extralight mb-0 text-indigo-10">Nous combinons design moderne, ergonomie et optimisation SEO pour créer des sites web non seulement attrayants, mais aussi performants en termes de visibilité et d'expérience utilisateur.</p>
            </div>
        </div>
      </section>
  )
}

export default Benefits