import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const FeaturedProperties = () => {
  const featuredProperties = [
    {
      id: "1",
      title: "Modern Downtown Apartment",
      price: 750000,
      location: "Manhattan, New York",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: property1,
      type: "Apartment",
      featured: true,
    },
    {
      id: "2",
      title: "Luxury Villa with Pool",
      price: 2500000,
      location: "Beverly Hills, California",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      image: property2,
      type: "Villa",
      featured: true,
    },
    {
      id: "3",
      title: "Urban Condo Living",
      price: 450000,
      location: "Downtown Chicago",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 800,
      image: property3,
      type: "Condo",
      featured: true,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most
            desirable locations.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <PropertyCard {...property} />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/browse">
            <Button variant="hero" size="lg">
              View All Properties
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
