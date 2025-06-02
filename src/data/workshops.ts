import { WorkshopGroup, AdditionalService } from "@/types/workshop";

export const workshopGroups: WorkshopGroup[] = [
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
        name: "Изделия из полимерной глины",
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

export const additionalServices: AdditionalService[] = [
  { name: "Мини пузыри", duration: "30 мин", price: 3000, icon: "Circle" },
  { name: "Аквагрим", duration: "30 мин", price: 3500, icon: "Paintbrush" },
];
