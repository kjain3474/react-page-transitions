import { useEffect, React} from "react";
import { motion, useAnimationControls } from "framer-motion"
import styles from './ImageLoader.module.css'
import Image from "next/image";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1.2,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
};

export function ImageLoader(){

    const controls = useAnimationControls()

    useEffect(() => {
        controls.start("visible")
    }, [])

    

    return (
        <div class="body-font font-poppins">
            <motion.ul
            className={styles.container_hero}
            variants={container}
            initial="hidden"
            animate={controls}
        >
            <motion.li key={0} variants={item}> 
            <Image
              src="/hero-images/banquet.jpg"
              alt="360space_logo"
              width={200}
              height={130}
              className="rounded-[50]"
            />
            </motion.li>
            <motion.li key={1} variants={item}> 
            <Image
              src="/hero-images/couple_room_spa.jpg"
              alt="360space_logo"
              width={200}
              height={130}
              className="rounded"
            />
            </motion.li>
            <motion.li key={2} variants={item}> 
            <Image
              src="/hero-images/villa_pool.jpg"
              alt="360space_logo"
              width={200}
              height={130}
              className="rounded"
            />
            </motion.li>
        </motion.ul>
        </div>
    )
}