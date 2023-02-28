import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Image from 'next/image';


const Founders = () =>{

    return(
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <div class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span class="top-0 left-7 mr-2 ml-2 w-3.5 h-3.5 bg-orange-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        <span class="text-sm font-medium">OUR FOUNDERS</span> 
                    </div>
                    <h1 class="mb-16 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">ALWAYS AIMING FOR SUCCESS</h1>

                    <div class="flex-wrap inline-flex justify-between items-center py-1 px-1 pr-4 gap-8">
                        <div class="card_profile 1">
                            <div class="card_image"> <Image src={'/kinjal_jain.jpg'} alt={'kapil jain founder image'} width={300} height={300} /> </div>
                            <div class="card_title font-semibold tracking-widest title-white backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-2xl">
                                <p>KINJAL JAIN</p>
                            </div>
                        </div>
                        <div class="card_profile 1">
                            <div class="card_image"> <Image src={'/kapil_jain.jpg'} alt={'kapil jain founder image'} width={300} height={300} /> </div>
                            <div class="card_title font-semibold tracking-widest title-white backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-2xl">
                                <p>KAPIL JAIN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Founders;