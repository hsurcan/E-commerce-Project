const Pagination = () => {
  return (
    <div className="flex justify-center py-12">
      <div className="flex border border-[#BDBDBD] rounded-md overflow-hidden">
        <button className="px-6 py-4 bg-[#F3F3F3] text-[#BDBDBD] font-bold border-r border-[#BDBDBD]">First</button>
        <button className="px-5 py-4 text-primary-blue font-bold border-r border-[#BDBDBD]">1</button>
        <button className="px-5 py-4 bg-primary-blue text-white font-bold border-r border-[#BDBDBD]">2</button>
        <button className="px-5 py-4 text-primary-blue font-bold border-r border-[#BDBDBD]">3</button>
        <button className="px-6 py-4 text-primary-blue font-bold">Next</button>
      </div>
    </div>
  );
};

export default Pagination;