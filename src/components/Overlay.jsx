import { motion, AnimatePresence } from "framer-motion";

const Overlay = ({ active }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.2,
          }}
          className={`sm:hidden  backdrop-blur-sm bg-bg_dark/50 fixed h-full w-full z-[100]`}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
