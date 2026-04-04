import { FiClock, FiBook, FiTrendingUp, FiDownload, FiStar, FiHeart, FiShoppingCart, FiEye, FiChevronRight } from "react-icons/fi";
import blog1 from '../../assets/home/blog1.jpg';
import blog2 from '../../assets/home/blog2.jpg'; 

const Blog = () => {
  const posts = [
    {
      id: 1,
      image: blog1,
      saleTag: "Sale",
      department: "English Department",
      rating: "4.9",
      title: "Graphic Design",
      desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      salesCount: "15 Sales",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      stats: [
        { icon: <FiClock className="text-primary-blue text-xl"/>, text: "22h...", label: "Hours" },
        { icon: <FiBook className="text-[#E77C40] text-xl"/>, text: "64 Lessons", label: "Lessons" },
        { icon: <FiTrendingUp className="text-[#23856D] text-xl"/>, text: "Progress", label: "Progress" }
      ]
    },
    {
      id: 2,
      image: blog2,
      saleTag: "Sale",
      department: "English Department",
      rating: "4.9",
      title: "Graphic Design",
      desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      salesCount: "15 Sales",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      stats: [
        { icon: <FiClock className="text-primary-blue text-xl"/>, text: "22h...", label: "Hours" },
        { icon: <FiBook className="text-[#E77C40] text-xl"/>, text: "64 Lessons", label: "Lessons" },
        { icon: <FiTrendingUp className="text-[#23856D] text-xl"/>, text: "Progress", label: "Progress" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Üst Başlık Grubu */}
        <div className="text-center mb-24 space-y-4">
          <h6 className="text-primary-blue font-bold tracking-widest text-sm uppercase">Practice Advice</h6>
          <h2 className="text-dark-blue text-4xl font-bold tracking-tight">Featured Posts</h2>
        </div>

        {/* Post Kartları (Grid - 2 Sütun) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 max-w-[1200px] mx-auto">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col sm:flex-row group overflow-hidden border border-gray-100 shadow-sm">
              
              {/* Sol Taraf: Görsel ve Aksiyon İkonları */}
              <div className="relative w-full sm:w-[40%] h-[300px] sm:h-full overflow-hidden">
                {/* Sale Etiketi */}
                <span className="absolute top-6 left-6 bg-[#E74040] text-white px-5 py-1.5 rounded-sm text-sm font-bold z-10 shadow-md">
                  {post.saleTag}
                </span>
                
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Görsel Üzerindeki Beyaz Yuvarlak İkonlar (Düzenden farklı) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-blue text-xl cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
                    <FiHeart />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-blue text-xl cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
                    <FiShoppingCart />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-blue text-xl cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
                    <FiEye />
                  </div>
                </div>
              </div>

              {/* Sağ Taraf: Tüm Detaylar */}
              <div className="p-8 sm:p-10 flex flex-col gap-5 w-full sm:w-[60%]">
                
                {/* Departman ve Puan */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary-blue font-bold tracking-wide">{post.department}</span>
                  <div className="bg-dark-blue text-white px-3 py-1 rounded-full flex items-center gap-1.5 font-bold text-xs">
                    <FiStar className="text-amber-400 text-sm"/> {post.rating}
                  </div>
                </div>

                <h4 className="text-xl md:text-2xl text-dark-blue font-bold leading-tight pt-1">
                  {post.title}
                </h4>
                
                <p className="text-second-text text-sm md:text-base leading-relaxed max-w-[320px]">
                  {post.desc}
                </p>

                {/* Sales Sayısı */}
                <div className="flex items-center gap-2 text-second-text font-bold text-sm">
                  <FiDownload className="text-lg"/> <span>{post.salesCount}</span>
                </div>

                {/* Fiyatlar */}
                <div className="flex gap-2 font-bold text-xl pt-1">
                  <span className="text-[#bdbdbd]">{post.oldPrice}</span>
                  <span className="text-success-green">{post.newPrice}</span>
                </div>

                {/* Renk Seçenekleri */}
                <div className="flex gap-2 justify-start pt-2">
                  {post.colors.map((color, index) => (
                    <div 
                      key={index} 
                      className="w-5 h-5 rounded-full cursor-pointer hover:scale-110 transition-transform" 
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>

                {/* İstatistik İkonları */}
                <div className="flex justify-between items-center gap-3 pt-6 text-second-text text-xs sm:text-sm font-medium border-t border-gray-100 mt-2">
                  {post.stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      {stat.icon}
                      <span>{stat.text}</span>
                    </div>
                  ))}
                </div>

                {/* Buton */}
                <div className="pt-6">
                  <button className="border-2 border-primary-blue text-primary-blue px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary-blue hover:text-white transition-all uppercase group/btn">
                    Learn More 
                    <FiChevronRight className="text-primary-blue text-xl group-hover/btn:translate-x-1 transition-transform group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
