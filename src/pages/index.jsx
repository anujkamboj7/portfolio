import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollBack from "../components/ScrollBack";
import Footer from "../components/Footer";
const { Client } = require("@notionhq/client");

export default function Home({ projects }) {
  return (
    <div className='bg-bg_dark overflow-hidden  antialiased select-none relative break-word'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no'
        />
        <meta
          name='description'
          content="I'm Anuj Kamboj. I'm a senior web developer and designer. Welcome to my corner of the internet. I'm glad you're here!"
        />

        <link rel='shortcut icon' type='image' href='/Logo.png' />
        <title>Anuj Kamboj – Full Stack Developer</title>
      </Head>
      <Navbar />
      <Hero />
      <Service />
      <Projects projects={projects} />
      <Contact />
      <Footer />
      <ScrollBack />
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "title",
        direction: "ascending",
      },
    ],
  });

  return {
    props: {
      projects: response.results,
    },
    revalidate: 1,
  };
}
