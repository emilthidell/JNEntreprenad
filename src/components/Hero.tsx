import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stonework.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
          JN Markentreprenad AB
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Med passion för hantverksskicklighet och öga för detaljer skapar vi hållbara lösningar 
          för ditt hem eller företag
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            variant="hero"
            className="text-lg px-8 py-6 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Kontakt
          </Button>
          <Button 
            size="lg" 
            variant="hero-outline"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6 rounded-lg font-semibold transition-all"
          >
            Våra Tjänster
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
