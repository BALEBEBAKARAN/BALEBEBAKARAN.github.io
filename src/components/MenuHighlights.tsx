import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users } from "lucide-react";
import seafoodImage from "@/assets/seafood-collection.jpg";

export const MenuHighlights = () => {
  const menuItems = [
    {
      id: 1,
      name: "Gurame Bakar Kecap",
      description: "Ikan gurame segar dipanggang dengan bumbu kecap manis khas yang memadukan cita rasa manis dan gurih",
      price: "Rp 85.000",
      rating: 4.8,
      cookTime: "25 menit",
      servings: "2-3 orang",
      isPopular: true,
      image: seafoodImage
    },
    {
      id: 2,
      name: "Ayam Bakar Kecap",
      description: "Ayam kampung pilihan dengan bumbu kecap tradisional, tekstur daging yang empuk dan bumbu meresap sempurna",
      price: "Rp 45.000",
      rating: 4.9,
      cookTime: "20 menit",
      servings: "1-2 orang",
      isPopular: true,
      image: seafoodImage
    },
    {
      id: 3,
      name: "Ingkung Areh",
      description: "Ayam utuh dengan bumbu areh khas Sumatera, perpaduan santan dan rempah yang kaya cita rasa",
      price: "Rp 95.000",
      rating: 4.7,
      cookTime: "35 menit",
      servings: "3-4 orang",
      isPopular: false,
      image: seafoodImage
    },
    {
      id: 4,
      name: "Steamboat Seafood",
      description: "Hidangan steamboat dengan seafood segar pilihan, kuah kaldu yang kaya dan sayuran organik",
      price: "Rp 150.000",
      rating: 4.6,
      cookTime: "15 menit",
      servings: "2-4 orang",
      isPopular: false,
      image: seafoodImage
    }
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Menu Pilihan
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Apa Kata <span className="text-primary">#SobatBale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Menu favorit yang paling digemari pelanggan setia kami. Setiap hidangan dibuat dengan resep tradisional dan bahan-bahan segar pilihan.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-card hover:shadow-warm transition-smooth group">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                {item.isPopular && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Favorit
                  </div>
                )}
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

                <Button 
                  variant="primary" 
                  className="w-full hover:scale-105 transition-bounce"
                >
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Menu Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 hover:scale-105 transition-bounce"
          >
            Lihat Semua Menu
          </Button>
        </div>
      </div>
    </section>
  );
};