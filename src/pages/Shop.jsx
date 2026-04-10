import Clients from "../components/home/Clients";
import ShopCategories from "../components/shop/ShopCategories";
import ProductCard from "../components/shop/ProductCard";
import Pagination from "../components/shop/Pagination";
import { useParams } from 'react-router-dom';
import useProductStore from "../store/useProductStore";
import FilterBar from "../components/shop/FilterBar";

const Shop = () => {

  const { categoryId } = useParams();
  const { productList, total, fetchState, hasMore, loadMoreProducts } = useProductStore();

  const handleLoadMore = () => {
    // Pass current filter/sort state if needed
    loadMoreProducts({ category: categoryId });
  };

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

        {/* LOADING SPINNER */}
        {fetchState === 'FETCHING' && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-blue mb-4"></div>
            <p className="text-primary-blue font-bold">Loading Products...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {fetchState === 'ERROR' && (
          <div className="text-center py-20 text-red-500 font-bold">
            Failed to load products. Please try again later.
          </div>
        )}

        {/* PRODUCT LIST */}
        {fetchState === 'FETCHED' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productList.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-12 mb-20">
        {fetchState === 'FETCHING' || fetchState === 'FETCHING_MORE' ? (
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary-blue"></div>
        ) : hasMore ? (
          <button 
            onClick={handleLoadMore}
            className="bg-primary-blue text-white px-10 py-3 rounded font-bold hover:bg-dark-blue transition-all"
          >
            Load More Products
          </button>
        ) : (
          <p className="text-second-text italic">You've reached the end of the catalog.</p>
        )}
      </div>
      <div className="bg-[#FAFAFA]">
      <Clients />
      </div>
    </main>
  );
};

export default Shop;