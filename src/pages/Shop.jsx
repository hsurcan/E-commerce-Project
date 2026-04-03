import Clients from "../components/home/Clients";
import ShopCategories from "../components/shop/ShopCategories";
import ProductFilter from "../components/shop/ProductFilter";
import ProductList from "../components/shop/ProductList";
import Pagination from "../components/shop/Pagination";

const Shop = () => {
  return (
    <main className="bg-white">
      {/*Breadcrumb*/}
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-dark-blue">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-dark-blue">Home</span>
            <span className="text-[#BDBDBD] underline">{" > "}</span>
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      <ShopCategories />
      <ProductFilter />
      <ProductList />
      <Pagination />
      <div className="bg-[#FAFAFA]">
        <Clients />
      </div>
    </main>
  );
};

export default Shop;