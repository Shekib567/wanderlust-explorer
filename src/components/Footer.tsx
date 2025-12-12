import { Link } from "react-router-dom";
import { Compass, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    reiseziele: [
      { name: "Europa", path: "/destinations" },
      { name: "Asien", path: "/destinations" },
      { name: "Amerika", path: "/destinations" },
      { name: "Afrika", path: "/destinations" },
    ],
    erlebnisse: [
      { name: "Abenteuer", path: "/experiences" },
      { name: "Kultur", path: "/experiences" },
      { name: "Strand", path: "/experiences" },
      { name: "Rundreisen", path: "/experiences" },
    ],
    unternehmen: [
      { name: "Über Uns", path: "/about" },
      { name: "Kontakt", path: "/contact" },
      { name: "Karriere", path: "/about" },
      { name: "Blog", path: "/" },
    ],
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Compass className="h-8 w-8 text-accent" />
              <span className="font-display text-2xl font-bold">Wanderlust</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Dein Partner für unvergessliche Reiseerlebnisse. Wir gestalten 
              maßgeschneiderte Abenteuer an den schönsten Orten der Welt.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Reiseziele</h4>
            <ul className="space-y-3">
              {footerLinks.reiseziele.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-background/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Erlebnisse</h4>
            <ul className="space-y-3">
              {footerLinks.erlebnisse.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-background/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4" />
                <span>info@wanderlust.de</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span>+49 30 12345678</span>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Reisestraße 42<br />10115 Berlin</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Wanderlust Reisen. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-background/50 hover:text-background transition-colors">
              Datenschutz
            </Link>
            <Link to="/" className="text-background/50 hover:text-background transition-colors">
              AGB
            </Link>
            <Link to="/" className="text-background/50 hover:text-background transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
