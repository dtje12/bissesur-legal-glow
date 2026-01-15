import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { Scale, Gavel, Users, Briefcase, Building, Home, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Gavel,
  Users,
  Briefcase,
  Building,
  Home,
};

const Rechtsgebieden = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Rechtsgebieden
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              Wij bieden juridische bijstand op diverse rechtsgebieden. 
              Hieronder vindt u een overzicht van onze specialisaties.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-8">
            {siteConfig.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Scale;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}>
                    {/* Icon/Visual Side */}
                    <div className={`lg:col-span-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="aspect-square max-w-xs mx-auto bg-secondary rounded-lg flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`lg:col-span-8 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="gold-border pl-6 py-2">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.fullDescription}
                        </p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                          Neem contact op
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < siteConfig.services.length - 1 && (
                    <div className="border-b border-border mt-8" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Uw Rechtsgebied Niet Gevonden?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Neem gerust contact met ons op. Wij kunnen u wellicht doorverwijzen naar een 
            gespecialiseerde collega of adviseren over de mogelijkheden.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2"
          >
            Contact Opnemen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Rechtsgebieden;
