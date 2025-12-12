import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Erfolgreich angemeldet!",
        description: "Du erhältst bald unsere besten Reiseangebote.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-ocean" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
            Verpasse keine Reiseangebote
          </h2>
          <p className="text-background/80 text-lg mb-8">
            Abonniere unseren Newsletter und erhalte exklusive Deals, 
            Reisetipps und Inspiration direkt in dein Postfach.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Deine E-Mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/10 border-background/30 text-background placeholder:text-background/50 h-12"
              required
            />
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="shrink-0"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <Check className="h-4 w-4" />
                  Angemeldet
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Anmelden
                </>
              )}
            </Button>
          </form>

          <p className="text-background/60 text-sm mt-4">
            Keine Sorge, wir respektieren deine Privatsphäre. Jederzeit abmeldbar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
