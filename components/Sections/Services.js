import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { exploreWorlds } from '../constants';
import ExploreCard from '../UX-Components/ExploreCard';
import { Stars } from '../UX-Components/Stars';


const Services = () =>{
    const [active, setActive] = useState('world-2');
    const [active2, setActive2] = useState('world-2');


    return(
        <>
            <Stars />
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <div class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span class="top-0 left-7 mr-2 ml-2 w-3.5 h-3.5 bg-yellow-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        <span class="text-sm font-medium">OUR SERVICES</span> 
                    </div>
                    <h1 class="mb-16 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">CRAFTED 3D SERVICES</h1>

                    <h1 class="mb-16 text-2xl font-medium tracking-tight leading-none">Architectural Rendering Services</h1>
                    <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                        {exploreWorlds.map((world, index) => (
                            <ExploreCard
                            key={world.id}
                            {...world}
                            index={index}
                            active={active}
                            handleClick={setActive}
                            />
                        ))}
                    </div>

                    <h1 class="mb-16 mt-16 text-2xl font-medium tracking-tight leading-none">Product Rendering Services</h1>
                    <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                        {exploreWorlds.map((world, index) => (
                            <ExploreCard
                            key={world.id}
                            {...world}
                            index={index}
                            active={active2}
                            handleClick={setActive2}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Services;