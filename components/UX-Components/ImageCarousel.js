import { useEffect, useRef, useState } from 'react';
import React from 'react';


const ImageCarousel = () =>{

    const imgArray = ["/banquet.jpg","couple_room_spa.jpg","/couple_room_spa.jpg"]
    const [count, setCount] = useState(0)
    const imageRef = useRef();

    useEffect(() => {
        let i = 0;
        imageRef.current.src = imgArray[i];
        const interval = setInterval(() => {
          i=(i+1) % 3
          imageRef.current.src = imgArray[i];
        }, 4000);
        return () => clearInterval(interval);
      }, []);

    return(
        <>
            <div class="flex justify-center items-center">
                <img class="w-full rounded-lg" ref={imageRef} alt="office content 1"/>
            </div>
        </>
    )
}

export default ImageCarousel;