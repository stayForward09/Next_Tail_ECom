import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Fast Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-5xl">Lets build Amazon 2.0</h1>
      </main>

      
    </div>
  );
};

export default Home;
