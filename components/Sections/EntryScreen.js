import {Stars} from "../UX-Components/Stars"
import { Rocket } from "../UX-Components/Rocket";
import Image from "next/image";
import { motion } from "framer-motion";

export function EntryScreen (props){
    return (
        <div className="loader h-auto mx-0 my-0">

        <div className="absolute bottom-0 left-0 mx:hidden">
          <Stars />
          <Rocket />
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
              delay: 3,
              duration: 1
            }}
            onClick={(e) => {
              props.setLoaderButtonCLicked(true)
            }}
            className="relative btn_loader btn__primary_loader">
              Enter
            </motion.div>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3,
              duration: 1
            }}
            className="flex items-center absolute mt-48 underline decoration-dashed underline-offset-2 font-normal text-xs">
              <span className="relative mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </span>
              <span className="tracking-widest indent-px">3D RENDERING STUDIO</span>
            </motion.div>
        </div>
      </div> 
    )
}