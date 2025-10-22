import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Mountain } from "lucide-react";
import groundworkImage from "@/assets/groundwork.jpg";
import stoneworkImage from "@/assets/stonework.jpg";

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Markarbete",
      description: "Schaktning, fyllning, dränering och markplanering för säker grund",
      image: groundworkImage,
      features: [
        "Schaktning & grävarbeten",
        "Dräneringslösningar",
        "Markplanering",
        "Grundförstärkning"
      ]
    },
    {
      icon: Mountain,
      title: "Stenarbete",
      description: "Kvalitativ stenläggning och murning för varaktig skönhet",
      image: stoneworkImage,
      features: [
        "Stenläggning & plattsättning",
        "Murar",
        "Trappor & entréer",
        "Trädgårdsdesign"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Våra Tjänster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionella lösningar för alla mark- och stenarbeten
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent p-3 rounded-lg">
                      <service.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 text-lg">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
