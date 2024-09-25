
import {Hero} from "@/components/Hero";
import {NumberCounter} from "@/components/NumberCounter";
import { Navbar } from "@/components/Navbar";
import {Navbanner} from "@/components/Navbanner";


export default function Home() {
  return (
    <main className="">
    <Navbanner/>
    <Hero/>
    <NumberCounter/> 
  </main>
  );
}

