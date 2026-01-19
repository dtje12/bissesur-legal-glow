import { Link } from "react-router-dom";
import { Users, Gavel, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    id: "familierecht",
    title: "Familierecht",
    shortDescription: "Echtscheiding, alimentatie, omgangsregelingen, gezagskwesties en ouderschapsplannen.",
    icon: Users,
  },
  {
    id: "strafrecht",
    title: "Strafrecht",
    shortDescription: "Verdediging van verdachten, bijstand bij verhoren en onderhandeling met het OM.",
    icon: Gavel,
  },
  {
    id: "vreemdelingenrecht",
    title: "Vreemdelingenrecht",
    shortDescription: "MVV-aanvragen, verblijfsvergunningen, gezinshereniging en naturalisatie.",
    icon: Globe,
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Onze Rechtsgebieden
          </h2>
          <div className="decorative-line mb-4" />
          <p className="text-muted-foreground">
            De praktijk van mr. Bissessur richt zich met name op de rechtsgebieden 
            personen- en familierecht (zijn specialisatie), strafrecht en (regulier) vreemdelingenrecht.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={`/rechtsgebieden#${service.id}`}
                className="service-card group text-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Meer informatie
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            to="/rechtsgebieden"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Bekijk alle rechtsgebieden
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
