import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import seafoodImage from "@/assets/seafood-platter.jpg";

const Seafood = () => {
  const { toast } = useToast();

  const menuItems = [
    {
      id: 1,
      name: "Udang Bakar Mentega",
      description: "Udang segar berukuran jumbo dipanggang dengan bumbu mentega dan bawang putih. Tekstur udang yang kenyal dengan aroma harum mentega.",
      price: "Rp 95.000",
      rating: 4.9,
      cookTime: "15 menit",
      servings: "2-3 orang",
      image: seafoodImage
    },
    {
      id: 2,
      name: "Cumi Bakar Saus Pedas",
      description: "Cumi-cumi segar bakar dengan saus pedas manis yang menggugah selera. Tekstur cumi yang empuk berpadu dengan saus yang kaya rasa.",
      price: "Rp 75.000",
      rating: 4.8,
      cookTime: "12 menit",
      servings: "2 orang",
      image: seafoodImage
    },
    {
      id: 3,
      name: "Kepiting Saus Padang",
      description: "Kepiting mud segar dengan saus padang yang pedas gurih. Bumbu meresap sempurna dengan cita rasa Minang yang autentik.",
      price: "Rp 125.000",
      rating: 4.7,
      cookTime: "20 menit",
      servings: "2-3 orang",
      image: seafoodImage
    },
    {
      id: 4,
      name: "Lobster Bakar Keju",
      description: "Lobster segar bakar dengan topping keju mozzarella yang meleleh. Kemewahan rasa laut berpadu dengan kelezatan keju.",
      price: "Rp 185.000",
      rating: 4.9,
      cookTime: "18 menit",
      servings: "1-2 orang",
      image: seafoodImage
    },
    {
      id: 5,
      name: "Kerang Hijau Saus Tiram",
      description: "Kerang hijau segar dengan saus tiram yang gurih. Cita rasa laut yang segar berpadu dengan bumbu Asia yang nikmat.",
      price: "Rp 45.000",
      rating: 4.6,
      cookTime: "10 menit",
      servings: "2-3 orang",
      image: seafoodImage
    },
    {
      id: 6,
      name: "Paket Seafood Bakar",
      description: "Kombinasi udang, cumi, dan ikan bakar dengan pilihan saus. Cocok untuk berbagi bersama keluarga atau teman.",
      price: "Rp 150.000",
      rating: 4.8,
      cookTime: "25 menit",
      servings: "3-4 orang",
      image: seafoodImage
    }
  ];

  const handleOrder = (itemName: string) => {
    toast({
      title: "Pesanan Ditambahkan",
      description: `${itemName} telah ditambahkan ke pesanan Anda`,
    });
  };

  const handlePhoneOrder = () => {
    window.open('tel:+6281234567890', '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Seafood Segar
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Nikmati kelezatan seafood segar langsung dari laut dengan bumbu pilihan
            </p>
            <Button 
              onClick={handlePhoneOrder}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Pesan via Telepon
            </Button>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-card hover:shadow-warm transition-smooth group">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {item.price}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.name}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                    
                    {/* Rating and Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warmth text-warmth" />
                        <span className="font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{item.cookTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{item.servings}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleOrder(item.name)}
                        variant="primary" 
                        className="flex-1 hover:scale-105 transition-bounce"
                      >
                        Pesan Sekarang
                      </Button>
                      <Button 
                        onClick={handlePhoneOrder}
                        variant="outline" 
                        size="icon"
                        className="hover:scale-105 transition-bounce"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Seafood;