import Clients from "../components/home/Clients";
import ShopCategories from "../components/shop/ShopCategories";
import ProductCard from "../components/shop/ProductCard";
import { useParams, useSearchParams } from 'react-router-dom';
import useProductStore from "../store/useProductStore";
import FilterBar from "../components/shop/FilterBar";
import { useEffect } from "react";

const Shop = () => {

const {categoryId } = useParams();
  const { 
    productList, 
    loadMoreProducts, 
    filterText, 
    total, 
    fetchState,
    fetchProducts 
  } = useProductStore();

  useEffect(() => {
    fetchProducts({ category: categoryId, filter: filterText });
  }, [categoryId, fetchProducts, filterText]); 

  const handleLoadMore = () => {
    loadMoreProducts({ category: categoryId, filter: filterText });
  };

const [searchParams] = useSearchParams();
const urlFilter = searchParams.get('filter');

useEffect(() => {
  fetchProducts({ 
    category: categoryId, 
    filter: urlFilter || filterText 
  });
}, [categoryId, fetchProducts, filterText, urlFilter]);

  return (
    <main className="bg-white">
      {/*Breadcrumb*/}
      <div className="bg-[#FAFAFA] py-6">
        <div className="mx-auto px-28 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-dark-blue">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-dark-blue">Home</span>
            <span className="text-[#BDBDBD] underline">{" > "}</span>
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>
      <ShopCategories />
      <FilterBar />

      <div className="mx-auto px-28 py-12">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-dark-blue">
            {categoryId ? "Filtered Category" : "All Products"}
          </h2>
          <p className="text-second-text font-bold">
            Showing all {total} results
          </p>
        </div>

        {/* ERROR STATE */}
        {fetchState === "ERROR" && (
          <div className="text-center py-20 text-red-500 font-bold">
            Failed to load products. Please try again later.
          </div>
        )}

        {/* PRODUCT LIST */}
        {productList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productList.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        ) : (
          fetchState === "FETCHED" && (
            <div className="text-center py-10">No products found.</div>
          )
        )}

        <div className="flex flex-col items-center py-10">
          {fetchState === "FETCHING" && (
            <div className="flex items-center gap-2 mb-4">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-blue"></div>
              <p>Loading products...</p>
            </div>
          )}

          {productList.length < total && fetchState !== "FETCHING" && (
            <button
              onClick={handleLoadMore}
              className="bg-primary-blue text-white px-8 py-3 rounded-md font-bold hover:bg-dark-blue transition-all"
            >
              Load More
            </button>
          )}

          {total > 0 &&
            productList.length >= total &&
            fetchState === "FETCHED" && (
              <p className="text-second-text italic">
                You've reached the end of the catalog.
              </p>
            )}
        </div>
      </div>
    </main>
  );
};

export default Shop;