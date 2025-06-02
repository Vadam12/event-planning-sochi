import WorkshopGroup from "./WorkshopGroup";
import AdditionalServices from "./AdditionalServices";
import { workshopGroups, additionalServices } from "@/data/workshops";

const Services = () => {
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

        <div className="space-y-12">
          {workshopGroups.map((group, index) => (
            <WorkshopGroup key={index} group={group} />
          ))}
        </div>

        <AdditionalServices services={additionalServices} />
      </div>
    </section>
  );
};

export default Services;
