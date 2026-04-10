import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../../store/useProductStore';

const FilterBar = () => {
  const { categoryId } = useParams();
  const setProductList = useProductStore((state) => state.setProductList);
  
  // Local states for filtering
  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("");

  // IMPORTANT: Whenever category, filter, or sort changes, refetch with ALL parameters
  useEffect(() => {
    const queryParams = {};
    if (categoryId) queryParams.category = categoryId;
    if (filterText) queryParams.filter = filterText;
    if (sortOption) queryParams.sort = sortOption;

    setProductList(queryParams);
  }, [categoryId, filterText, sortOption, setProductList]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 px-28 rounded-md shadow-sm mb-8">
      <div className="flex items-center gap-4">
        {/* Filter Input */}
        <input
          type="text"
          placeholder="Filter products..."
          className="border p-2 rounded-md outline-none focus:border-primary-blue"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        
        {/* Sort Select */}
        <select
          className="border p-2 rounded-md bg-white outline-none cursor-pointer"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price:asc">Price: Low to High</option>
          <option value="price:desc">Price: High to Low</option>
          <option value="rating:asc">Rating: Low to High</option>
          <option value="rating:desc">Rating: High to Low</option>
        </select>
      </div>

      <button 
        className="bg-primary-blue text-white px-6 py-2 rounded-md font-bold hover:bg-dark-blue transition-colors"
        onClick={() => {/* The useEffect already handles the fetch on state change */}}
      >
        Filter
      </button>
    </div>
  );
};

export default FilterBar;