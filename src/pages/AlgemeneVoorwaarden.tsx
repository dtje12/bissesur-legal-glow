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
              Algemene voorwaarden {siteConfig.name}
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
                  1. Definities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In deze algemene voorwaarden wordt verstaan onder:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>a. {siteConfig.name}:</strong> de eenmanszaak van mr. A.R. Bissessur, gevestigd te 's-Gravenhage.</li>
                  <li><strong>b. Cliënt:</strong> de contractspartij van {siteConfig.name}.</li>
                  <li><strong>c. Overeenkomst:</strong> de overeenkomst van opdracht tussen opdrachtgever en {siteConfig.name}.</li>
                  <li><strong>d. Honorarium:</strong> de financiële vergoeding (tijdsevenredig of anderszins) welke {siteConfig.name} voor de uitvoering van de overeenkomst met opdrachtgever is overeengekomen, een en ander exclusief verschotten en BTW.</li>
                  <li><strong>e. Verschotten:</strong> de kosten die door {siteConfig.name} worden gemaakt in het belang van de uitvoering van de overeengekomen werkzaamheden, zoals bijvoorbeeld griffierechten, deurwaarderskosten, leges en reiskosten.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  2. Toepasselijkheid
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten, opdrachten en/of offertes of andere rechtsbetrekkingen tussen {siteConfig.name} en de cliënt, tenzij voorafgaand aan de overeenkomst uitdrukkelijk schriftelijk anders is overeengekomen. De algemene voorwaarden zijn ook van toepassing op aanvullende opdrachten en vervolgopdrachten. De algemene voorwaarden worden bij de opdrachtbevestiging verstrekt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  3. Overeenkomst
                </h2>
                <ul className="list-none space-y-4 text-muted-foreground">
                  <li><strong>a.</strong> Wanneer een cliënt aan {siteConfig.name} een opdracht geeft teneinde zijn belangen te behartigen, komt de overeenkomst (van opdracht) tussen de cliënt en {siteConfig.name} pas tot stand nadat {siteConfig.name} deze heeft aanvaard. Opdrachten worden met uitsluiting van het bepaalde in artikel 7:404 BW en 7.407 lid 2 BW aanvaard.</li>
                  <li><strong>b.</strong> Iedere opdracht wordt geacht uitsluitend te zijn verstrekt aan en aanvaard door {siteConfig.name}.</li>
                  <li><strong>c.</strong> De uitvoering van verstrekte opdrachten geschiedt uitsluitend ten behoeve van de opdrachtgever. Derden kunnen aan de uitvoering van de voor de opdrachtgever verrichte werkzaamheden geen rechten ontlenen.</li>
                  <li><strong>d.</strong> De cliënt staat ervoor in aan de advocaat de juiste en volledige gegevens en bescheiden ter beschikking te stellen.</li>
                  <li><strong>e.</strong> De advocaat voert de opdracht uit met een zorgvuldigheid die van hem mag worden verwacht; daarbij is de cliënt ervan op de hoogte dat de advocaat de door Orde van Advocaten opgelegde gedragsregels bij de uitoefening van zijn praktijk dient te respecteren en aanvaardt de gevolgen die hieruit kunnen voortvloeien.</li>
                  <li><strong>f.</strong> De opdracht houdt geen resultaatsverbintenis in maar is een inspanningsverbintenis; de advocaat kan dus niet instaan voor het behalen van het beoogde resultaat.</li>
                  <li><strong>g.</strong> {siteConfig.name} is gerechtigd om bij de uitvoering van de werkzaamheden derden in te schakelen voor rekening en risico van de cliënt.</li>
                  <li><strong>h.</strong> Bij het verstrekken van de opdracht en voor aanvang van de werkzaamheden dient de cliënt een afschrift van een geldig legitimatiebewijs af te geven.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  4. Honorarium
                </h2>
                <ul className="list-none space-y-4 text-muted-foreground">
                  <li><strong>a.</strong> {siteConfig.name} brengt aan cliënt vanwege de uitvoering van de overeengekomen opdracht honorarium in rekening, te vermeerderen met verschotten en verschuldigde BTW. Een en ander tenzij schriftelijk uitdrukkelijk anders overeengekomen.</li>
                  <li><strong>b.</strong> Als honorarium hanteert {siteConfig.name} een uurtarief excl. BTW. {siteConfig.name} behoudt zich het recht voor het met de cliënt overeengekomen honorarium elk jaar bij het begin van het kalenderjaar te indexeren met een in verhouding tot de ontwikkeling van het algemene prijspeil redelijk percentage.</li>
                  <li><strong>c.</strong> Door {siteConfig.name} zullen verrichte werkzaamheden maandelijks in rekening worden gebracht. Bij aanvang van de werkzaamheden is {siteConfig.name} gerechtigd van de cliënt de betaling van een voorschot te verlangen. Een ontvangen voorschot wordt verrekend met de einddeclaratie. Betaling dient te geschieden binnen een termijn van 14 dagen na factuurdatum, zonder dat de cliënt gerechtigd is enige korting, inhouding of verrekening toe te passen. Bij overtreding van deze termijn is de cliënt van rechtswege in verzuim en is vertragingsrente, gelijk aan de wettelijke geldende rente, verschuldigd.</li>
                  <li><strong>d.</strong> Wanneer betaling van de factuur niet binnen de aangegeven termijn volledig is voldaan, heeft {siteConfig.name} het recht, zonder nadere aankondiging haar werkzaamheden voor de cliënt in het kader van de verleende opdracht op te schorten.</li>
                  <li><strong>e.</strong> Indien {siteConfig.name} genoodzaakt is invorderingsmaatregelen te treffen jegens de opdrachtgever die in verzuim is, komen alle buitengerechtelijke en gerechtelijke kosten die verband houden met deze invordering voor rekening van de cliënt.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  5. Gefinancierde rechtsbijstand
                </h2>
                <ul className="list-none space-y-4 text-muted-foreground">
                  <li><strong>a.</strong> Met de cliënt is besproken of deze in aanmerking komt gefinancierde rechtsbijstand. Cliënt verklaart zich ermee bekend dat indien {siteConfig.name} namens cliënt een toevoeging aanvraagt bij de Raad voor Rechtsbijstand, de Raad ter uitvoering van zijn wettelijke taak informatie over de cliënt – en eventueel ook diens partner – kan opvragen bij overheidsinstanties als de gemeentelijke basisadministratie en de belastingen.</li>
                  <li><strong>b.</strong> De cliënt verklaart zich ermee bekend dat de Raad voor Rechtsbijstand een eigen bijdrage zal opleggen, welke door {siteConfig.name} aan cliënt in rekening wordt gebracht. {siteConfig.name} is gerechtigd een voorschot te verlangen van de te verwachten kosten ter zake de eigen bijdrage en de verschotten.</li>
                  <li><strong>c.</strong> Indien de toevoegingsaanvraag wordt afgewezen of de toevoeging tussentijds dan wel achteraf wordt ingetrokken, is cliënt gehouden de reeds verrichte werkzaamheden af te rekenen op basis van het op dat moment geldende uurtarief.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  6. Aansprakelijkheid
                </h2>
                <ul className="list-none space-y-4 text-muted-foreground">
                  <li><strong>a.</strong> Iedere aansprakelijkheid van {siteConfig.name} voor schade jegens cliënten en derden is beperkt tot het bedrag waarop het in het betreffende geval uit hoofde van de door {siteConfig.name} gesloten beroepsaansprakelijkheidsverzekering aanspraak bestaat.</li>
                  <li><strong>b.</strong> Indien om welke reden dan ook geen uitkering krachtens de verzekering als bedoeld in het voorgaande lid mocht plaatsvinden, is de aansprakelijkheid van {siteConfig.name} of bij haar werkzame personen (in welke hoedanigheid ook) beperkt tot het door de cliënt betaalde honorarium, e.e.a. met een maximum van € 25.000,--.</li>
                  <li><strong>c.</strong> {siteConfig.name} is niet aansprakelijk voor eventuele tekortkomingen van door haar ingeschakelde derden.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  7. Archivering en bewaartermijn
                </h2>
                <ul className="list-none space-y-4 text-muted-foreground">
                  <li><strong>a.</strong> Dossiers zullen gedurende zeven jaren worden bewaard. Als aanvangsdatum van deze termijn geldt de datum waarop door {siteConfig.name} voor het laatst inhoudelijke werkzaamheden in de zaak zijn verricht.</li>
                  <li><strong>b.</strong> Na het einde van de opdracht worden de in het dossier aanwezige originele stukken op diens verzoek aan de cliënt verstrekt. {siteConfig.name} zal de kosten van toezending van deze stukken in rekening brengen bij de cliënt.</li>
                  <li><strong>c.</strong> Voor de uitvoering van de door cliënt verleende opdracht worden zijn/haar persoonsgegevens verzameld en bewaard, e.e.a. in overeenstemming met de Wet Bescherming Persoonsgegevens. {siteConfig.name} zal geen persoonsgegevens aan derden verstrekken, tenzij zij daartoe verplicht is op grond van de wet, een rechterlijke of arbitrale uitspraak of een bindend advies.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  8. Klachten
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Als de cliënt een klacht heeft over het werk van de advocaat of over de declaratie van de advocaat, dan dient de cliënt deze klacht schriftelijk voor te leggen aan de advocaat. De klacht zal vervolgens worden behandeld volgens de <Link to="/klachtenregeling" className="text-primary hover:underline">kantoorklachtenregeling</Link> van {siteConfig.name}. Deze klachtenregeling ligt ter inzage op het kantoor en bevat een beschrijving van de klachtenprocedure. {siteConfig.name} is aangesloten bij de Geschillencommissie Advocatuur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  9. Toepasselijk recht en bevoegde rechter
                </h2>
                <ul className="list-none space-y-4 text-muted-foreground">
                  <li><strong>a.</strong> Op de overeenkomst van opdracht tussen {siteConfig.name} en de cliënt is Nederlands recht van toepassing.</li>
                  <li><strong>b.</strong> Alle geschillen verband houdend met de opdracht bedoeld onder lid a worden beslecht door de bevoegde rechter te Den Haag, onverlet de mogelijkheid van de cliënt om in het kader van het advocatentuchtrecht tegen {siteConfig.name} te ageren.</li>
                </ul>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlgemeneVoorwaarden;
