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
      value: "070 123 45 67",
      href: "tel:+46701234567"
    },
    {
      icon: Mail,
      title: "E-post",
      value: "info@jnmarkentreprenad.se",
      href: "mailto:info@jnmarkentreprenad.se"
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
            Kontakta oss och berätta om ditt projekt så hjälper vi dig att förverkliga din vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          
          
          {/* Contact Info */}
          <div className="space-y-12 animate-slide-in-right">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-12 flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <info.icon className="w-12 h-12 text-primary" />
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

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
