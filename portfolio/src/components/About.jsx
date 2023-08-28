import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                  About
                </p>
              </div>
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Hi. I'm Gerry, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                  <p>My path as a FrontEnd developer was born from a curiosity about how websites function
                    . I was captivated by the seamless interactions and designs they offered as a user. 
                    This intrigue led me to explore web development, where coding became a tool to turn 
                    creativity into reality.The prospect of crafting dynamic online experiences drove me 
                    to focus on FrontEnd. Through each line of code, I'm unraveling the mysteries behind 
                    the digital landscapes we encounter daily, fulfilling both my curiosity and my passion.</p>  
                </div>
              </div>
          </div>
        </div>
      );
    };

export default About