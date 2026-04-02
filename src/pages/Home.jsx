import Hero from "../components/home/Hero";
import Clients from "../components/home/Clients";
import ShopCards from "../components/home/ShopCards";
import ProductCards from "../components/home/ProductCards";
import Content from "../components/home/Content";
import Features from "../components/home/Features";
import Blog from "../components/home/Blog";

const Home = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <ShopCards />
      <ProductCards />
      <Content />
      <Features />
      <Blog />
    </main>
  );
};

export default Home;