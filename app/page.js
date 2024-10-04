
import {Hero} from "@/components/Hero";
import {NumberCounter} from "@/components/NumberCounter";
import { Navbar } from "@/components/Navbar";
import {Navbanner} from "@/components/Navbanner";
import { About } from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Fonctionnement } from "@/components/Fonctionnement";


export default function Home() {
  return (
    <main className="">
    <Navbanner/>
    <Hero/>
    <NumberCounter/> 
    <About/>
    <WhyChooseUs/>
    <Fonctionnement/>
  </main>
  );
}

