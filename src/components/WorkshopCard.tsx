import { Card, CardContent } from "@/components/ui/card";
import { Workshop } from "@/types/workshop";
import { formatPrice } from "@/utils/formatters";

interface WorkshopCardProps {
  workshop: Workshop;
  groupColor: string;
}

const WorkshopCard = ({ workshop, groupColor }: WorkshopCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0">
      <div className={`h-1 bg-gradient-to-r ${groupColor}`}></div>
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
            className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${groupColor} text-white font-bold text-lg`}
          >
            {formatPrice(workshop.price)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkshopCard;
