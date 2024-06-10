"use client"
import Aboutus from "@/components/Aboutus";
import Blank from "@/components/Blank";
import Landingpage from "@/components/Landingpage";
import Navbar from "@/components/Navbar";
import Next from "@/components/Next";
import OurJourney from "@/components/OurJourney";
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function Home() {
  const ianm = useRef(null)
  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.from(ianm.current,{
        translateY: "0",
        duration: 1,
        delay: 1,
        ease: "slowmo"
      })
    },ianm)
    return ()=> ctx.revert()
  },[])
  return (
     <>
     <div className="okok fixed h-screen w-full z-[-1]"></div>
     <div ref={ianm} className="fixed h-screen w-full z-[3] bg-black -translate-y-full"></div>
    <main className="relative z-0 w-full min-w-80 h-screen text-white">
        <Navbar/>
        <Landingpage/>
        <Aboutus/>
        <Blank/>
        <OurJourney/>
        <Next/>
    </main>
    </>
  );
}
