import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const advantages = [
    {
      icon: "MapPin",
      title: "Знаем Сочи как свои пять пальцев",
      description: "Работаем с лучшими отелями курорта более 5 лет",
    },
    {
      icon: "Shield",
      title: "Безопасность превыше всего",
      description:
        "Все аниматоры имеют медицинские книжки и справки о несудимости",
    },
    {
      icon: "Clock",
      title: "Точность во времени",
      description:
        "Всегда приезжаем вовремя, праздник начинается по расписанию",
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Учитываем возраст, интересы и пожелания каждого ребенка",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              О нашем агентстве 🌟
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы — команда профессионалов, которая уже 5 лет создает волшебство
              для детей в отелях Сочи. Наша миссия — сделать каждый детский
              праздник незабываемым приключением.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Работаем с ведущими отелями курорта: Radisson, Hyatt, Marriott,
              Сочи Парк Отель и многими другими. Знаем особенности каждой
              площадки и поможем выбрать идеальное место для праздника.
            </p>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Icon name="Award" className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-800">
                  Лучшее event-агентство Сочи 2023
                </div>
                <div className="text-sm text-gray-600">
                  По версии Ассоциации отельеров
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-400"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={advantage.icon as any}
                        className="text-orange-600"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
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

export default About;
