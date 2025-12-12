import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Calendar, Clock, Users, Check, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import amalfiImage from "@/assets/destination-amalfi.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import swissImage from "@/assets/destination-swiss.jpg";
import kyotoImage from "@/assets/destination-kyoto.jpg";
import heroImage from "@/assets/hero-santorini.jpg";

const destinationData: Record<string, {
  name: string;
  country: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  longDescription: string;
  highlights: string[];
  duration: string;
  groupSize: string;
  bestTime: string;
}> = {
  santorini: {
    name: "Santorini",
    country: "Griechenland",
    image: heroImage,
    rating: 4.9,
    price: "1.199€",
    description: "Weißgetünchte Häuser und atemberaubende Sonnenuntergänge.",
    longDescription: "Santorini ist ein Traumziel für jeden Reisenden. Die ikonischen weißen Gebäude mit blauen Kuppeln, dramatische Klippen über dem tiefblauen Meer und legendäre Sonnenuntergänge machen diese griechische Insel zu einem unvergesslichen Erlebnis.",
    highlights: ["Sonnenuntergang in Oia", "Vulkanwanderung", "Weinverkostung", "Bootstour zur Caldera", "Traditionelle Dörfer"],
    duration: "7 Tage / 6 Nächte",
    groupSize: "Max. 12 Personen",
    bestTime: "Mai - Oktober",
  },
  amalfi: {
    name: "Amalfiküste",
    country: "Italien",
    image: amalfiImage,
    rating: 4.9,
    price: "1.299€",
    description: "Malerische Küstendörfer mit mediterranem Flair.",
    longDescription: "Die Amalfiküste ist ein UNESCO-Weltkulturerbe und eines der schönsten Küstengebiete der Welt. Farbenfrohe Dörfer klammern sich an steile Klippen, während das kristallklare Mittelmeer darunter glitzert.",
    highlights: ["Positano erkunden", "Ravello Gärten", "Limoncello-Verkostung", "Bootsfahrt nach Capri", "Pfad der Götter wandern"],
    duration: "8 Tage / 7 Nächte",
    groupSize: "Max. 10 Personen",
    bestTime: "April - Oktober",
  },
  bali: {
    name: "Bali",
    country: "Indonesien",
    image: baliImage,
    rating: 4.8,
    price: "1.899€",
    description: "Tropisches Paradies mit Reisterrassen und Tempeln.",
    longDescription: "Bali, die Insel der Götter, bietet eine einzigartige Mischung aus Spiritualität, Natur und Kultur. Von den berühmten Reisterrassen von Tegallalang bis zu den heiligen Tempeln – jeder Moment ist magisch.",
    highlights: ["Tegallalang Reisterrassen", "Uluwatu Tempel", "Ubud Kunsthandwerk", "Wasserfälle entdecken", "Balinesische Kochkurse"],
    duration: "10 Tage / 9 Nächte",
    groupSize: "Max. 14 Personen",
    bestTime: "April - Oktober",
  },
  "swiss-alps": {
    name: "Schweizer Alpen",
    country: "Schweiz",
    image: swissImage,
    rating: 4.9,
    price: "1.499€",
    description: "Majestätische Berglandschaften und Alpendörfer.",
    longDescription: "Die Schweizer Alpen bieten einige der spektakulärsten Landschaften Europas. Schneebedeckte Gipfel, kristallklare Seen und malerische Bergdörfer erwarten dich in diesem alpinen Paradies.",
    highlights: ["Matterhorn bestaunen", "Jungfraujoch besuchen", "Wandern in Grindelwald", "Luzern erkunden", "Schweizer Käse & Schokolade"],
    duration: "7 Tage / 6 Nächte",
    groupSize: "Max. 12 Personen",
    bestTime: "Juni - September",
  },
  kyoto: {
    name: "Kyoto",
    country: "Japan",
    image: kyotoImage,
    rating: 4.7,
    price: "2.199€",
    description: "Traditionelle Tempel und japanische Kultur.",
    longDescription: "Kyoto ist das kulturelle Herz Japans. Mit über 2.000 Tempeln und Schreinen, traditionellen Geisha-Vierteln und wunderschönen Gärten ist diese Stadt ein Muss für jeden Japan-Besucher.",
    highlights: ["Fushimi Inari Schrein", "Arashiyama Bambuswald", "Geisha-Viertel Gion", "Teezeremonie erleben", "Nara Tagesausflug"],
    duration: "9 Tage / 8 Nächte",
    groupSize: "Max. 10 Personen",
    bestTime: "März - Mai, Oktober - November",
  },
};

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = id ? destinationData[id] : null;

  if (!destination) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Reiseziel nicht gefunden
          </h1>
          <Link to="/destinations">
            <Button variant="accent">Zurück zu allen Reisezielen</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/destinations" className="inline-flex items-center gap-2 text-background/80 hover:text-background mb-4 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Zurück zu allen Reisezielen
              </Link>
              <div className="flex items-center gap-2 text-background/80 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{destination.country}</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-background mb-4">
                {destination.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-sunset-gold fill-sunset-gold" />
                  <span className="text-background font-medium">{destination.rating}</span>
                </div>
                <span className="text-background text-2xl font-bold">ab {destination.price}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Über diese Reise
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {destination.longDescription}
                </p>

                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {destination.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <Check className="h-5 w-5 text-accent" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-6 shadow-elevated sticky top-24"
              >
                <div className="text-3xl font-bold text-foreground mb-6">
                  ab {destination.price}
                  <span className="text-sm font-normal text-muted-foreground"> / Person</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Reisedauer</div>
                      <div className="font-medium text-foreground">{destination.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Gruppengröße</div>
                      <div className="font-medium text-foreground">{destination.groupSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Beste Reisezeit</div>
                      <div className="font-medium text-foreground">{destination.bestTime}</div>
                    </div>
                  </div>
                </div>

                <Link to="/contact">
                  <Button variant="accent" size="xl" className="w-full">
                    Jetzt Anfragen
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DestinationDetail;
