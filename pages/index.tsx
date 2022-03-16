import Head from "next/head";
import { Layout, SearchDataBTN } from "../components";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Buscador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SearchDataBTN />
      </Layout>
    </div>
  );
}
