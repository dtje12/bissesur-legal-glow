import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { Phone, Euro, Clock, FileText, ArrowRight } from "lucide-react";

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
              Transparante tarieven en informatie over gefinancierde rechtsbijstand.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Uurtarief Card */}
              <div className="bg-secondary rounded-lg p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Euro className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Uurtarief
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ons uurtarief is afhankelijk van de aard en complexiteit van de zaak. 
                  Neem contact met ons op voor een vrijblijvende offerte.
                </p>
                <p className="text-sm text-muted-foreground">
                  * Alle tarieven zijn exclusief BTW en verschotten.
                </p>
              </div>

              {/* Toevoeging Card */}
              <div className="bg-secondary rounded-lg p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Gefinancierde Rechtsbijstand
                </h3>
                <p className="text-muted-foreground mb-4">
                  Komt u mogelijk in aanmerking voor gefinancierde rechtsbijstand (toevoeging)? 
                  Wij kunnen dit voor u beoordelen en indien mogelijk een toevoeging aanvragen.
                </p>
                <a 
                  href="https://www.rechtsbijstand.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Meer informatie over rechtsbijstand →
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Kosten en Declaraties
                </h2>
                <div className="gold-border pl-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bij {siteConfig.name} werken wij transparant. Voordat wij met uw zaak aan de slag gaan, 
                    bespreken wij de verwachte kosten en maken wij heldere afspraken over de tarieven.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Werkzaamheden worden maandelijks in rekening gebracht</li>
                    <li>Bij aanvang kan een voorschot worden gevraagd</li>
                    <li>Betaling dient binnen 14 dagen na factuurdatum te geschieden</li>
                    <li>Wij geven vooraf een inschatting van de te verwachten kosten</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Verschotten
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Naast het honorarium kunnen er verschotten in rekening worden gebracht. 
                  Dit zijn kosten die wij maken in het belang van uw zaak, zoals:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Griffierechten</li>
                  <li>Deurwaarderskosten</li>
                  <li>Leges</li>
                  <li>Reiskosten</li>
                  <li>Kosten voor inschakeling van deskundigen</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Eigen Bijdrage (bij Toevoeging)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Indien u in aanmerking komt voor gefinancierde rechtsbijstand, wordt door de Raad 
                  voor Rechtsbijstand een eigen bijdrage vastgesteld. De hoogte van deze eigen bijdrage 
                  is afhankelijk van uw inkomen en vermogen. Wij kunnen deze eigen bijdrage voor u in 
                  rekening brengen bij aanvang van de zaak.
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
