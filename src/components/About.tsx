import { Award, Users, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Kvalitet",
      description: "Högsta standard i varje projekt"
    },
    {
      icon: Users,
      title: "Erfarenhet",
      description: "Mångårig kompetens och kunskap"
    },
    {
      icon: Shield,
      title: "Trygghet",
      description: "Försäkrade och certifierade"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Varför Välja Oss?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vi är ett erfaret företag som specialiserar oss på mark- och stenarbete. 
            Med passion för hantverk och fokus på kvalitet levererar vi lösningar som håller över tid. 
            Vårt team har gedigen erfarenhet av både mindre och större projekt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-card rounded-xl border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
