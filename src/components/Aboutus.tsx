"use client"
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const Aboutus = () => {
  gsap.registerPlugin(ScrollTrigger)
  const iam = useRef(null)
  const nig = useRef(null)
  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const pin = gsap.from("#super",{
        opacity:0,
        translateY: "30px",
        duration: 2,
        ease: "in",
        scrollTrigger:{
          trigger: iam.current,
          start: "top 30%",
        }
      })
      gsap.from(".khafa",{
        opacity:0,
        translateY: "30px",
        duration: 2,
        ease: "in",
        scrollTrigger:{
          trigger: iam.current,
          start: "top 30%",
        }
      })
      gsap.from(".ok",{
        opacity:0,
        translateX: "-30px",
        duration: 2,
        ease: "in",
        scrollTrigger:{
          trigger: nig.current,
          start: "top 30%",
        }
      })
      gsap.from(".ok2",{
        opacity:0,
        translateY: "30px",
        duration: 2,
        ease: "in",
        scrollTrigger:{
          trigger: nig.current,
          start: "top 30%",
        }
      })
    },iam)
    return ()=> ctx.revert()
  },[])
  return (
    <div ref={iam} className='w-full min-w-80 flex flex-col gap-32 relative max-sm:text-center py-36 bg-sky-950'>
        <div className='w-5/6 px-3 flex max-sm:px-0  gap-10 flex-col ml-auto mr-auto'>
        <div className='max-w-[550px]'>
            <p id='super' className='leading-relaxed max-md:text-2xl text-4xl'>Transform countless lives with automated <span className='font-serif italic'>journeys</span> that feel extraordinarily personal.</p>
        </div>
        <div className='khafa w-3/4 max-sm:w-full max-sm:ml-0 flex max-sm:flex-col gap-5 ml-auto'>
            <p className='w-1/2  max-sm:w-full'>True greatness starts with genuine connections. At Creative Journeys, we know that moments only become truly memorable if they feel like a personal experience. That’s where we come in - we help you make that possible, so you can touch people in their hearts and permanently change their lives with what you do. Even if you’re not always present yourself.</p>
            <p className='w-1/2 max-sm:w-full'>With our exclusive Journey Architecture™ method, scaling up without losing that personal touch and your undeniable quality becomes self-explanatory. In fact, your business will grow into a completely unique world that transforms and touches countless lives. With passionate ambassadors that want to share their love for your business with each and everyone, and loyal fans that never want to leave you ever again.</p>
        </div>
        </div>
        <div ref={nig} className='flex w-5/6 max-lg:flex-col px-3 max-sm:px-0 gap-10 ml-auto mr-auto'>
            <div className='ok max-lg:w-full max-sm:h-[400px]'></div>
            <div className='ok2 flex justify-center max-lg:items-center max-lg:w-full gap-10 flex-col w-1/2'>
              <h1 className='text-3xl w-3/4'>Skyhigh conversion and an abundance of loyal customers. </h1>
              <p className='max-md:ml-0 ml-auto w-3/4'>Get ready for your own journey of a lifetime and grow to infinite heights through an automated network of digital pathways with Journey Architecture™. Journeys that inevitably lead to the heart of your business and feel like they were designed specifically for every single individual. Every element resulted from your expertise, every twist and turn born from your vision. By analyzing what moves, touches, and drives someone, we create a personal pathway based on the choices you give them. Every step becomes a state-of-the-art experience shaped after their deepest desires, a seamless series of memorable moments, an unforgettable journey - all leading to the place that feels like home: your brand.</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutus