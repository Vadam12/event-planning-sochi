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
        { name: "Творческий МК - волшебные палочки", price: 6000 },
        { name: "Игрушка-карандаш", price: 6500 },
      ],
    },
    {
      title: "До 15 человек",
      subtitle: "40-75 минут",
      color: "from-blue-400 to-cyan-500",
      icon: "Palette",
      workshops: [
        { name: "Волшебный браслет - бусины", price: 7000 },
        { name: "Зефирки/кексики", price: 7500 },
        { name: "Свечи ручной работы", price: 7500 },
        { name: "Фоамиран украшения", price: 7500 },
        { name: "Слайм", price: 7500 },
        { name: "Роспись масок", price: 7500 },
        { name: "Брелки", price: 7500 },
        { name: "Деревянные фигурки роспись", price: 7500 },
        { name: "Картины из песка", price: 7500 },
        { name: "Правополушарное рисование", price: 7500 },
        { name: "Полимерная глина", price: 7500 },
        { name: "Мыловарение", price: 7500 },
        { name: "Ловцы снов", price: 7500 },
      ],
    },
    {
      title: "До 10 человек",
      subtitle: "40-75 минут",
      color: "from-purple-400 to-pink-500",
      icon: "Star",
      workshops: [
        { name: "Роспись шкатулок", price: 8500 },
        { name: "Браслет выживания", price: 8500 },
        { name: "Роспись домиков", price: 8500 },
        { name: "Фонарики желаний", price: 8500 },
        { name: "МК научные эксперименты", price: 8500 },
        { name: "Шоколадные фигурки", price: 9000 },
        { name: "Термомозайка", price: 9000 },
        { name: "Леденца на палочке", price: 9000 },
        { name: "Ложки деревянные", price: 9000 },
        { name: "Бейсболки", price: 9500 },
        { name: "Футболки", price: 9500 },
        { name: "Скворечники", price: 9500 },
        { name: "МК мороженое азот", price: 9500 },
        { name: "Шоперы", price: 10000 },
        { name: "Эпоксидная смола", price: 10000 },
        { name: "Пряники (3 шт)", price: 10000 },
        { name: "3D ручка", price: 10000 },
        { name: "Пузыри с погружением", price: 10000 },
        { name: "Роспись витраж. красками", price: 11000 },
        { name: "Бомбочки для ванн", price: 11000 },
        { name: "Космос в бутылке", price: 11000 },
        { name: "Фрисби", price: 11000 },
        { name: "МК упаковка подарков", price: 11500 },
        { name: "Кожаные браслеты", price: 12000 },
        { name: "Овершейк", price: 12000 },
        { name: "Кашпо живые цветы/мох", price: 12000 },
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
