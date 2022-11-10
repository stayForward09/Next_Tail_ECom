import Head from "next/head";
import { IProduct } from "../../typings";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

type Props = {
  products: IProduct[]
};

const Home = ({ products }: Props) => {
  
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Fast Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
    },
  };
};
