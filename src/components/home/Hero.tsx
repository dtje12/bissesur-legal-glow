import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Clean background - no pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in">
            <span className="text-primary-foreground">Advocatenkantoor</span>
            <br />
            <span className="text-accent">Bissessur</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Met jarenlange ervaring en toewijding staan wij voor u klaar. Persoonlijke aandacht en deskundig advies voor al uw juridische vraagstukken.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 text-base"
            >
              Gratis Consult Aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/over-ons"
              className="inline-flex items-center justify-center gap-2 text-base border-2 border-primary-foreground/80 text-primary-foreground font-medium px-6 py-3 rounded transition-all duration-200 hover:bg-primary-foreground/10"
            >
              Meer Over Ons
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
