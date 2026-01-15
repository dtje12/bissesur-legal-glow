import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Advocatuur met persoonlijke aandacht
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-accent font-serif mb-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {siteConfig.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 text-base"
            >
              Gratis Kennismakingsgesprek
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.contact.phoneLink}
              className="btn-outline-light inline-flex items-center justify-center gap-2 text-base"
            >
              <Phone className="w-4 h-4" />
              Bel Direct: {siteConfig.contact.phone}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-serif font-bold text-accent">15+</p>
                <p className="text-sm text-primary-foreground/70">Jaar Ervaring</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-accent">500+</p>
                <p className="text-sm text-primary-foreground/70">Zaken Behandeld</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-accent">98%</p>
                <p className="text-sm text-primary-foreground/70">Tevreden Cliënten</p>
              </div>
            </div>
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
