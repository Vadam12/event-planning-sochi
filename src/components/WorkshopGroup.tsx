import Icon from "@/components/ui/icon";
import { WorkshopGroup as WorkshopGroupType } from "@/types/workshop";
import WorkshopCard from "./WorkshopCard";

interface WorkshopGroupProps {
  group: WorkshopGroupType;
}

const WorkshopGroup = ({ group }: WorkshopGroupProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${group.color} flex items-center justify-center`}
          >
            <Icon name={group.icon as any} size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{group.title}</h3>
        </div>
        <p className="text-gray-600">{group.subtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {group.workshops.map((workshop, index) => (
          <WorkshopCard
            key={index}
            workshop={workshop}
            groupColor={group.color}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopGroup;
