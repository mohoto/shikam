import Image from "next/image"
import GoogleBusinessImage from "../../../public/images/home/Shikam-google-mybusiness.webp"
import localFont from "next/font/local";

const icomoonFont = localFont({
  src: "../../../fonts/icomoon.ttf",
});

type Props = {}

function GoogleBusiness({}: Props) {
  return (
    <section className="mb-20">
        <div className="grid lg:grid-cols-2 2xl:gap-x-20 lg:gap-x-10 place-items-end">
          <div className="flex flex-col items-stretch">
            <h3 className="text-3xl text-shikam-fonce mb-12"><span className="text-shikam-normal font-semibold">Google My Business </span>inclus avec la création de votre site web</h3>
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
              <div className="mt-8 flex flex-col gap-y-5">
                  <div className="flex items-center gap-x-4">
                    <span style={icomoonFont.style} className="text-shikam-fonce text-3xl">h</span>
                    <p className="text-shikam-fonce mb-0 text-lg">Visibilité locale accrue</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <span style={icomoonFont.style} className="text-shikam-fonce text-3xl">i</span>
                    <p className="text-shikam-fonce mb-0 text-lg">Interaction client facilitée</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <span style={icomoonFont.style} className="text-shikam-fonce text-3xl">j</span>
                    <p className="text-shikam-fonce mb-0 text-lg">Analyse de performance</p>
                  </div>
              </div>
            </div>
          </div>
          <div >
            <Image
              src={GoogleBusinessImage}
              alt="Agence Shikam publicité sur les réseaux sociaux"
              className="rounded-xl"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              priority
            />
          </div>
        </div>
      </section>
  )
}

export default GoogleBusiness