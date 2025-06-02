import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Users",
      title: "Детские аниматоры",
      description:
        "Профессиональные аниматоры в ярких костюмах любимых персонажей",
      features: ["Клоуны", "Принцессы", "Супергерои", "Пираты"],
      color: "from-pink-400 to-purple-500",
    },
    {
      icon: "Sparkles",
      title: "Тематические вечеринки",
      description: "Организуем праздники в любой тематике по желанию ребенка",
      features: ["День рождения", "Новый год", "8 марта", "Выпускной"],
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "Gamepad2",
      title: "Игры и конкурсы",
      description: "Увлекательные активности для детей разного возраста",
      features: ["Квесты", "Эстафеты", "Творчество", "Танцы"],
      color: "from-green-400 to-blue-500",
    },
    {
      icon: "Camera",
      title: "Фото и видео",
      description: "Профессиональная съемка для сохранения ярких моментов",
      features: ["Фотосессия", "Видеоролик", "Слайд-шоу", "Дрон съемка"],
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Наши услуги 🎭
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр развлечений для незабываемого детского праздника в
            отелях Сочи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
