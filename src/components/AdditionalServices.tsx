import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { AdditionalService } from "@/types/workshop";
import { formatPrice } from "@/utils/formatters";

interface AdditionalServicesProps {
  services: AdditionalService[];
}

const AdditionalServices = ({ services }: AdditionalServicesProps) => {
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Icon name="Sparkles" size={24} className="text-yellow-500" />
          Дополнительные услуги
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 max-w-2xl mx-auto gap-6">
        {services.map((service, index) => (
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
  );
};

export default AdditionalServices;
