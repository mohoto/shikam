import Image from "next/image"

type Props = {}

function GoogleBusiness({}: Props) {
  return (
    <section className="mb-20">
        <div className="grid lg:grid-cols-2 2xl:gap-x-20 lg:gap-x-10 place-items-end">
          <div className="flex flex-col items-stretch">
            <h3 className="text-3xl text-shikam-fonce mb-12">Google My Business inclus avec la création <span className="font-semibold text-shikam-normal">de votre site web</span></h3>
            <div className="bg-shikam-light p-8 rounded-xl self-end">
              <div className="flex items-center gap-x-3 mb-4">
                <Image
                  src="/images/home/Google-My-Business_logo.svg"
                  alt="Logo Googme My Business"
                  className=""
                  width={40}
                  height={40}
                  priority
                />
                <h3 className="text-3xl font-semibold"><span className="text-[#4285F4]">G</span><span className="text-[#DB4437]">o</span><span className="text-[#F4B400]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#0F9D58]">l</span><span className="text-[#DB4437]">e</span><span className="font-normal text-[#437ee2]"> My business</span></h3>
              </div>
              <p className="font-light">Google My Business aumente la visibilité des professionnels dans les recherches locales sur Google. Il rend votre activité plus accessible en mettant en avant des informations clés comme l'adresse, les horaires et le numéro de téléphone. Les avis clients affichés renforcent la confiance envers vous.</p>
              <p className="text-shikam-normal">Shikam est partenaire officiel <span className="font-semibold">du programme Google My Business Partner depuis son lancement.</span></p>
              {/* <button className="px-6 py-3 shikam rounded-full bg-shikam-degrade text-white mt-6 shadow-md">Commander mon site web</button> */}
            </div>
          </div>
          <div >
            <Image
              src="/images/home/Shikam-google-mybusiness.png"
              alt="Agence Shikam publicité sur les réseaux sociaux"
              className="rounded-xl"
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </section>
  )
}

export default GoogleBusiness