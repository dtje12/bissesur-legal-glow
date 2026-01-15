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
              Kantoorklachtenregeling {siteConfig.name}
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
                  Artikel 1 - Begripsbepalingen
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In deze kantoorklachtenregeling wordt verstaan onder:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Klacht:</strong> iedere schriftelijke uiting van ongenoegen van of namens de cliënt jegens de advocaat of de onder diens verantwoordelijkheid werkzame personen over de totstandkoming en de uitvoering van een overeenkomst van opdracht, de kwaliteit van de dienstverlening of de hoogte van de declaratie, niet zijnde een klacht als bedoeld in paragraaf 4 van de Advocatenwet.</li>
                  <li><strong>Klager:</strong> de cliënt of diens vertegenwoordiger die een klacht kenbaar maakt.</li>
                  <li><strong>Klachtenfunctionaris:</strong> de advocaat die is belast met de afhandeling van de klacht, zijnde mr. A.R. Bissessur.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 2 - Toepassingsbereik
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Deze kantoorklachtenregeling is van toepassing op iedere overeenkomst van opdracht tussen {siteConfig.name} en de cliënt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 3 - Doelstellingen
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Deze kantoorklachtenregeling heeft tot doel:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Het vastleggen van een procedure om klachten van cliënten binnen een redelijke termijn op een constructieve wijze af te handelen.</li>
                  <li>Het vastleggen van een procedure om de oorzaken van klachten van cliënten vast te stellen.</li>
                  <li>Behoud en verbetering van bestaande relaties door middel van een goede klachtenbehandeling.</li>
                  <li>Medewerkers trainen in cliëntgericht reageren op klachten.</li>
                  <li>Verbetering van de kwaliteit van de dienstverlening met behulp van klachtbehandeling en klachtanalyse.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 4 - Informatie bij aanvang dienstverlening
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Deze kantoorklachtenregeling is openbaar gemaakt. De advocaat wijst de cliënt voor het aangaan van de overeenkomst van opdracht erop dat het kantoor een kantoorklachtenregeling hanteert en dat deze van toepassing is op de dienstverlening. {siteConfig.name} heeft via de algemene voorwaarden opgenomen bij welke onafhankelijke partij of instantie een klacht die na behandeling niet is opgelost kan worden voorgelegd ter verkrijging van een bindende uitspraak en heeft dit bij de opdrachtbevestiging kenbaar gemaakt. Klachten als bedoeld in artikel 1 van deze kantoorklachtenregeling die na behandeling niet zijn opgelost worden voorgelegd aan de Geschillencommissie Advocatuur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 5 - Interne klachtprocedure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Indien een cliënt het kantoor benadert met een klacht, dan wordt de klacht doorgeleid naar mr. A.R. Bissessur, die daarmee optreedt als klachtenfunctionaris.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De klachtenfunctionaris stelt degene over wie is geklaagd in kennis van het indienen van de klacht en stelt de klager en degene over wie is geklaagd in de gelegenheid een toelichting te geven op de klacht.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Degene over wie is geklaagd tracht samen met de cliënt tot een oplossing te komen al dan niet na tussenkomst van de klachtenfunctionaris.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De klachtenfunctionaris handelt de klacht af binnen vier weken na ontvangst van de klacht of doet met opgave van redenen mededeling aan de klager over afwijking van deze termijn met vermelding van de termijn waarbinnen wel een oordeel over de klacht wordt gegeven.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De klachtenfunctionaris stelt de klager en degene over wie is geklaagd schriftelijk op de hoogte van het oordeel over de gegrondheid van de klacht, al dan niet vergezeld van aanbevelingen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Indien de klacht naar tevredenheid is afgehandeld, tekenen de klager, de klachtenfunctionaris en degene over wie is geklaagd het oordeel over de gegrondheid van de klacht.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 6 - Geheimhouding en kosteloze klachtbehandeling
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De klachtenfunctionaris en degene over wie is geklaagd nemen bij de klachtbehandeling geheimhouding in acht.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  De klager is geen vergoeding verschuldigd voor de kosten van de behandeling van de klacht.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 7 - Verantwoordelijkheden
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De klachtenfunctionaris is verantwoordelijk voor de tijdige afhandeling van de klacht.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Degene over wie is geklaagd houdt de klachtenfunctionaris op de hoogte over eventueel contact en een mogelijke oplossing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De klachtenfunctionaris houdt de klager op de hoogte over de afhandeling van de klacht.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  De klachtenfunctionaris houdt het klachtdossier bij.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Artikel 8 - Klachtregistratie
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  De klachtenfunctionaris registreert de klacht met daarbij het klachtonderwerp. Een klacht kan in meerdere onderwerpen worden ingedeeld. De klachtenfunctionaris brengt periodiek verslag uit over de afhandeling van de klachten en doet aanbevelingen ter voorkoming van nieuwe klachten, alsmede ter verbetering van procedures. Eenmaal per jaar worden de verslagen en de aanbevelingen op het kantoor besproken en ter besluitvorming voorgelegd.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-foreground mb-4">Geschillencommissie Advocatuur</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Indien de klacht na behandeling niet is opgelost, kan deze worden voorgelegd aan de Geschillencommissie Advocatuur:
                </p>
                <p className="text-muted-foreground text-sm">
                  <a 
                    href="https://www.geschillencommissie.nl/over-ons/commissies/advocatuur/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.geschillencommissie.nl/over-ons/commissies/advocatuur
                  </a>
                </p>
              </div>

              <div className="border-t border-border pt-6">
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
