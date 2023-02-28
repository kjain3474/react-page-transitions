import { useEffect, useRef, useState } from 'react';
import React from 'react';


const CardReveal = () =>{

    return(
        <>
            <div class="cards_wrap">
            <div class="cards_wrap__card">
                <div class="cards_wrap__card-stick">
                <h2>Architectural Rendering<span>INTERIOR / EXTERIOR / COMMERCIAL / RESIDENTIAL</span></h2>
                </div> 
            </div>
            <div class="cards_wrap__card">
                <div class="cards_wrap__card-stick color2">
                <h2>Product Rendering<span>Furniture / D2C Products</span></h2>
                </div> 
            </div>
            <div class="cards_wrap__card">
                <div class="cards_wrap__card-stick color4">
                <h2>Video Rendering<span>High Quality Video</span></h2>
                </div> 
            </div>
            <div class="cards_wrap__card">
                <div class="cards_wrap__card-stick color3">
                <h2>Augmented Reality<span>Web based solution</span></h2>
                </div> 
            </div>
            <div class="cards_wrap__card">
                <div class="cards_wrap__card-stick last">
                <h2>TEST TITLE - Last<span>最後一張測試卡片</span></h2>
                </div> 
            </div>
            </div>
        </>
    )
}

export default CardReveal;