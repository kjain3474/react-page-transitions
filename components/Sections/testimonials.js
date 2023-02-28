import { useEffect, useRef, useState } from 'react';
import React from 'react';


const Testimonials = () =>{

    return(
        <>

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <div class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span class="top-0 left-7 mr-2 ml-2 w-3.5 h-3.5 bg-blue-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    <span class="text-sm font-medium">WHAT CLIENTS SAY</span> 
                </div>
                <h1 class="mb-16 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">WE VALUE WORK ETHICS</h1>

            
                <div class="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
                    <div class="grid lg:grid-cols-2">
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 md:p-12 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-200 border-transparent border-2">
                            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                            </svg> 
                            <blockquote>
                                <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 hover:tracking-wide">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 md:p-12 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-200 border-transparent border-2">
                            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                            </svg> 
                            <blockquote>
                                <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 hover:tracking-wide">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 md:p-12 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-200 border-transparent border-2">
                            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                            </svg> 
                            <blockquote>
                                <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 hover:tracking-wide">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 md:p-12 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-200 border-transparent border-2">
                            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                            </svg> 
                            <blockquote>
                                <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 hover:tracking-wide">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Testimonials;