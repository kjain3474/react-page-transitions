import React from 'react';
import Image from 'next/image';

const HoneyCombGallery = () =>{

    return(
        <>
            <div class="gallery">
                <Image src="/hero_3.webp" alt="360space_isometric_image_1" height="300" width="300" class="img1"/>
                <Image src="/hero_12.webp" alt="360space_isometric_image_1" height="300" width="300" class="img2"/>
                <Image src="/hero_4.webp" alt="360space_isometric_image_1" height="300" width="300" class="img3"/>
                <Image src="/hero_5.png" alt="360space_isometric_image_1" height="300" width="300" class="img4"/>
                <Image src="/hero_6.webp" alt="360space_isometric_image_1" height="300" width="300" class="img5"/>
                <Image src="/hero_7.webp" alt="360space_isometric_image_1" height="300" width="300" class="img6"/>
                <Image src="/hero_8.webp" alt="360space_isometric_image_1" height="300" width="300" class="img7"/>
            </div>
        </>
    )
}

export default HoneyCombGallery;