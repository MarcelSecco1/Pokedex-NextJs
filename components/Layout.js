import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="PokeNext" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
