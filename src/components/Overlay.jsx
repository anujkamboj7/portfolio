const Overlay = ({ active }) => {
  return (
    <div
      className={` ${
        active ? "block" : "hidden opacity-0"
      } sm:hidden backdrop-blur-sm  transition duration-200 bg-bg_dark/50 fixed h-full w-full z-[100]`}
    ></div>
  );
};

export default Overlay;
