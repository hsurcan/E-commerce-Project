import { FiGrid, FiList } from "react-icons/fi";

const ProductFilter = () => {
  return (
    <div className="py-6 border-b border-gray-100">
      <div className="mx-auto px-6 lg:px-28 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-second-text font-bold text-sm">Showing all 12 results</span>
        
        <div className="flex items-center gap-4">
          <span className="text-second-text font-bold text-sm">Views:</span>
          <button className="p-4 border border-gray-200 rounded-md"><FiGrid /></button>
          <button className="p-4 border border-gray-200 rounded-md"><FiList /></button>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <select className="bg-[#F9F9F9] border border-[#DDDDDD] p-3 text-sm rounded-md outline-none text-second-text flex-grow md:flex-grow-0">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
          </select>
          <button className="bg-primary-blue text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-opacity-90">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;