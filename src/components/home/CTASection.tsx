import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const CTASection = () => {
  return (
    <section className="hero-gradient py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Juridische Hulp Nodig?
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-primary-foreground/80 mb-8">
            Neem vandaag nog contact op voor een vrijblijvend kennismakingsgesprek. 
            Wij bespreken uw situatie en de mogelijke stappen die wij voor u kunnen ondernemen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Plan een Afspraak
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.contact.phoneLink}
              className="btn-outline-light inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
