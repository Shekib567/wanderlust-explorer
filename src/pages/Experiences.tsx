import { motion } from "framer-motion";
import { Compass, Mountain, Palette, UtensilsCrossed, Camera, Waves, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const experiences = [
  {
    icon: Mountain,
    title: "Abenteuer & Natur",
    description: "Erlebe die wildesten Landschaften und aufregendsten Outdoor-Aktivitäten. Von Wanderungen durch unberührte Wälder bis zu Safari-Abenteuern in der Savanne.",
    features: ["Geführte Wanderungen", "Wildlife Safaris", "Bergsteigen", "Kajak & Rafting"],
    color: "from-ocean-deep to-ocean-light",
  },
  {
    icon: Palette,
    title: "Kultur & Geschichte",
    description: "Tauche ein in die faszinierenden Kulturen der Welt. Besuche UNESCO-Welterbestätten und erlebe authentische lokale Traditionen.",
    features: ["Historische Touren", "Lokale Workshops", "Museumsbesuche", "Kulturelle Feste"],
    color: "from-sunset-coral to-sunset-gold",
  },
  {
    icon: UtensilsCrossed,
    title: "Kulinarische Reisen",
    description: "Entdecke die authentischen Aromen lokaler Küchen. Von Street Food bis zu Michelin-Restaurants – erlebe Gastronomie auf höchstem Niveau.",
    features: ["Kochkurse", "Food Touren", "Weinproben", "Farm-to-Table"],
    color: "from-ocean-light to-primary",
  },
  {
    icon: Waves,
    title: "Strand & Entspannung",
    description: "Paradiesische Strände und luxuriöse Wellness-Oasen erwarten dich. Entspanne an den schönsten Küsten der Welt.",
    features: ["Beach Resorts", "Spa & Wellness", "Yoga Retreats", "Schnorcheln"],
    color: "from-primary to-ocean-deep",
  },
  {
    icon: Camera,
    title: "Fotoreisen",
    description: "Fange die schönsten Momente an magischen Orten ein. Professionelle Fotografen begleiten dich zu den besten Spots.",
    features: ["Foto-Workshops", "Golden Hour Touren", "Drohnenfotografie", "Nachthimmel"],
    color: "from-sunset-gold to-sunset-coral",
  },
  {
    icon: Compass,
    title: "Rundreisen",
    description: "Umfassende Touren durch ganze Länder und Regionen. Erlebe die Vielfalt einer Destination in einer einzigen Reise.",
    features: ["All-inclusive", "Erfahrene Guides", "Flexible Routen", "Kleine Gruppen"],
    color: "from-ocean-deep to-sunset-coral",
  },
];

const Experiences = () => {
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
              Einzigartige Erlebnisse
            </h1>
            <p className="text-xl text-muted-foreground">
              Ob Abenteuer, Entspannung oder kulturelle Entdeckungen – 
              wir gestalten deine Reise nach deinen Wünschen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center mb-6`}>
                    <experience.icon className="h-8 w-8 text-background" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {experience.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {experience.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {experience.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-accent" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button variant="accent" size="lg">
                      Jetzt Anfragen
                    </Button>
                  </Link>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${experience.color} opacity-20`} />
                  <div className={`absolute inset-4 rounded-xl bg-gradient-to-br ${experience.color} opacity-40`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Experiences;
