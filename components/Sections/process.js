import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { Stars } from '../UX-Components/Stars';

const Process = () =>{

    const [view, setView] = useState(1)
    const textArr = ["360space gets the requirements of the clients with detailed analyses", "360space has skilled designers and developers that convert CAD designs to 3D models", "360space takes care to review design with clients for their satisfaction", "Finally 360space delivers cutting edge results to the clients in their required formats"]

    const getText = () =>{
        return textArr[view-1]
    }

    return(
    <>
        <Stars />
        <section class="bg-white dark:bg-gray-900 faded-bg">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <div class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span class="top-0 left-7 mr-2 ml-2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    <span class="text-sm font-medium">OUR PROCESS</span> 
                </div>
                <h1 class="mb-16 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">WE MAKE IT SEAMLESS</h1>

                <div class="process_container">
                    <div class="process_tabs">
                        <input type="radio" id="radio-1" name="tabs" defaultChecked={true} onClick={()=>setView(1)}/>
                        <label class="process_tab" htmlFor="radio-1">DISCUSS</label>
                        <input type="radio" id="radio-2" name="tabs" onClick={()=>setView(2)}/>
                        <label class="process_tab" htmlFor="radio-2">DESIGN</label>
                        <input type="radio" id="radio-3" name="tabs" onClick={()=>setView(3)}/>
                        <label class="process_tab" htmlFor="radio-3">REVIEW</label>
                        <input type="radio" id="radio-4" name="tabs" onClick={()=>setView(4)}/>
                        <label class="process_tab" htmlFor="radio-4">DELIVER</label>
                        <span class="glider"></span>
                    </div>
                </div>
                
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <><Image src={`/process_360_${view}.gif`} alt='process image 1 360 space' height={600} width={600} class="mb-8 mx-auto rounded-lg"></Image>
                    <figure class="mx-auto">
                        <p class="text-2xl font-medium text-gray-900 dark:text-white">{getText()}</p>
                    </figure></>
                </div>

            </div>
        </section>
    </>
    )
}

export default Process;