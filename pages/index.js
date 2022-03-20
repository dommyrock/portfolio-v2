import Head from "next/head";
import LightStrips from "../components/LightStrips";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import SocialsContainer from "../components/SocialsContainer";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <LightStrips />
      <div id="one">
        <Head>
          <title>Dominik Polzer</title>
          <meta name="description" content="Personal site :Dominik Polzer" />
          <link rel="icon" href="/ppict.png" />
        </Head>

        <main>
          <Intro />
          <Nav />
        </main>
        <SocialsContainer />
      </div>
      <aside>
        <Projects />
      </aside>
    </>
  );
}
