import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Свяжитесь с нами! 📞
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Готовы организовать незабываемый праздник для вашего ребенка?
            Обсудим все детали!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 text-center">
                Быстрая заявка
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя родителя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Возраст ребенка
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Выберите возраст</option>
                  <option>3-4 года</option>
                  <option>5-6 лет</option>
                  <option>7-8 лет</option>
                  <option>9-10 лет</option>
                  <option>11+ лет</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Отель
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="В каком отеле планируете праздник?"
                />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-lg rounded-lg">
                <Icon name="Send" className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Телефон</h3>
                    <p className="text-gray-600">+7 (862) 555-12-34</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Работаем ежедневно с 9:00 до 21:00
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon
                      name="MessageCircle"
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">WhatsApp</h3>
                    <p className="text-gray-600">+7 (862) 555-12-34</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Быстрые ответы в мессенджере
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="Instagram" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Instagram</h3>
                    <p className="text-gray-600">@kids_events_sochi</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Фото и видео наших праздников
                </p>
              </CardContent>
            </Card>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">⏰ Время отклика</h3>
              <p className="text-white/90">
                Отвечаем на заявки в течение 30 минут в рабочее время. В
                выходные — до 2 часов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
