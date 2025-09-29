import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import minumanImage from "@/assets/minuman.jpg";

const Minuman = () => {
  const { toast } = useToast();

  const menuItems = [
    {
      id: 1,
      name: "Es Teh Manis",
      description: "Teh manis segar yang diseduh dengan sempurna. Minuman klasik Indonesia yang menyegarkan dan cocok untuk segala cuaca.",
      price: "Rp 8.000",
      rating: 4.8,
      cookTime: "3 menit",
      servings: "1 orang",
      image: minumanImage
    },
    {
      id: 2,
      name: "Es Jeruk Nipis",
      description: "Jeruk nipis segar dengan air dingin dan gula aren. Rasanya yang asam segar sangat cocok untuk menghilangkan dahaga.",
      price: "Rp 12.000",
      rating: 4.7,
      cookTime: "2 menit",
      servings: "1 orang",
      image: minumanImage
    },
    {
      id: 3,
      name: "Kelapa Muda",
      description: "Air kelapa muda segar langsung dari pohon. Minuman alami yang menyehatkan dan menyegarkan tubuh.",
      price: "Rp 15.000",
      rating: 4.9,
      cookTime: "1 menit",
      servings: "1 orang",
      image: minumanImage
    },
    {
      id: 4,
      name: "Jus Alpukat",
      description: "Jus alpukat creamy dengan susu kental manis dan es serut. Minuman bergizi tinggi dengan rasa yang lezat.",
      price: "Rp 18.000",
      rating: 4.8,
      cookTime: "5 menit",
      servings: "1 orang",
      image: minumanImage
    },
    {
      id: 5,
      name: "Es Campur",
      description: "Minuman es campur dengan berbagai topping seperti kolang-kaling, cincau, dan buah-buahan segar dalam sirup manis.",
      price: "Rp 20.000",
      rating: 4.6,
      cookTime: "7 menit",
      servings: "1 orang",
      image: minumanImage
    },
    {
      id: 6,
      name: "Jus Mangga",
      description: "Jus mangga harum manis dari buah mangga pilihan. Segar dan manis alami tanpa pemanis buatan.",
      price: "Rp 16.000",
      rating: 4.7,
      cookTime: "4 menit",
      servings: "1 orang",
      image: minumanImage
    },
    {
      id: 7,
      name: "Es Cendol",
      description: "Minuman tradisional dengan cendol hijau, santan, dan gula merah. Perpaduan rasa manis dan gurih yang autentik.",
      price: "Rp 14.000",
      rating: 4.8,
      cookTime: "6 menit",
      servings: "1 orang",
      image: minumanImage
    },
    {
      id: 8,
      name: "Wedang Jahe",
      description: "Minuman jahe hangat dengan gula aren dan rempah tradisional. Cocok untuk menghangatkan tubuh dan menjaga kesehatan.",
      price: "Rp 10.000",
      rating: 4.5,
      cookTime: "8 menit",
      servings: "1 orang",
      image: minumanImage
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
              Minuman Segar
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Berbagai pilihan minuman segar dan tradisional untuk menemani hidangan Anda
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {menuItems.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-card hover:shadow-warm transition-smooth group">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {item.price}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{item.name}</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{item.description}</p>
                    
                    {/* Rating and Info */}
                    <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-warmth text-warmth" />
                        <span className="font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.cookTime}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleOrder(item.name)}
                        variant="primary" 
                        size="sm"
                        className="flex-1 hover:scale-105 transition-bounce"
                      >
                        Pesan
                      </Button>
                      <Button 
                        onClick={handlePhoneOrder}
                        variant="outline" 
                        size="sm"
                        className="hover:scale-105 transition-bounce px-2"
                      >
                        <Phone className="h-3 w-3" />
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

export default Minuman;