import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-santorini.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const stats = [
    { icon: MapPin, value: "150+", label: "Reiseziele" },
    { icon: Users, value: "50K+", label: "Zufriedene Gäste" },
    { icon: Star, value: "4.9", label: "Bewertung" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Santorini bei Sonnenuntergang"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 lg:px-8 min-h-screen flex flex-col justify-center pt-20"
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-background mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sunset-coral animate-pulse" />
            <span className="text-sm font-medium">Die besten Reiseerlebnisse 2024</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-background font-bold leading-tight mb-6"
          >
            Entdecke die
            <br />
            <span className="italic">Wunder der Welt</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-background/90 max-w-2xl mb-8"
          >
            Erlebe unvergessliche Abenteuer an den schönsten Orten der Welt. 
            Von malerischen Küstenstädten bis zu atemberaubenden Berglandschaften – 
            deine Traumreise beginnt hier.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/destinations">
              <Button variant="hero" size="xl">
                Reiseziele Entdecken
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Beratung Anfragen
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-12 left-4 right-4 lg:left-8 lg:right-8"
        >
          <div className="glass-dark rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-sunset-coral" />
                  <div className="text-2xl md:text-4xl font-bold text-background">{stat.value}</div>
                  <div className="text-sm text-background/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-background/60"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
