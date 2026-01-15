import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-5xl font-serif font-bold text-primary">RB</span>
                  </div>
                  <p className="text-lg font-serif text-foreground">{siteConfig.lawyer.name}</p>
                  <p className="text-muted-foreground">{siteConfig.lawyer.title}</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Over {siteConfig.lawyer.name}
            </h2>
            <div className="decorative-line-left mb-6" />
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              {siteConfig.lawyer.bio.split('\n\n')[0]}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteConfig.lawyer.values.slice(0, 4).map((value) => (
                <div key={value.title} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{value.title}</span>
                </div>
              ))}
            </div>

            <Link
              to="/over-ons"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Lees meer over ons
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
