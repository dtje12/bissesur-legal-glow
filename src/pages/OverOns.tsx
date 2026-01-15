import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { CheckCircle, Award, BookOpen, Users } from "lucide-react";

const OverOns = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Over Ons
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              Leer meer over {siteConfig.lawyer.name} en de visie achter ons kantoor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Lawyer Profile */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-secondary rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-6xl font-serif font-bold text-primary">RB</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                      {siteConfig.lawyer.name}
                    </h3>
                    <p className="text-accent font-medium mb-4">{siteConfig.lawyer.title}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        <span>Ingeschreven bij de Nederlandse Orde van Advocaten</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-accent" />
                        <span>Universiteit Leiden</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span>15+ jaar ervaring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio & Values */}
            <div className="lg:col-span-2 space-y-12">
              {/* Biography */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                  Achtergrond
                </h2>
                {siteConfig.lawyer.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Values */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                  Onze Kernwaarden
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {siteConfig.lawyer.values.map((value) => (
                    <div
                      key={value.title}
                      className="gold-border bg-secondary/50 rounded-r-lg p-6"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-serif font-semibold text-foreground mb-2">
                            {value.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Onze Missie
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wij geloven dat iedereen recht heeft op toegankelijke en deskundige juridische bijstand. 
                  Ons doel is om cliënten te begeleiden door complexe juridische vraagstukken met 
                  persoonlijke aandacht, heldere communicatie en vastberadenheid. Wij streven ernaar 
                  om niet alleen juridische problemen op te lossen, maar ook om cliënten te informeren 
                  over hun rechten en mogelijkheden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OverOns;
