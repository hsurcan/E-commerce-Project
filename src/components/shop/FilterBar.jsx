import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../../store/useProductStore';

const FilterBar = () => {
  const { categoryId } = useParams();
  
  const { 
    fetchProducts, 
    setSortOption, 
    filterText, 
    setFilterText, 
    sortOption 
  } = useProductStore();

  useEffect(() => {
    fetchProducts({ 
      category: categoryId, 
      filter: filterText 
    });
  }, [categoryId, filterText, fetchProducts]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 px-28 rounded-md shadow-sm mb-8">
      <div className="flex items-center gap-4">
        {/* Filter Input */}
        <input
          type="text"
          placeholder="Filter products..."
          className="border p-2 rounded-md outline-none focus:border-primary-blue text-sm"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        
        {/* Sort Select */}
        <select
          className="border p-2 rounded-md bg-white outline-none cursor-pointer text-sm"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="">Sort By: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating-high">Popularity (Rating)</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-second-text">
          Showing results for: <strong>{filterText || "All"}</strong>
        </span>
      </div>
    </div>
  );
};

export default FilterBar;