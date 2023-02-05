import Link from "next/link";
import Layout from "../components/Layout";
import { photos } from "../data/photos";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
    

      <div className="hero loader h-auto mx-0 my-0 bg-[#ECF0F3]">

        <div className="absolute bottom-0 left-0 mx:hidden">

        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

          <div class="draw-container">
          <div class="draw">
            <div class="rocket">
              <div class="window"></div>
            </div>
            
            <div class="smoke">
              <div class="one"></div>
              <div class="two"></div>
            </div>

            <div class="stars">
              <div class="star one"></div>
              <div class="star two small"></div>
              <div class="star three small"></div>
              <div class="star four small"></div>
              <div class="star five"></div>
              <div class="star six samll"></div>
              <div class="star seven"></div>
              <div class="star eight small"></div>
            </div>
          </div>
        </div>
        </div>

        <div className="box flex justify-center items-center z-50">
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3,
              duration: 1
            }}
            className="relative">
            <Image
              src="/360space-logo.png"
              alt="360space_logo"
              width={200}
              height={130}
            />
            </motion.div>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3.5,
              duration: 1
            }}
            className="relative btn btn__primary">
              Enter
            </motion.div>
        </div>
      </div>
    </Layout>
  );
}
