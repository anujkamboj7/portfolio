import Image from "next/image";

const Preloader = () => {
  return (
    <div className='fixed top-0 left-0 right-0 w-full min-h-screen bottom-0 z-10 bg-bg_dark flex items-center justify-center'>
      <div>
        <Image
          layout='fill'
          src='/Ripple-1s-200px.svg'
          h={200}
          w={200}
          alt='preloader'
        />
      </div>
    </div>
  );
};

export default Preloader;
