const ProductDescription = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Tab Menü */}
        <div className="flex justify-center border-b border-gray-200 mb-10 overflow-x-auto whitespace-nowrap">
          <button className="px-6 py-4 text-sm font-bold text-second-text border-b-2 border-transparent">Description</button>
          <button className="px-6 py-4 text-sm font-bold text-second-text">Additional Information</button>
          <button className="px-6 py-4 text-sm font-bold text-second-text">Reviews (0)</button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <img src="/path-to-desc-img.png" className="rounded-lg shadow-lg w-full object-cover" />
          </div>
          <div className="lg:w-1/3 space-y-6">
            <h4 className="text-2xl font-bold text-dark-blue">the quick fox jumps over </h4>
            <p className="text-second-text text-sm leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
          </div>
          <div className="lg:w-1/3 space-y-4">
             <h4 className="text-2xl font-bold text-dark-blue">the quick fox jumps over </h4>
             <ul className="text-second-text text-sm font-bold space-y-2">
                <li>{">"} the quick fox jumps over the lazy dog</li>
                <li>{">"} the quick fox jumps over the lazy dog</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;