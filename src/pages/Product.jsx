import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import ProductDetail from "../components/product/ProductDetail";
import ProductDescription from "../components/product/ProductDescription";
import BestSeller from "../components/product/BestSeller";
import Clients from "../components/home/Clients";

const Product = () => {
  const { productId, gender, categoryName, productNameSlug } = useParams();
  const { fetchProductById, fetchState, currentProduct } = useProductStore();

  useEffect(() => {
    fetchProductById(productId);
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [productId, fetchProductById]);

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-blue"></div>
      </div>
    );
  }

  return (
    <main className="bg-[#FAFAFA]">
      {/* Dynamic Breadcrumbs */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Link to="/" className="text-dark-blue hover:text-primary-blue transition-colors">Home</Link>
          <span className="text-[#BDBDBD]">{" > "}</span>
          <Link to="/shop" className="text-dark-blue hover:text-primary-blue capitalize">Shop</Link>
          <span className="text-[#BDBDBD]">{" > "}</span>
          <span className="text-[#BDBDBD] capitalize">{gender}</span>
          <span className="text-[#BDBDBD]">{" > "}</span>
          <span className="text-[#BDBDBD] capitalize">{categoryName}</span>
        </div>
      </div>

      {/* Passing data to sub-components */}
      {currentProduct && (
        <>
          <ProductDetail product={currentProduct} />
          <ProductDescription product={currentProduct} />
        </>
      )}
      
      <BestSeller />
      
      <div className="bg-[#FAFAFA] py-12">
        <Clients />
      </div>
    </main>
  );
};

export default Product;