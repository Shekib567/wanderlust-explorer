import { motion } from "framer-motion";
import { Award, Heart, Globe, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Reisen ist unsere Leidenschaft. Wir lieben es, unvergessliche Erlebnisse zu schaffen.",
  },
  {
    icon: Globe,
    title: "Nachhaltigkeit",
    description: "Wir setzen uns für verantwortungsvollen Tourismus und den Schutz unserer Umwelt ein.",
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Höchste Standards bei der Auswahl unserer Partner und Unterkünfte.",
  },
  {
    icon: Users,
    title: "Persönlich",
    description: "Individuelle Betreuung und maßgeschneiderte Reiseerlebnisse für jeden Gast.",
  },
];

const team = [
  { name: "Anna Schmidt", role: "Gründerin & CEO", initials: "AS" },
  { name: "Michael Weber", role: "Reiseexperte Europa", initials: "MW" },
  { name: "Lisa Chen", role: "Spezialistin Asien", initials: "LC" },
  { name: "Thomas Müller", role: "Kundenbetreuung", initials: "TM" },
];

const About = () => {
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
              Über Wanderlust
            </h1>
            <p className="text-xl text-muted-foreground">
              Seit 2015 gestalten wir unvergessliche Reiseerlebnisse 
              und bringen Menschen zu den schönsten Orten der Welt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold">Unsere Geschichte</span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-6">
                Von der Leidenschaft zum Beruf
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Wanderlust wurde aus der Überzeugung gegründet, dass Reisen mehr ist als 
                  nur Urlaub – es ist eine Lebensart. Was als kleines Reisebüro begann, 
                  hat sich zu einem der führenden Anbieter für maßgeschneiderte Reiseerlebnisse 
                  entwickelt.
                </p>
                <p>
                  Unser Team aus erfahrenen Reiseexperten hat gemeinsam über 100 Länder 
                  bereist und teilt diese Erfahrungen leidenschaftlich mit unseren Gästen. 
                  Wir glauben daran, dass jede Reise einzigartig sein sollte – genau wie 
                  die Menschen, die sie unternehmen.
                </p>
                <p>
                  Mit Wanderlust erlebst du nicht nur Destinationen, sondern schaffst 
                  Erinnerungen, die ein Leben lang halten.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-ocean opacity-20" />
              <div className="absolute inset-8 rounded-xl bg-gradient-sunset opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-7xl font-bold text-foreground">10</div>
                  <div className="text-muted-foreground text-lg">Jahre Erfahrung</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-foreground">
              Unsere Werte
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-ocean mx-auto flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-background" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Unser Team
            </h2>
            <p className="text-muted-foreground">
              Lerne die Menschen kennen, die deine Traumreise möglich machen.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-sunset mx-auto flex items-center justify-center mb-4 text-background font-bold text-2xl">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
