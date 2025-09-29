import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ikanBakarImage from "@/assets/ikan-bakar.jpg";

const IkanBakar = () => {
  const { toast } = useToast();

  const menuItems = [
    {
      id: 1,
      name: "Gurame Bakar Kecap",
      description: "Ikan gurame segar dipanggang dengan bumbu kecap manis khas yang memadukan cita rasa manis dan gurih. Disajikan dengan nasi hangat dan lalapan segar.",
      price: "Rp 85.000",
      rating: 4.8,
      cookTime: "25 menit",
      servings: "2-3 orang",
      image: ikanBakarImage
    },
    {
      id: 2,
      name: "Nila Bakar Bumbu Rica",
      description: "Ikan nila bakar dengan bumbu rica-rica pedas yang menggugah selera. Bumbu meresap sempurna dengan cita rasa pedas gurih yang khas.",
      price: "Rp 65.000",
      rating: 4.7,
      cookTime: "20 menit",
      servings: "2 orang",
      image: ikanBakarImage
    },
    {
      id: 3,
      name: "Bandeng Bakar Sambal Matah",
      description: "Bandeng segar bakar dengan sambal matah Bali yang segar dan pedas. Perpaduan rasa ikan laut dengan sambal khas yang menggoda.",
      price: "Rp 75.000",
      rating: 4.9,
      cookTime: "30 menit",
      servings: "2-3 orang",
      image: ikanBakarImage
    },
    {
      id: 4,
      name: "Mujair Bakar Bumbu Kuning",
      description: "Ikan mujair dengan bumbu kuning tradisional yang kaya rempah. Tekstur daging yang lembut dengan bumbu yang meresap hingga ke dalam.",
      price: "Rp 55.000",
      rating: 4.6,
      cookTime: "25 menit",
      servings: "1-2 orang",
      image: ikanBakarImage
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
              Ikan Bakar Spesial
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Nikmati kelezatan ikan bakar pilihan dengan bumbu tradisional yang kaya cita rasa
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

export default IkanBakar;