import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sophie Müller",
    location: "Berlin, Deutschland",
    avatar: "SM",
    rating: 5,
    text: "Die Reise nach Bali war absolut traumhaft! Das Team von Wanderlust hat jeden einzelnen Tag perfekt geplant. Von den Reisterrassen bis zu den Tempeln – alles war einfach magisch.",
    destination: "Bali, Indonesien",
  },
  {
    id: 2,
    name: "Thomas Weber",
    location: "Wien, Österreich",
    avatar: "TW",
    rating: 5,
    text: "Die Amalfiküste hat alle unsere Erwartungen übertroffen. Die Unterkünfte waren erstklassig und die lokalen Erlebnisse unvergesslich. Wir kommen definitiv wieder!",
    destination: "Amalfiküste, Italien",
  },
  {
    id: 3,
    name: "Maria Schmidt",
    location: "Zürich, Schweiz",
    avatar: "MS",
    rating: 5,
    text: "Japan im Herbst zu erleben war ein Lebenstraum. Die Kirschblüten in Kyoto, das traditionelle Essen – jeder Moment war besonders. Danke für diese unvergessliche Reise!",
    destination: "Kyoto, Japan",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
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
            Kundenstimmen
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Was unsere Reisenden sagen
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 h-16 w-16 text-accent/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-sunset-gold fill-sunset-gold" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl text-foreground font-display leading-relaxed mb-8">
                "{testimonials[activeIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-ocean flex items-center justify-center text-background font-bold">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].location}
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm font-medium text-accent">
                    {testimonials[activeIndex].destination}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-accent w-8"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
