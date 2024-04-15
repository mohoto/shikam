import Benefits from "@/components/front/home/benefits";
import Faq from "@/components/front/home/faq";
import GoogleProtection from "@/components/front/home/googleProtection";
import Hero from "@/components/front/home/hero";
import Icons from "@/components/front/home/icons";
import Logos from "@/components/front/home/logos";
import OrderwWebSite from "@/components/front/home/orderwWebSite";
import PricingWebSite from "@/components/front/home/pricingWebSite";
import Services from "@/components/front/home/services";
import ServicesPublicite from "@/components/front/home/servicesPublicite";
import Testimonials from "@/components/front/home/testimonials";
import Image from "next/image";
import { TbWorldWww } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Icons />
      <Benefits />
      <Logos />
      <PricingWebSite />
      <ServicesPublicite />
      <GoogleProtection />   
      <Testimonials />
      <Faq />
      {/* <OrderwWebSite /> */}
    </main>
  );
}
