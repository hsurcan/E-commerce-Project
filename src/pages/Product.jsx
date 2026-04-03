import ProductDetail from "../components/product/ProductDetail";
import ProductDescription from "../components/product/ProductDescription";
import BestSeller from "../components/product/BestSeller";
import Clients from "../components/home/Clients";

const ProductPage = () => {
  return (
    <main className="bg-[#FAFAFA]">
      {/* Breadcrumb Alanı */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-dark-blue">Home</span>
          <span className="text-[#BDBDBD]">{" > "}</span>
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      <ProductDetail />
      <ProductDescription />
      <BestSeller />
      
      <div className="bg-[#FAFAFA] py-12">
        <Clients />
      </div>
    </main>
  );
};

export default ProductPage;