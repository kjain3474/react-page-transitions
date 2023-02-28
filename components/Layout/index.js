import { motion } from "framer-motion";
import { Stars } from "../UX-Components/Stars";

const Layout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "linear",
      stiffness: 260,
      damping: 20,
    }}
    className= "body-font font-poppins h-auto mx-0 my-0"
  >
    {children}
    <div className="absolute bottom-0 left-0">
            <Stars />
      </div>
  </motion.div>
);

export default Layout;
