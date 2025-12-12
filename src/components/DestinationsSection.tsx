import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import amalfiImage from "@/assets/destination-amalfi.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import swissImage from "@/assets/destination-swiss.jpg";
import kyotoImage from "@/assets/destination-kyoto.jpg";

const destinations = [
  {
    id: "amalfi",
    name: "Amalfiküste",
    country: "Italien",
    image: amalfiImage,
    rating: 4.9,
    price: "1.299€",
    featured: true,
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesien",
    image: baliImage,
    rating: 4.8,
    price: "1.899€",
  },
  {
    id: "swiss-alps",
    name: "Schweizer Alpen",
    country: "Schweiz",
    image: swissImage,
    rating: 4.9,
    price: "1.499€",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    image: kyotoImage,
    rating: 4.7,
    price: "2.199€",
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Beliebte Ziele
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Traumhafte Reiseziele
          </h2>
          <p className="text-muted-foreground text-lg">
            Entdecke handverlesene Destinationen, die Reisende aus aller Welt begeistern. 
            Jedes Ziel verspricht unvergessliche Momente und einzigartige Erlebnisse.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              {...destination}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/destinations">
            <Button variant="outline" size="lg">
              Alle Reiseziele Ansehen
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
