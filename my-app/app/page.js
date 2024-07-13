import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InvoiceCTA from "@/components/InvoiceCTA";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import AccordionFloat from "@/components/AccordionFloat";

export default function Home() {
  return (
   <main>
   <Hero />
   <Steps />
   <InvoiceCTA />
   <Steps/>
   <Features/>
   <Pricing/>
   <AccordionFloat/>
   {/* <FAQ/> */}
   </main>
  );
}
