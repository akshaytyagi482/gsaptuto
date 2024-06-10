"use client"
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Landingpage() {
  const iam = useRef(null)
  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.from("#this",{
        opacity:0,
        translateY: "30px",
        duration: 2,
        ease: "in",
        delay: 2
      })
    },iam)
    return ()=> ctx.revert()
  },[])
  return (
    <div ref={iam} className="relative w-full h-screen min-w-80 overflow-hidden">
      <video className="absolute min-w-80 w-full h-full top-0 left-0 min-h-full object-cover bg-center z-1" loop muted autoPlay playsInline src="/ok.mp4"></video>
      <div className="relative flex justify-center items-center w-full h-full max-h-screen z-2 px-2">
        <h1 id="this" className="w-full max-w-3/4 md:w-3/4 lg:w-2/4 xl:w-2/4 text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-white font-bold italic">
          Reach <span className="font-serif">Infinite height</span> with your business
        </h1>
      </div>
    </div>
  )
}

export default Landingpage