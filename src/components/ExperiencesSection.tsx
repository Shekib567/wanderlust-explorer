import { motion } from "framer-motion";
import { Compass, Mountain, Palette, UtensilsCrossed, Camera, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    icon: Mountain,
    title: "Abenteuer & Natur",
    description: "Wanderungen, Safaris und atemberaubende Naturerlebnisse",
    color: "from-ocean-deep to-ocean-light",
  },
  {
    icon: Palette,
    title: "Kultur & Geschichte",
    description: "Tauche ein in die faszinierenden Kulturen der Welt",
    color: "from-sunset-coral to-sunset-gold",
  },
  {
    icon: UtensilsCrossed,
    title: "Kulinarische Reisen",
    description: "Entdecke die authentischen Aromen lokaler Küchen",
    color: "from-ocean-light to-primary",
  },
  {
    icon: Waves,
    title: "Strand & Entspannung",
    description: "Paradiesische Strände und luxuriöse Wellness-Oasen",
    color: "from-primary to-ocean-deep",
  },
  {
    icon: Camera,
    title: "Fotoreisen",
    description: "Die schönsten Fotomotive an magischen Orten einfangen",
    color: "from-sunset-gold to-sunset-coral",
  },
  {
    icon: Compass,
    title: "Rundreisen",
    description: "Umfassende Touren durch ganze Länder und Regionen",
    color: "from-ocean-deep to-sunset-coral",
  },
];

const ExperiencesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Erlebnisse
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Finde dein perfektes Abenteuer
          </h2>
          <p className="text-muted-foreground text-lg">
            Ob Abenteuer, Entspannung oder kulturelle Entdeckungen – 
            wir gestalten deine Reise nach deinen Wünschen.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/experiences">
                <div className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center mb-6`}>
                    <experience.icon className="h-7 w-7 text-background" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-8 right-8 text-primary"
                  >
                    <span className="text-sm font-medium">Mehr erfahren →</span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
