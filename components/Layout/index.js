import { motion } from "framer-motion";

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
    className="bg-[#ECF0F3] isolate"
  >
    {children}
  </motion.div>
);

export default Layout;
