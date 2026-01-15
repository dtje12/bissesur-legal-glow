import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight mb-6 animate-fade-in">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-accent font-serif mb-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {siteConfig.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Link
              to="/rechtsgebieden"
              className="btn-gold inline-flex items-center justify-center gap-2 text-base"
            >
              Onze Specialisaties
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.contact.phoneLink}
              className="inline-flex items-center justify-center gap-2 text-base border-2 border-primary text-primary font-medium px-6 py-3 rounded transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="w-4 h-4" />
              Bel: {siteConfig.contact.phone}
            </a>
          </div>

          {/* Decorative line */}
          <div className="mt-16 w-24 h-1 bg-accent animate-fade-in-up" style={{ animationDelay: "400ms" }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
