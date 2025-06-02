export interface Workshop {
  name: string;
  price: number;
  image: string;
}

export interface WorkshopGroup {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  workshops: Workshop[];
}

export interface AdditionalService {
  name: string;
  duration: string;
  price: number;
  icon: string;
}
