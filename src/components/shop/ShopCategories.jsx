import cat1 from "../../assets/shop/cat1.jpg"; 
import cat2 from "../../assets/shop/cat2.jpg";
import cat3 from "../../assets/shop/cat3.jpg";
import cat4 from "../../assets/shop/cat4.jpg";
import cat5 from "../../assets/shop/cat5.jpg";  

const ShopCategories = () => {
  const categories = Array(5).fill().map((cat, index) => {
    switch (index) {
      case 0:
        return { ...cat, title: "CLOTHS", count: "5 Items", img: cat1 };
      case 1:
        return { ...cat, title: "ELECTRONICS", count: "5 Items", img: cat2 };
      case 2:
        return { ...cat, title: "HOME & KITCHEN", count: "5 Items", img: cat3 };
      case 3:
        return { ...cat, title: "BEAUTY", count: "5 Items", img: cat4 };
      case 4:
        return { ...cat, title: "SPORTS", count: "5 Items", img: cat5 };
    }
  });

  return (
    <section className="bg-[#FAFAFA] pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden h-[250px]">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white">
                <h5 className="font-bold text-lg">{cat.title}</h5>
                <p className="text-sm">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategories;