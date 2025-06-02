import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const events = [
    {
      title: "День рождения принцессы",
      hotel: "Radisson Blu Resort",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=300&fit=crop",
      age: "6 лет",
    },
    {
      title: "Пиратская вечеринка",
      hotel: "Hyatt Regency Sochi",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=300&fit=crop",
      age: "8 лет",
    },
    {
      title: "Супергеройский праздник",
      hotel: "Marriott Sochi",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop",
      age: "7 лет",
    },
    {
      title: "Научная лаборатория",
      hotel: "Сочи Парк Отель",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      age: "9 лет",
    },
    {
      title: "Магический единорог",
      hotel: "Swissotel Resort",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      age: "5 лет",
    },
    {
      title: "Футбольный чемпионат",
      hotel: "Pullman Sochi Centre",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop",
      age: "10 лет",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Галерея наших праздников 📸
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите, как проходят наши мероприятия в лучших отелях Сочи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.age}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm">📍 {event.hotel}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Хотите увидеть больше?
            </h3>
            <p className="text-gray-600 mb-4">
              У нас есть еще сотни фотографий счастливых детей!
            </p>
            <a
              href="#"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Смотреть все фото →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
