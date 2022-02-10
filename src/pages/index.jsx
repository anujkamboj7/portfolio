import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import ScrollBack from "../components/ScrollBack";
import Service from "../components/Service";

export default function Home() {
  return (
    <div className='bg-bg_dark overflow-hidden  antialiased select-none relative break-word'>
      <Head>
        <meta
          name='description'
          content="I'm Anuj Kamboj. I'm a senior web developer and designer. Welcome to my corner of the internet. I'm glad you're here!"
        />

        <link rel='shortcut icon' type='image' href='/Logo.png' />
        <title>Anuj Kamboj – Full Stack Developer.</title>
      </Head>
      <Navbar />
      <Hero />
      <Service />
      <Projects />
      <Contact />
      <Footer />
      <ScrollBack />
    </div>
  );
}
