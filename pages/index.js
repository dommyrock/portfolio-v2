import Head from "next/head";
import LightStrips from "../components/LightStrips";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import SocialsContainer from "../components/SocialsContainer";
import { google } from "googleapis";
import Blogs from "../components/Blogs";
// import styles from '../styles/Home.module.css'

export default function Home({ projects,posts }) {
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
        {projects && <Projects projects={projects} />}
        {posts && <Blogs posts={posts} />}
      </aside>
    </>
  );
}
//Run inly @Build time to pre render content
export async function getStaticProps(context) {
  //query googledocs
  const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY || '{ privateKey: null }')
  const auth = await google.auth.getClient({
    scopes: "https://www.googleapis.com/auth/spreadsheets.readonly",
    projectId: process.env.GOOGLE_PROJECTID,
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  });
  const sheet = google.sheets({ version: "v4", auth });
  //select from spreadsheet
  const range = "Sheet1!A2:E6";
  const res = await sheet.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  console.log('fetching spreadsheet data...\n');
  console.log('query:', range);
  console.log('Response > code:', res.status);
  const rows = res.data.values;
  const projects = rows.filter((x) => x[0][0] === "p");
  const posts = rows.filter((x) => x[0][0] === "b");

  return {
    props: { projects,posts }, // will be passed to the page component as props
  };
}
