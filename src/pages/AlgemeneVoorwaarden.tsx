import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";

const AlgemeneVoorwaarden = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Algemene Voorwaarden
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              De algemene voorwaarden van {siteConfig.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 1 - Definities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  In deze algemene voorwaarden wordt verstaan onder:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Kantoor:</strong> {siteConfig.name}, gevestigd te {siteConfig.contact.address.city}.</li>
                  <li><strong>Cliënt:</strong> De natuurlijke of rechtspersoon die aan het Kantoor opdracht geeft tot het verrichten van juridische diensten.</li>
                  <li><strong>Opdracht:</strong> De overeenkomst van opdracht tussen Cliënt en Kantoor.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 2 - Toepasselijkheid
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Deze algemene voorwaarden zijn van toepassing op alle opdrachten die aan het 
                  Kantoor worden verstrekt, alsmede op alle rechtsverhoudingen tussen het Kantoor 
                  en de Cliënt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 3 - Opdracht
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Alle opdrachten worden uitsluitend aanvaard en uitgevoerd door het Kantoor. 
                  De toepasselijkheid van de artikelen 7:404 BW en 7:407 lid 2 BW wordt uitdrukkelijk 
                  uitgesloten. Het Kantoor bepaalt de wijze waarop de opdracht wordt uitgevoerd.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 4 - Honorarium en Kosten
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De werkzaamheden van het Kantoor worden in rekening gebracht op basis van het 
                  aantal bestede uren vermenigvuldigd met het geldende uurtarief, tenzij schriftelijk 
                  anders is overeengekomen. Het Kantoor is gerechtigd een voorschot te verlangen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Naast het honorarium worden aan de Cliënt in rekening gebracht de verschotten 
                  (zoals griffierechten, deurwaarderskosten en kosten van derden) en kantoorkosten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 5 - Betaling
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Betaling van declaraties dient te geschieden binnen veertien dagen na factuurdatum. 
                  Bij niet-tijdige betaling is de Cliënt van rechtswege in verzuim en is over het 
                  openstaande bedrag de wettelijke rente verschuldigd.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 6 - Aansprakelijkheid
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  De aansprakelijkheid van het Kantoor voor schade, voortvloeiend uit of verband 
                  houdend met de uitvoering van een opdracht, is beperkt tot het bedrag dat in het 
                  desbetreffende geval door de beroepsaansprakelijkheidsverzekering wordt uitgekeerd, 
                  vermeerderd met het eigen risico dat op grond van de polisvoorwaarden voor rekening 
                  van het Kantoor komt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 7 - Klachten
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Het Kantoor beschikt over een klachtenregeling. Klachten over de totstandkoming 
                  of de uitvoering van een overeenkomst met het Kantoor kunnen worden ingediend 
                  conform de <Link to="/klachtenregeling" className="text-primary hover:underline">klachtenregeling</Link>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 8 - Toepasselijk Recht
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Op de rechtsverhouding tussen het Kantoor en de Cliënt is Nederlands recht van 
                  toepassing. Geschillen zullen worden voorgelegd aan de bevoegde rechter te Den Haag.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 9 - Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Het Kantoor verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening 
                  Gegevensbescherming (AVG). Persoonsgegevens worden uitsluitend verwerkt voor zover 
                  noodzakelijk voor de uitvoering van de opdracht en voor het voldoen aan wettelijke 
                  verplichtingen.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-foreground mb-2">Contactgegevens</h3>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.name}<br />
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}<br />
                  Tel: {siteConfig.contact.phone}<br />
                  Email: {siteConfig.contact.email}
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground text-sm">
                  Laatst bijgewerkt: januari 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlgemeneVoorwaarden;
