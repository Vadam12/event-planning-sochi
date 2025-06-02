import { useState } from "react";

const ChildrenGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images = [
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop",
      alt: "Дети с разноцветными шариками",
      title: "Радость без границ",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop",
      alt: "Счастливая девочка с шариками",
      title: "Волшебные моменты",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=500&h=400&fit=crop",
      alt: "Дети играют с шариками",
      title: "Игры и веселье",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1607048034494-c6e13e6e8ff4?w=500&h=400&fit=crop",
      alt: "Праздничные шарики",
      title: "Яркие краски детства",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=400&fit=crop",
      alt: "Дети с воздушными шарами",
      title: "Незабываемые эмоции",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1607048034494-c6e13e6e8ff4?w=500&h=400&fit=crop",
      alt: "Праздник детства",
      title: "Сказочные приключения",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Моменты счастья 📸
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый праздник — это новая история радости и улыбок наших маленьких
            гостей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                hoveredImage === index ? "transform scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredImage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </div>

              {/* Decorative balloon */}
              <div
                className={`absolute top-4 right-4 text-2xl transition-transform duration-300 ${
                  hoveredImage === index ? "animate-bounce" : ""
                }`}
              >
                🎈
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span className="text-2xl animate-pulse">🌟</span>
            <span className="text-gray-700 font-medium">
              Создаем радость каждый день!
            </span>
            <span className="text-2xl animate-pulse">🌟</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenGallery;
