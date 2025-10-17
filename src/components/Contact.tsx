import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tack för ditt meddelande!",
      description: "Vi återkommer inom 24 timmar.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+46 70 123 45 67",
      href: "tel:+46701234567"
    },
    {
      icon: Mail,
      title: "E-post",
      value: "info@jn-entreprenad.se",
      href: "mailto:info@jn-entreprenad.se"
    },
    {
      icon: MapPin,
      title: "Plats",
      value: "Sverige",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontakta Oss
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berätta om ditt projekt så hjälper vi dig att förverkliga din vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Namn
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    E-post
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                    placeholder="din@epost.se"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="+46 70 123 45 67"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Meddelande
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full min-h-32"
                    placeholder="Beskriv ditt projekt..."
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero"
                  className="w-full text-lg py-6 font-semibold"
                >
                  Skicka Meddelande
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.href !== "#" ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="bg-muted/50 p-8 rounded-xl border-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Arbetstider
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Måndag - Fredag: 07:00 - 17:00</p>
                <p>Lördag: 08:00 - 14:00</p>
                <p>Söndag: Stängt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
