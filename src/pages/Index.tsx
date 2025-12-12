import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationsSection from "@/components/DestinationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DestinationsSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
