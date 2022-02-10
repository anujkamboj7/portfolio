import { BsArrowUp } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

const ScrollBack = () => {
  return (
    <a
      onClick={() =>
        scroll.scrollTo(0, {
          duration: 800,
          smooth: "smooth",
        })
      }
      className='cursor-pointer hidden absolute lg:block lg:right-14 lg:bottom-20 bg-primary rounded-[4px] z-[1] p-2.5 text-links_dark'
    >
      <BsArrowUp className='h-5 w-5' />
    </a>
  );
};

export default ScrollBack;
