import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-yellow-300 to-blue-400 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-80"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Незабываемые
            <span className="text-yellow-200"> праздники</span>
            <br />
            для детей в Сочи! 🎈
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Организуем яркие детские события в лучших отелях курорта. Аниматоры,
            игры, шоу-программы — всё для счастья ваших малышей!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 transition-all"
            >
              <Icon name="Calendar" className="mr-2" />
              Заказать праздник
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-4 text-lg rounded-full"
            >
              <Icon name="Play" className="mr-2" />
              Смотреть видео
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Счастливых детей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-90">Отелей-партнеров</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm opacity-90">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">Довольных родителей</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
