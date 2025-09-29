import { Button } from "@/components/ui/button";
import { Award, Clock, Users, Utensils } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";

export const About = () => {
  const features = [
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Ikan segar pilihan langsung dari nelayan terpercaya"
    },
    {
      icon: Clock,
      title: "Sejak 1995",
      description: "Pengalaman lebih dari 25 tahun melayani cita rasa terbaik"
    },
    {
      icon: Users,
      title: "10,000+ Pelanggan",
      description: "Dipercaya ribuan keluarga Indonesia"
    },
    {
      icon: Utensils,
      title: "Resep Tradisional",
      description: "Bumbu rahasia turun temurun keluarga"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Tentang Kami
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Warisan Cita Rasa{" "}
              <span className="text-primary">Indonesia</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bale Bebakaran hadir sebagai rumah makan keluarga yang menghadirkan kelezatan ikan bakar 
              dan seafood dengan cita rasa autentik Indonesia. Dimulai dari resep keluarga yang telah 
              diwariskan turun temurun, kami berkomitmen menghadirkan pengalaman kuliner yang tak terlupakan.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Setiap hidangan diolah dengan penuh cinta menggunakan bahan-bahan segar pilihan dan bumbu 
              rempah tradisional yang kaya akan cita rasa. Dari gurame bakar kecap yang menjadi signature 
              dish hingga berbagai olahan seafood segar, semua disajikan dengan standar kualitas terbaik.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="primary" 
              size="lg" 
              className="px-8 py-4 hover:scale-105 transition-bounce shadow-warm"
            >
              Kunjungi Outlet Kami
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img 
                src={restaurantImage} 
                alt="Suasana Restaurant Bale Bebakaran" 
                className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-warm border">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-xs text-muted-foreground">Tahun</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Menu</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground">Pelanggan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};