import Benefits from "@/components/front/common/home/benefits";
import Faq from "@/components/front/common/home/faq";
import GoogleProtection from "@/components/front/common/home/googleProtection";
import Hero from "@/components/front/common/home/hero";
import Icons from "@/components/front/common/home/icons";
import Logos from "@/components/front/common/home/logos";
import OrderwWebSite from "@/components/front/common/home/orderwWebSite";
import PricingWebSite from "@/components/front/common/home/pricingWebSite";
import Services from "@/components/front/common/home/services";
import ServicesPublicite from "@/components/front/common/home/servicesPublicite";
import Testimonials from "@/components/front/common/home/testimonials";
import Image from "next/image";
import { TbWorldWww } from "react-icons/tb";

export default function Home() {
  return (
    <main>
      <Hero />
      <Icons />
      <Services />
      <Logos />
      <Benefits />
      <PricingWebSite />
      <ServicesPublicite />
      <GoogleProtection />   
      <Testimonials />
      <Faq />
      {/* <OrderwWebSite /> */}
    </main>
  );
}
