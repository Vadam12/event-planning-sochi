import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Index;
