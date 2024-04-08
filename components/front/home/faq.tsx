import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {}

function Faq({}: Props) {
  return (
    <section className="my-20 section-padding">
      <div className="grid lg:grid-cols-2">
        <div className="justify-self-start">
          <Image
            src="/images/home/faq.png"
            alt="Agence Shikam publicité sur les réseaux sociaux"
            className="rounded-xl"
            width={600}
            height={600}
            priority
          />
        </div>
        <div>
          <div className="flex flex-col mb-10">
            <span className="text-shikam-normal font-semibold mb-1 text-lg">DES QUESTIONS ?</span>
            <h2 className="text-4xl font-bold text-shikam-fonce xl:!leading-relaxed">Les questions que se <span className="text-shikam-degrade">posaient nos clients</span></h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-lg">Pourquoi avoir un site web est-il important pour mon activité ?</AccordionTrigger>
              <AccordionContent className="text-base">
                Un site web, c'est comme une boutique ouverte tout le temps sur internet. Il permet de montrer ce que vous faites et de vendre vos produits ou services à plus de gens.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="lg:text-lg">Comment pouvez-vous améliorer la visibilité de mon site sur Google ? </AccordionTrigger>
              <AccordionContent className="text-base">
                 Nous rendons votre site plus facile à trouver sur Google en utilisant des techniques de référencement naturel (SEO). Cela consiste à rédiger et créer du contenu en utilisant des mots-clés pertinents et faire en sorte que votre site soit mentionné par d'autres sites.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="lg:text-lg">Comment fonctionnent les publicités sur les réseaux sociaux ?</AccordionTrigger>
              <AccordionContent className="text-base">
                On crée des annonces sur les réseaux sociaux qui apparaissent aux personnes qui pourraient être intéressées par ce que vous offrez, en fonction de leur âge, où elles habitent, et ce qu'elles aiment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="lg:text-lg">Combien de temps faut-il attendre pour voir les effets de ces actions ?</AccordionTrigger>
              <AccordionContent className="text-base">
                Cela dépend. Pour que votre site apparaisse naturellement mieux sur Google, cela peut prendre quelques mois. Les publicités sur les réseaux sociaux, Google et Bing peuvent avoir des résultats plus rapides, mais il faut continuer à les ajuster pour réussir sur le long terme.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq