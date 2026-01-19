import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Users, Gavel, Globe, ArrowRight } from "lucide-react";

const Rechtsgebieden = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Rechtsgebieden
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              Advocatenkantoor Bissessur voert een algemene advies- en procespraktijk voor ondernemers 
              en particulieren. De praktijk van mr. Bissessur richt zich met name op de rechtsgebieden 
              personen- en familierecht (zijn specialisatie), strafrecht en (regulier) vreemdelingenrecht.
            </p>
          </div>
        </div>
      </section>

      {/* Familierecht */}
      <section id="familierecht" className="section-padding bg-background scroll-mt-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="aspect-square max-w-xs mx-auto bg-secondary rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="gold-border pl-6 py-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Familierecht
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Een scheiding is niet alleen verdrietig en emotioneel, maar heeft in veel gevallen ook 
                    verstrekkende financiële gevolgen voor bijvoorbeeld de echtelijke woning, spaargeld, 
                    schulden en pensioen.
                  </p>
                  <p>
                    Vragen zoals wie de koopwoning overneemt of dat deze in de verkoop wordt gezet, hoe wordt 
                    een eventuele hypothecaire lening wordt afgelost en hoe de verdeling van huwelijksgemeenschap 
                    plaatsvindt, moeten worden beantwoord. Het is aan uw advocaat om u daarbij te begeleiden en 
                    deze vragen te beantwoorden.
                  </p>
                  <p>
                    Zijn er kinderen bij de echtscheiding betrokken, dan ondervinden zij eveneens de gevolgen 
                    daarvan. De wet schrijft voor dat de gevolgen van de echtscheiding voor de kinderen, zoals 
                    het gezag over de kinderen, de omgang tussen de kinderen en de niet-verzorgende ouder, de 
                    hoofdverblijfplaats van de kinderen en de kinderalimentatie, moeten worden vastgelegd in 
                    een ouderschapsplan.
                  </p>
                  <p>
                    Het is van groot belang dat de rust wordt bewaard en dat partijen in een aantal gesprekken 
                    met elkaar overeenstemming bereiken over de bovengenoemde onderwerpen.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-6"
                >
                  Neem contact op
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="border-b border-border" />
      </div>

      {/* Strafrecht */}
      <section id="strafrecht" className="section-padding bg-background scroll-mt-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 lg:order-2">
              <div className="aspect-square max-w-xs mx-auto bg-secondary rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Gavel className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 lg:order-1">
              <div className="gold-border pl-6 py-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Strafrecht
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Een strafrechtadvocaat houdt zich bezig met het verdedigen van verdachten van strafbare 
                    feiten. Het kan daarbij gaan om relatief lichte zaken, zoals een winkeldiefstal, maar ook 
                    om zeer zware zaken zoals moord of verkrachting.
                  </p>
                  <p>
                    Zolang de strafrechter u niet heeft veroordeeld in uw strafzaak, bent u een verdachte. 
                    Als verdachte heeft u ook rechten. Zo bent u niet verplicht om op de vragen van de politie 
                    te antwoorden en heeft u recht op rechtsbijstand van een advocaat.
                  </p>
                  <p>
                    Het is bijzonder belangrijk om in een vroeg stadium een advocaat te raadplegen voor advies 
                    en bijstand. De advocaat kan u beschermen en begeleiden en namens u met het Openbaar 
                    Ministerie onderhandelen.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-6"
                >
                  Neem contact op
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="border-b border-border" />
      </div>

      {/* Vreemdelingenrecht */}
      <section id="vreemdelingenrecht" className="section-padding bg-background scroll-mt-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="aspect-square max-w-xs mx-auto bg-secondary rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="gold-border pl-6 py-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Vreemdelingenrecht
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Het regulier vreemdelingenrecht omvat, eenvoudig gezegd, alle procedures buiten de asielprocedure.
                  </p>
                  <p>Mr Bissessur houdt zich voornamelijk bezig met de volgende aanvragen:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>aanvraag voor een machtiging tot voorlopige verblijf (MVV)</li>
                    <li>aanvraag voor een verblijfsvergunning wegens gezinshereniging, studie, arbeid in loondienst, arbeid als zelfstandige of om medische redenen</li>
                    <li>verkrijging van het Nederlanderschap via optie of naturalisatie</li>
                    <li>Vaststelling Nederlanderschap via de rechter</li>
                  </ul>
                  <p>
                    Aan alle aanvragen worden voorwaarden gesteld. Zo kan iemand die in het buitenland woont en 
                    is gehuwd met een Nederlander die in Nederland woont, in het kader van gezinshereniging naar 
                    Nederland komen indien hij of zij in het bezit is van een MVV. Dit betekent onder meer dat de 
                    buitenlandse partner in het land van herkomst het basisexamen inburgering buitenland met succes 
                    heeft afgerond en dat de partner in Nederland beschikt over een voldoende en duurzaam inkomen, 
                    een geldig paspoort heeft, een aantoonbaar duurzame relatie onderhoudt en geen gevaar vormt voor 
                    de openbare orde.
                  </p>
                  <p>
                    Voldoet de aanvrager niet aan alle voorwaarden, dan kan jurisprudentie in sommige gevallen 
                    uitkomst bieden.
                  </p>
                </div>

                <h3 className="text-xl font-serif font-semibold text-foreground mt-8 mb-3">
                  Bezwaar en beroep
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mocht uw aanvraag worden afgewezen, dan wordt u verder begeleid in de bezwaar- en beroepsprocedure.
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  Het vreemdelingenrecht is complex, maar heel interessant.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-6"
                >
                  Neem vrijblijvend contact op voor meer informatie
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Hulp Nodig bij uw Juridische Zaak?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Neem gerust contact met ons op voor een vrijblijvend gesprek over uw situatie.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2"
          >
            Contact Opnemen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Rechtsgebieden;
