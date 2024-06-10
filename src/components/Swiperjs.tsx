"use client"
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Swiperjs = () => {
    gsap.registerPlugin(ScrollTrigger)
    const wrapper = useRef(null)
    const container = useRef(null)
    useLayoutEffect(()=>{

        const ctx = gsap.context(()=>{
            const pin = gsap.fromTo(container.current,
                {
                    translateX: "0",
                },{
                    translateX: "-60%",
                    ease: "Linear.easeInOut",
                    duration: 5,
                    scrollTrigger:{
                        trigger: wrapper.current,
                        start: "top 20%",
                        end: 'bottom 60%',
                        scrub: 2,
                        pin:true
                    }
                }
        )
        },wrapper)
            if(window.innerWidth < 640){
              return  ctx.revert()
            }
        return () => ctx.revert()
    },[])
  return (
    <div ref={wrapper} className='w-full relative h-max overflow-x-hidden'>
    <div ref={container} id='container' className='flex flex-nowrap gap-5 px-5 w-max py-5'>
        <div className='w-96 flex flex-col h-96 hehe rounded-md bg-sky-900 max-sm:w-80 '>
            <div className='w-full flex items-center gap-3 p-2'>
                <div className='w-20 relative flex items-center justify-center h-20 rounded-full border border-[#0000009d]' ><div className="w-14 absolute h-14 rounded-full flex items-center text-3xl text-black justify-center border border-[#000000a9]">1</div></div>
                <h1 className='w-3/4 text-3xl'>Journey Architecture™ Strategy Blueprint</h1>
            </div>
            <div className='p-4 w-full'>
                <p>We start where you do: at the core. Which grand ambitions do you have and what impact are you planning to make? Together, we create your Journey Architecture™ Strategy Blueprint, a process in which we design the strategy that will make your journeys unique, ultimately personal and unseen experiences.</p>
            </div>
        </div>
        <div className='w-96 h-96 hehe rounded-md bg-sky-900 max-sm:w-80'>
        <div className='w-full flex items-center gap-3 p-2'>
                <div className='w-20 relative flex items-center justify-center h-20 rounded-full border border-[#0000009d]' ><div className="w-14 absolute h-14 rounded-full flex items-center text-3xl text-black justify-center border border-[#000000a9]">2</div></div>
                <h1 className='w-3/4 text-3xl'>Development of your journeys</h1>
            </div>
            <div className='p-4 w-full'>
                <p>The development of your strategy consists of the technical setup and connecting all programs necessary to turn your journey into reality. During this process, we work on the perfect, infinite journey for your target audience, while you focus on content creation.</p>
            </div>
        </div>
        <div className='w-96 h-96 hehe rounded-md bg-sky-900 max-sm:w-80'>
        <div className='w-full flex items-center gap-3 p-2'>
                <div className='w-20 relative flex items-center justify-center h-20 rounded-full border border-[#0000009d]' ><div className="w-14 absolute h-14 rounded-full flex items-center text-3xl text-black justify-center border border-[#000000a9]">3</div></div>
                <h1 className='w-3/4 text-3xl'>Optmization & new journeys</h1>
            </div>
            <div className='p-4 w-full'>
                <p>The greatest growth is in optimizing what we have created and continuing that journey together. We will be right next to you in this process, supporting each and every one of your ambitions and creating new journeys that perfectly fit your infinitely growing business.</p>
            </div>
        </div>
        <div className='w-96 h-96 hehe rounded-md bg-sky-900 max-sm:w-80'>
        <div className='w-full flex items-center gap-3 p-2'>
                <div className='w-20 relative flex items-center justify-center h-20 rounded-full border border-[#0000009d]' ><div className="w-14 absolute h-14 rounded-full flex items-center text-3xl text-black justify-center border border-[#000000a9]">4</div></div>
                <h1 className='w-3/4 text-3xl'>Infinite Heights</h1>
            </div>
            <div className='p-4 w-full'>
                <p>Infinite height is not the destination, it’s the journey. In your infinitely growing business, your heights get higher and higher with every goal you reach. During this process of growth, we are your trusted partner and are always standing next to you.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Swiperjs