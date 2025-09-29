import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import heroImage from "@/assets/hero-grilled-fish.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Grilled Fish at Bale Bebakaran" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warmth text-warmth" />
              ))}
            </div>
            <span className="text-sm font-medium">Dipercaya #SobatBale</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Cita Rasa{" "}
            <span className="text-warmth">Ikan Bakar</span>{" "}
            Terbaik
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nikmati kelezatan ikan bakar khas Indonesia dengan bumbu rahasia yang telah turun temurun. 
            Daging ikan yang lembut dengan cita rasa yang tak terlupakan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-lg shadow-glow hover:scale-105 transition-bounce"
            >
              Lihat Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-bounce"
            >
              Cari Outlet
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-white/60" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};