import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import amalfiImage from "@/assets/destination-amalfi.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import swissImage from "@/assets/destination-swiss.jpg";
import kyotoImage from "@/assets/destination-kyoto.jpg";
import heroImage from "@/assets/hero-santorini.jpg";

const allDestinations = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Griechenland",
    image: heroImage,
    rating: 4.9,
    price: "1.199€",
    description: "Weißgetünchte Häuser und atemberaubende Sonnenuntergänge über dem Meer.",
    region: "Europa",
  },
  {
    id: "amalfi",
    name: "Amalfiküste",
    country: "Italien",
    image: amalfiImage,
    rating: 4.9,
    price: "1.299€",
    description: "Malerische Küstendörfer mit farbenfrohen Häusern und mediterranem Flair.",
    region: "Europa",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesien",
    image: baliImage,
    rating: 4.8,
    price: "1.899€",
    description: "Tropisches Paradies mit Reisterrassen, Tempeln und traumhaften Stränden.",
    region: "Asien",
  },
  {
    id: "swiss-alps",
    name: "Schweizer Alpen",
    country: "Schweiz",
    image: swissImage,
    rating: 4.9,
    price: "1.499€",
    description: "Majestätische Berglandschaften und charmante Alpendörfer.",
    region: "Europa",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    image: kyotoImage,
    rating: 4.7,
    price: "2.199€",
    description: "Traditionelle Tempel, Zen-Gärten und japanische Kultur.",
    region: "Asien",
  },
];

const Destinations = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Unsere Reiseziele
            </h1>
            <p className="text-xl text-muted-foreground">
              Entdecke handverlesene Destinationen auf der ganzen Welt. 
              Jedes Ziel verspricht unvergessliche Erlebnisse und magische Momente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/destination/${destination.id}`}>
                  <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                        ab {destination.price}
                      </div>
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-foreground text-sm">
                        {destination.region}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <MapPin className="h-4 w-4" />
                        {destination.country}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {destination.description}
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-sunset-gold fill-sunset-gold" />
                        <span className="font-medium">{destination.rating}</span>
                        <span className="text-muted-foreground text-sm ml-1">
                          (128 Bewertungen)
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Destinations;
