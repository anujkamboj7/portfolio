import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollBack = () => {
  const [scrollFixed, setScrollFixed] = useState(false);

  const stickScrollBack = () => {
    if (window.scrollY > 300) {
      setScrollFixed(true);
    } else {
      setScrollFixed(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", stickScrollBack);
  }

  return (
    <AnimatePresence>
      {scrollFixed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() =>
            scroll.scrollTo(0, {
              duration: 800,
              smooth: "smooth",
            })
          }
          className='cursor-pointer fixed right-[20px] bottom-[40px] lg:right-[40px] lg:bottom-[80px] flex items-center justify-center text-center  w-[50px] h-[50px] bg-cta_dark shadow-[0_0_25px_0_rgba(0,0,0,.4)] rounded-[8px] z-[1]'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7 text-[#ffffff]'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M5 15l7-7 7 7'
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollBack;
