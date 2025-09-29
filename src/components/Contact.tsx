import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Contact = () => {
  const outlets = [
    {
      name: "Bale Bebakaran Pusat",
      address: "Jl. Raya Bogor No. 123, Jakarta Selatan",
      phone: "+62 21 8765 4321",
      hours: "10:00 - 22:00 WIB",
      isMain: true
    },
    {
      name: "Bale Bebakaran Kelapa Gading",
      address: "Mall Kelapa Gading 3, Lt. 3 No. 45, Jakarta Utara",
      phone: "+62 21 4567 8901",
      hours: "11:00 - 23:00 WIB",
      isMain: false
    },
    {
      name: "Bale Bebakaran Depok",
      address: "Jl. Margonda Raya No. 78, Depok",
      phone: "+62 21 2345 6789",
      hours: "10:00 - 22:00 WIB",
      isMain: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Temukan <span className="text-primary">Outlet</span> Terdekat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kunjungi outlet Bale Bebakaran terdekat dan nikmati pengalaman kuliner yang tak terlupakan bersama keluarga.
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {outlets.map((outlet, index) => (
            <Card key={index} className="relative overflow-hidden shadow-card hover:shadow-warm transition-smooth group">
              {outlet.isMain && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Outlet Utama
                </div>
              )}
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">{outlet.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground text-sm">{outlet.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground text-sm">{outlet.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground text-sm">{outlet.hours}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    className="w-full hover:scale-105 transition-bounce"
                  >
                    Lihat di Maps
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full hover:scale-105 transition-bounce"
                  >
                    Telepon Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-card rounded-2xl p-8 shadow-card text-center">
          <h3 className="text-2xl font-bold mb-4">Punya Pertanyaan?</h3>
          <p className="text-muted-foreground mb-6">
            Tim customer service kami siap membantu Anda 24/7. Hubungi kami melalui berbagai channel di bawah ini.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="px-8 py-4 hover:scale-105 transition-bounce shadow-warm"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Kami
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 hover:scale-105 transition-bounce"
            >
              <Phone className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};