import React from 'react'
import Bookmark from "../assets/Bookmark-Landing.png"
import Manage from "../assets/Manage-Landing.png"
import Chat from "../assets/Chat-Illustration.png"
import Job from "../assets/Job-Filtering.png"
import Country from "../assets/Country-Site.png"
import Notifications from "../assets/Notifications-Page.png"

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${Bookmark})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bookmark Site Landing Page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://stellular-tarsier-5df77f.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GerryL2/FrontEnd-Mentor-Projects/tree/main/Bookmark%20Landing%20Page" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${Manage})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bookmark Site Landing Page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://quiet-sopapillas-ccaaab.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GerryL2/FrontEnd-Mentor-Projects/tree/main/Manage%20Landing%20Page" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${Chat})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bookmark Site Landing Page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://timely-bunny-7fe669.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GerryL2/FrontEnd-Mentor-Projects/tree/main/Chat-App-Illustrator" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${Job})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bookmark Site Landing Page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://steady-sopapillas-c40cc8.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GerryL2/FrontEnd-Mentor-Projects/tree/main/Job%20Listing%20With%20Filtering" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${Country})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bookmark Site Landing Page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://effortless-gingersnap-a19fb8.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GerryL2/FrontEnd-Mentor-Projects/tree/main/Rest%20Countries%20API%20With%20Color%20Theme%20Switcher" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage: `url(${Notifications})`}}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bookmark Site Landing Page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://gerryl2-np.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GerryL2/FrontEnd-Mentor-Projects/tree/main/Notifications%20Page" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work