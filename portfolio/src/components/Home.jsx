import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>
        <section className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Gerry Lauriant</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FrontEnd Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am an aspiring FrontEnd developer, dedicated to crafting fully responsive websites.
                 My passion for blending design and technology drives me to create user-friendly interfaces
                that adapt seamlessly to different devices. By staying current with web development
                trends and embracing challenges, I strive to build immersive online experiences
                that leave a lasting impact.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 hover:'/>
                </span>
                </button>
            </div>
        </section>
    </div>
  )
}

export default Home