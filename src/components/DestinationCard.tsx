import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  price: string;
  featured?: boolean;
  index?: number;
}

const DestinationCard = ({
  id,
  name,
  country,
  image,
  rating,
  price,
  featured = false,
  index = 0,
}: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden cursor-pointer hover-lift",
        featured ? "col-span-2 row-span-2" : ""
      )}
    >
      <Link to={`/destination/${id}`}>
        {/* Image */}
        <div className={cn("relative", featured ? "h-[500px]" : "h-[350px]")}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-card opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-glow">
          ab {price}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-background/80 mb-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{country}</span>
          </div>
          
          <h3 className={cn(
            "font-display font-bold text-background mb-3",
            featured ? "text-4xl" : "text-2xl"
          )}>
            {name}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-sunset-gold fill-sunset-gold" />
              <span className="text-background font-medium">{rating}</span>
            </div>
            
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-background font-medium"
            >
              <span>Entdecken</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;
