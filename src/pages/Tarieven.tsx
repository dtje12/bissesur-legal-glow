import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { Phone, Euro, FileText, Shield, ArrowRight } from "lucide-react";

const Tarieven = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Tarieven
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              Advocatenkantoor Bissessur te Den Haag werkt zowel op basis van een vooraf besproken uurtarief als op basis van gefinancierde rechtsbijstand.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Advocatenkantoor Bissessur te Den Haag werkt zowel op basis van een vooraf besproken 
                uurtarief als op basis van gefinancierde rechtsbijstand (toevoegingen). Tevens is het 
                mogelijk om een vaste prijsafspraak te maken. Door haar lage (overhead)kosten is het 
                advocatenkantoor in staat een scherp tarief te hanteren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Gefinancierde Rechtsbijstand Card */}
              <div className="bg-secondary rounded-lg p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Gefinancierde Rechtsbijstand
                </h3>
                <p className="text-muted-foreground mb-4">
                  Indien u voor gesubsidieerde rechtsbijstand in aanmerking komt, betaalt u uitsluitend 
                  een door de Raad voor Rechtsbijstand vastgestelde eigen bijdrage. In sommige gevallen 
                  hoeft u geen eigen bijdrage te betalen.
                </p>
                <p className="text-muted-foreground text-sm">
                  Indien u een verwijzing haalt bij het Juridisch Loket, ontvangt u bovendien een korting 
                  op de eigen bijdrage.
                </p>
              </div>

              {/* Rechtsbijstandverzekering Card */}
              <div className="bg-secondary rounded-lg p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Rechtsbijstandverzekering
                </h3>
                <p className="text-muted-foreground mb-4">
                  Als u een rechtsbijstandverzekering heeft, kunt u bij een gerechtelijke of 
                  administratiefrechtelijke procedure uw eigen advocaat kiezen. De advocaatkosten 
                  worden dan door uw verzekeraar vergoed.
                </p>
                <p className="text-muted-foreground text-sm">
                  Vindt u het prettiger en/of praktischer om u te laten bijstaan door mr Bissessur, 
                  dan kunt u gerust contact opnemen.
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Uurtarief & Vaste Prijs
                </h2>
                <div className="gold-border pl-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Het uurtarief wordt vooraf besproken en is afhankelijk van de aard en complexiteit 
                    van de zaak. Tevens is het mogelijk om een vaste prijsafspraak te maken.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Door de lage (overhead)kosten is Advocatenkantoor Bissessur in staat een scherp 
                    tarief te hanteren. Neem contact op voor een vrijblijvende offerte.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Meer Informatie
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Voor meer informatie over gefinancierde rechtsbijstand kunt u terecht bij de{" "}
                  <a 
                    href="https://www.rechtsbijstand.nl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Raad voor Rechtsbijstand
                  </a>{" "}
                  of het{" "}
                  <a 
                    href="https://www.juridischloket.nl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Juridisch Loket
                  </a>.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-primary/5 rounded-lg p-8 text-center">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Vrijblijvend Advies over de Kosten?
              </h3>
              <p className="text-muted-foreground mb-6">
                Neem contact met ons op voor een vrijblijvend gesprek over uw zaak en de bijbehorende kosten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-gold inline-flex items-center justify-center gap-2"
                >
                  Contact Opnemen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={siteConfig.contact.phoneLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarieven;
