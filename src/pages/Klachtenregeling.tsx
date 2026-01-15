import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";

const Klachtenregeling = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Klachtenregeling
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              Informatie over onze interne klachtenprocedure en de Geschillencommissie Advocatuur.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  1. Inleiding
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.name} hecht grote waarde aan de tevredenheid van haar cliënten. 
                  Ondanks onze inspanningen om u zo goed mogelijk van dienst te zijn, kan het 
                  voorkomen dat u niet tevreden bent over de dienstverlening. In dat geval 
                  vernemen wij dat graag van u, zodat wij kunnen zoeken naar een passende oplossing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  2. Interne Klachtenprocedure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Indien u een klacht heeft over de dienstverlening van ons kantoor, verzoeken 
                  wij u deze eerst aan ons voor te leggen. U kunt uw klacht schriftelijk indienen 
                  bij:
                </p>
                <div className="bg-secondary p-6 rounded-lg mb-4">
                  <p className="text-foreground font-medium">{siteConfig.name}</p>
                  <p className="text-muted-foreground">t.a.v. {siteConfig.lawyer.name}</p>
                  <p className="text-muted-foreground">{siteConfig.contact.address.street}</p>
                  <p className="text-muted-foreground">
                    {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a>
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Na ontvangst van uw klacht zullen wij deze zo spoedig mogelijk, doch uiterlijk 
                  binnen vier weken, in behandeling nemen en schriftelijk reageren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  3. Geschillencommissie Advocatuur
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Indien de interne klachtenprocedure niet leidt tot een voor u bevredigende 
                  oplossing, kunt u uw klacht voorleggen aan de Geschillencommissie Advocatuur. 
                  Dit is een onafhankelijke instantie die geschillen tussen advocaten en hun 
                  cliënten behandelt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Meer informatie over de Geschillencommissie Advocatuur vindt u op:{" "}
                  <a 
                    href="https://www.geschillencommissie.nl/over-ons/commissies/advocatuur/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.geschillencommissie.nl
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  4. Nederlandse Orde van Advocaten
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.lawyer.name} is ingeschreven bij de Nederlandse Orde van Advocaten 
                  en onderworpen aan de voor advocaten geldende gedragsregels. Bij klachten over 
                  gedrag van de advocaat kunt u zich ook wenden tot de Deken van de Orde van 
                  Advocaten in het arrondissement waar de advocaat kantoor houdt.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-muted-foreground text-sm">
                  Heeft u vragen over onze klachtenregeling? Neem dan gerust{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    contact
                  </Link>{" "}
                  met ons op.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Klachtenregeling;
