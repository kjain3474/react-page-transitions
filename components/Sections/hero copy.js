import { useEffect, useRef, useState } from 'react';
import React from 'react';
import TypeWriter from '../components/typewriter';
import HoneyCombGallery from '../components/honeyCombGallery';


const Hero = () =>{

    return(
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
                        <TypeWriter />
                        <h2 class="mt-10 font-light">Whats is 360Space ?</h2>
                        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">3D Rendering Studio providing you extensive rendering services</p>
                    </div>
                    <div class="mb-40 mt-40 flex items-center justify-center h-40">
                        <HoneyCombGallery />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;