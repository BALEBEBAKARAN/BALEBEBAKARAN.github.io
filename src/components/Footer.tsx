import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Outlet", href: "#outlets" },
    { label: "Kontak", href: "#contact" }
  ];

  const menuCategories = [
    { label: "Ikan Bakar", href: "#" },
    { label: "Ayam Bakar", href: "#" },
    { label: "Seafood", href: "#" },
    { label: "Steamboat", href: "#" },
    { label: "Minuman", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Bale Bebakaran" className="h-10 w-10" />
              <span className="text-xl font-bold">Bale Bebakaran</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Warisan cita rasa Indonesia dengan ikan bakar dan seafood terbaik. 
              Melayani dengan sepenuh hati sejak 1995.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori Menu</h3>
            <ul className="space-y-2">
              {menuCategories.map((category) => (
                <li key={category.label}>
                  <a
                    href={category.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <p>
                Jl. Raya Bogor No. 123<br />
                Jakarta Selatan, Indonesia
              </p>
              <p>Phone: +62 21 8765 4321</p>
              <p>Email: info@balebebakaran.co.id</p>
              <p className="text-sm">
                Buka setiap hari<br />
                10:00 - 22:00 WIB
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 text-sm">
            <p>© {currentYear} Bale Bebakaran. Hak cipta dilindungi undang-undang.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};