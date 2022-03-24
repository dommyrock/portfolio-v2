import Head from "next/head";
import LightStrips from "../components/LightStrips";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import SocialsContainer from "../components/SocialsContainer";
import { google } from "googleapis";
// import styles from '../styles/Home.module.css'

export default function Home({rows}) {
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
        <Projects data={rows}/>
      </aside>
    </>
  );
}
//Run inly @Build time to pre render content
export async function getStaticProps(context) {
  //query googledocs
  const auth = await google.auth.getClient({
    scopes: "https://www.googleapis.com/auth/spreadsheets.readonly",
  });
  const sheet = google.sheets({ version: "v4", auth });
  //select from spreadsheet
  const range = "Sheet1!A1:B1";
  const res = await sheet.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  const rows = res.data.values;
  return {
    props: { rows }, // will be passed to the page component as props
  };
}
