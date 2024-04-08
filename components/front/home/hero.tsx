import Image from "next/image"
import SiteWebForm from "../common/siteWebForm"

type Props = {}

function Hero({}: Props) {
  return (
    <section className="grid lg:grid-cols-2 lg:pt-28 3xl:gap-x-20 section-padding pt-10 gap-y-12 lg:gap-y-0 pb-12">
        <div className="col-span-1 order-2 lg:order-1">
            <h1 className="2xl:text-6xl font-bold mb-8 text-shikam-fonce lg:text-5xl text-4xl">Faites décoller votre business sur le web et<span className="text-shikam-degrade">attirez plus de client</span></h1>
            <p className="xl:text-xl text-gray-700 mb-6 text-lg font-light">Agence leader en création de site web et gestion de publicités sur le web pour les professionnels.</p>
            <div>
            <SiteWebForm />
            </div>
        </div>
        <div className="order-1 lg:order-2 place-self-center justify-self-end">
          <div className="relative">
            <Image
            src="/images/home/Shikam-creation-site-web.png"
            alt="Agence Shikam création site web et marketing digital"
            className="rounded-full"
            width={420}
            height={420}
            priority
            />
            <span className="absolute -left-8 bottom-32 bg-white shadow-light py-2 px-6 text-shikam-normal font-semibold rounded-sm">Artisans</span>
            <span className="absolute -left-0 top-20 bg-white shadow-light py-2 px-6 text-shikam-normal font-semibold rounded-sm">Indépendants</span>
            <span className="absolute -right-2 bottom-32 bg-white shadow-light py-2 px-6 text-shikam-normal font-semibold rounded-sm">PME</span>
            <span className="absolute -right-0 top-28 bg-white shadow-light py-2 px-6 text-shikam-normal font-semibold rounded-md">Commerçants</span>
            <div className="absolute left-10 -bottom-10 rotate-[30deg]">
              {/* <svg width="100px" height="100px" viewBox="0 0 512 512"><path fill="#0860d6" d="M204.3 118.4L152.5 188l-51.3-69.1L20.99 220l21.94 17.4 57.47-72.5 52.1 69.9 51.8-69.4 51.6 69.5 51.7-69.6 51.8 69.6 52-70 57.6 72.5 22-17.4-80.4-101.1-51.2 69-51.8-69.4-51.7 69.4-51.6-69.5zm0 156.4l-51.8 69.3-51.3-68.8-80.17 100.8 21.92 17.4 57.55-72.4 52 69.8 51.8-69.3 51.6 69.3 51.7-69.3 51.8 69.3 52-69.8 57.7 72.4 21.8-17.4-80.3-100.8-51.2 68.8-51.8-69.3-51.7 69.3-51.6-69.3z"/></svg> */}
              <svg fill="#0860d6" version="1.1" viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg" className="rotate-180 w-32 h-32">
                <path d="m1.9321 0.29835-1.3121 1.5094 5.283 4.5924 2.8516-3.2804 3.7736 3.2804 2.8502-3.2788 2.2625 1.9667 1.5094 1.3121 1.3121-1.5094 1.9682-2.2641-1.5094-1.3121-1.9682 2.2641-3.7736-3.2803-1.3121 1.5094 0.0017 0.0015-1.5381 1.7694-3.7735-3.2803-0.88341 1.0163-1.9683 2.264z" clipRule="evenodd"/>
                <path d="m3.2883 5.6507-1.3121 1.5094 5.283 4.5924 2.8516-3.2804 3.7736 3.2804 2.8502-3.2788 2.2625 1.9667 1.5094 1.3121 1.3121-1.5094 1.9682-2.2641-1.5094-1.3121-1.9682 2.2641-3.7736-3.2803-1.3121 1.5094 0.0017 0.0015-1.5381 1.7694-3.7735-3.2803-0.88341 1.0163-1.9683 2.264z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="-top-5 right-10 circle left desktop"></div>
          </div>
        </div>
      </section>
  )
}

export default Hero