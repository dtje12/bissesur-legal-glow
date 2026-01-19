import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { CheckCircle, Award, BookOpen, Users, Scale } from "lucide-react";
import mrBissessur from "@/assets/mr-bissessur.png";

const OverOns = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Advocaat mr. A.R. Bissessur
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              Uw recht, onze strijd. Persoonlijke en deskundige juridische bijstand.
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
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={mrBissessur} 
                      alt="Mr. A.R. Bissessur - Advocaat" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                      Mr. A.R. Bissessur
                    </h3>
                    <p className="text-accent font-medium mb-4">Advocaat</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>Ingeschreven bij de Nederlandse Orde van Advocaten</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>Universiteit van Amsterdam</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>Beëdigd sinds 2006</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>Eigen kantoor sinds 2008</span>
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
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Mr. Bissessur heeft aan de Universiteit van Amsterdam (voorheen genaamd de Gemeente 
                    Universiteit van Amsterdam) Nederlands recht gestudeerd. Na ruim vijftien jaar werkzaam 
                    te zijn geweest bij de overheid als jurist, heeft hij in 2004 de overstap gemaakt naar 
                    de advocatuur. In 2004 en 2005 heeft hij eerst gewerkt als juridisch medewerker. In 2006 
                    is hij beëdigd als advocaat in Den Haag.
                  </p>
                  <p>
                    Mr. Bissessur werkt sindsdien als advocaat in Den Haag en heeft vanaf 2008 een eigen 
                    kantoor. De praktijk van mr. Bissessur richt zich met name op de rechtsgebieden 
                    personen- en familierecht (zijn specialisatie), strafrecht en (regulier) vreemdelingenrecht.
                  </p>
                  <p>
                    Door zijn jarenlange ervaring en gedegen kennis van zaken is mr. Bissessur in staat u op 
                    de juiste en professionele manier bij te staan en door een procedure te leiden.
                  </p>
                </div>
              </div>

              {/* Registratie */}
              <div className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Rechtsgebiedenregister
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mr. Bissessur staat in het rechtsgebiedenregister van de Orde van Advocaten geregistreerd 
                  voor deze rechtsgebieden. Deze registratie verplicht hem elk kalenderjaar, conform de normen 
                  van de Nederlandse Orde van Advocaten, opleidingspunten te behalen voor ieder geregistreerd 
                  rechtsgebied.
                </p>
              </div>

              {/* Specialisaties */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                  Specialisaties
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="gold-border bg-secondary/50 rounded-r-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-serif font-semibold text-foreground mb-2">
                          Familierecht
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Specialisatie in personen- en familierecht
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="gold-border bg-secondary/50 rounded-r-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-serif font-semibold text-foreground mb-2">
                          Strafrecht
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Verdediging in strafrechtelijke zaken
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="gold-border bg-secondary/50 rounded-r-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-serif font-semibold text-foreground mb-2">
                          Vreemdelingenrecht
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Regulier vreemdelingenrecht
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OverOns;
