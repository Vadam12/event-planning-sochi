import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Services = () => {
  const workshopGroups = [
    {
      title: "До 20 человек",
      subtitle: "40-75 минут",
      color: "from-green-400 to-emerald-500",
      icon: "Users",
      workshops: [
        {
          name: "Творческий МК - волшебные палочки",
          price: 6000,
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          name: "Игрушка-карандаш",
          price: 6500,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      title: "До 15 человек",
      subtitle: "40-75 минут",
      color: "from-blue-400 to-cyan-500",
      icon: "Palette",
      workshops: [
        {
          name: "Волшебный браслет - бусины",
          price: 7000,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
        {
          name: "Зефирки/кексики",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop",
        },
        {
          name: "Свечи ручной работы",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1602874801006-7f99d1a14d42?w=400&h=300&fit=crop",
        },
        {
          name: "Фоамиран украшения",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Слайм",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          name: "Роспись масок",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "Брелки",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
        {
          name: "Деревянные фигурки роспись",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "Картины из песка",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Правополушарное рисование",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "Полимерная глина",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Мыловарение",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1602874801006-7f99d1a14d42?w=400&h=300&fit=crop",
        },
        {
          name: "Ловцы снов",
          price: 7500,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      title: "До 10 человек",
      subtitle: "40-75 минут",
      color: "from-purple-400 to-pink-500",
      icon: "Star",
      workshops: [
        {
          name: "Роспись шкатулок",
          price: 8500,
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "Браслет выживания",
          price: 8500,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
        {
          name: "Роспись домиков",
          price: 8500,
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "Фонарики желаний",
          price: 8500,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "МК научные эксперименты",
          price: 8500,
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          name: "Шоколадные фигурки",
          price: 9000,
          image:
            "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop",
        },
        {
          name: "Термомозайка",
          price: 9000,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Леденца на палочке",
          price: 9000,
          image:
            "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop",
        },
        {
          name: "Ложки деревянные",
          price: 9000,
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "Бейсболки",
          price: 9500,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Футболки",
          price: 9500,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Скворечники",
          price: 9500,
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "МК мороженое азот",
          price: 9500,
          image:
            "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop",
        },
        {
          name: "Шоперы",
          price: 10000,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Эпоксидная смола",
          price: 10000,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Пряники (3 шт)",
          price: 10000,
          image:
            "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop",
        },
        {
          name: "3D ручка",
          price: 10000,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Пузыри с погружением",
          price: 10000,
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          name: "Роспись витраж. красками",
          price: 11000,
          image:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        },
        {
          name: "Бомбочки для ванн",
          price: 11000,
          image:
            "https://images.unsplash.com/photo-1602874801006-7f99d1a14d42?w=400&h=300&fit=crop",
        },
        {
          name: "Космос в бутылке",
          price: 11000,
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
          name: "Фрисби",
          price: 11000,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "МК упаковка подарков",
          price: 11500,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Кожаные браслеты",
          price: 12000,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        },
        {
          name: "Овершейк",
          price: 12000,
          image:
            "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop",
        },
        {
          name: "Кашпо живые цветы/мох",
          price: 12000,
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        },
      ],
    },
  ];

  const additionalServices = [
    { name: "Мини пузыри", duration: "30 мин", price: 3000, icon: "Circle" },
    { name: "Аквагрим", duration: "30 мин", price: 3500, icon: "Paintbrush" },
  ];

  const formatPrice = (price: number) => `${price.toLocaleString("ru-RU")}₽`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Мастер-классы 🎨
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Творческие мастер-классы для детей в отелях Сочи. Профессиональные
            материалы и опытные мастера
          </p>
        </div>

        {/* Workshop Groups */}
        <div className="space-y-12">
          {workshopGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${group.color} flex items-center justify-center`}
                  >
                    <Icon
                      name={group.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {group.title}
                  </h3>
                </div>
                <p className="text-gray-600">{group.subtitle}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.workshops.map((workshop, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0"
                  >
                    <div
                      className={`h-1 bg-gradient-to-r ${group.color}`}
                    ></div>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={workshop.image}
                        alt={workshop.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
                          {workshop.name}
                        </h4>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${group.color} text-white font-bold text-lg`}
                        >
                          {formatPrice(workshop.price)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
              <Icon name="Sparkles" size={24} className="text-yellow-500" />
              Дополнительные услуги
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mb-4">
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="mb-3">
                    {service.duration}
                  </Badge>
                  <div className="text-2xl font-bold text-gray-800">
                    {formatPrice(service.price)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
