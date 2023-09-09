import { useState } from 'react'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 



function App() {

  return (
    <> 
        <nav class="bg-white border-gray-200 dark:bg-ars w-full">
          <div class="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="./public/images/arsenal-logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Home</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                {/* <span class="sr-only">Open main menu</span> */}
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='flex flex-col items-center'>
            <h1 className='text-5xl font-extrabold m-8 text-ars'>Common You Gooners</h1>
            <div className='w-full mt-4'>
                <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation = {{}}
                        pagination={{ 
                          clickable: true
                        }}
                  
                >
                  <SwiperSlide>
                    <img src="./public/images/Bukayo.webp" alt="" className='carousel-img ml-48 '/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./public/images/declan-rice.avif" alt="" className='carousel-img ml-48'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./public/images/martinelli.jpg" alt="" className='carousel-img ml-48'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./public/images/odegaard-chest.webp" alt="" className='carousel-img ml-48'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./public/images/saliba.jpg" alt="" className='carousel-img ml-48'/>
                  </SwiperSlide>
                </Swiper>
              </div>

            <h1 className='text-3xl mt-16 mb-8 capitalize underline'>Latest News about your favorite club</h1>
            <div className='mt-16 w-4/5 hover: cursor-pointer transition-all hover:opacity-50'>
              <a href="https://www.arsenal.com/news/turner-makes-permanent-move-nottingham-forest" target='_blank'>
                  <div className='flex border-ars border w-5/5 pr-8'>
                    <img src="./public/images/Turner.webp" alt="" className='w-3/4 mr-4'/>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-2xl font-extrabold'>Turner makes permanent move to Nottingham</h1>
                        <p>The USA international departs for the City Ground on a permanent transfer having joined us in June 2022</p>
                    </div>
                </div>
              </a>
            </div>
            

            <div className='mt-16 w-4/5 hover: cursor-pointer'>
              <h3 className='uppercase bg-red-600 w-5/5 p-4 mb-8'>arsenal 1-1 man city [4-1 pens]</h3>
              <a href="https://www.arsenal.com/news/access-all-areas-wembley-we-win-shield"target='_blank' className='hover:opacity-50 transition-all'>
                <div className='flex border-ars border w-5/5 pr-8'>
                  <img src="./public/images/community-shield.webp" alt="" className='w-3/4 mr-4 object-cover'/>
                  <div className='flex flex-col justify-center'>
                      <h1 className='text-2xl font-extrabold text-red-600'>Access All Areas at Wembley as we  win the Shield!</h1>
                      <p>Take a look at everything that went on behind the scenes on Sunday as we beat Manchester City to wib the Community Shield</p>
                  </div>
                </div>
              </a>
            </div>
            {/* The News items */} 
            <h2 className='mt-32 text-2xl mb-16 underline'>More News</h2>
            <div className='flex w-5/5'> 
            {/* Start of first container */}
                {/* First Item */}
                <div class="bg-white border w-72 mr-16 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="./public/images/Arteta.webp" alt="" />
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Arsenal told MIiel Arteta has signed  his own Robin van Persie after Gabriel Jesus injury.</p>
                        <a href="https://www.football.london/arsenal-fc/transfer-news/arsenal-arteta-robin-van-persie-27484526" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Second Item */}
                <div class="w-72 bg-white border mr-16 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="./public/images/balogun.webp" alt="" />
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Folarin Balogun Arsenal transfer latest: Agreement reached, Monaco bid, Inter Milan stance.</p>
                        <a href="https://www.football.london/arsenal-fc/transfer-news/folarin-balogun-arsenal-transfer-agreement-27056370" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Third Item */}
                <div class="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="./public/images/ramsdale.webp" alt="" />
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aaron Ramsdale issues four-word response to David Raya transfer talk after Arsenal agreement</p>
                        <a href="https://www.football.london/arsenal-fc/transfer-news/arsenal-aaron-ramsdale-david-raya-27483691" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>            
            </div> {/* End of first container*/}

            <div className='flex w-5/5 mt-8'> 
            {/* Start of second container */}
                {/* First Item */}
                <div class="bg-white border w-72 mr-16 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="./public/images/raya.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Arsenal agree £25m deal – medical within 36 hours</p>
                        <a href="https://dailycannon.com/2023/08/raya-arsenal-medical/" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Second Item */}
                <div class="w-72 bg-white border mr-16 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="./public/images/rice.avif" alt="" />
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Arsenal showed belief against Manchester City - buoyed by new signings</p>
                        <a href="https://theathletic.com/4753666/2023/08/07/arsenal-manchester-city-community-shield/" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Third Item */}
                <div class="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://theathletic.com/4758722/2023/08/09/arsenal-second-first-premier-league/">
                        <img class="rounded-t-lg w-full" src="./public/images/arsenal.avif" alt="" />
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">What must Arsenal do to go from runners-up to Premier League title winners?</p>
                        <a href="https://theathletic.com/4758722/2023/08/09/arsenal-second-first-premier-league/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>            
            </div> {/* End of first new container*/}


        </div>
       

    </>
  )
}

export default App
