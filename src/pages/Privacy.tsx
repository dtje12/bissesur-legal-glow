import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Privacy Statement
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              Hoe wij omgaan met uw persoonsgegevens.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Intro */}
            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Advocatenkantoor Bissessur verwerkt uw persoonsgegevens om diensten aan te kunnen bieden, 
                dienstverlening te kunnen verbeteren en om persoonlijk met u te kunnen communiceren.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Advocatenkantoor Bissessur respecteert uw persoonsgegevens en draagt er zorg voor dat de 
                persoonlijke informatie die aan ons wordt verstrekt of anderszins verkregen vertrouwelijk 
                wordt behandeld. Bij persoonsgegevens gaat het om alle informatie over een persoon. Ook 
                gegevens die indirect iets over iemand zeggen, zijn persoonsgegevens. Met het onderstaande 
                wordt uitvoering gegeven aan de in de AVG neergelegde informatieplicht aan de betrokkene(n) 
                wiens persoonsgegevens Advocatenkantoor Bissessur verwerkt.
              </p>
            </div>

            {/* Doel verwerking */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Doel verwerking persoonsgegevens
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Advocatenkantoor Bissessur verzamelt en verwerkt de benodigde basis persoonsgegevens, 
                zoals de naam, adres, woonplaats, geboortedatum, e-mailadres, telefoonnummer etc. voor 
                de hierna te noemen doeleinden:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>het verlenen van juridische diensten, waaronder de uitvoering van een overeenkomst en het voeren van (gerechtelijke) procedures</li>
                <li>het innen van declaraties</li>
                <li>advisering, bemiddeling en verwijzing</li>
                <li>het voldoen aan onze juridische en wettelijke verplichtingen</li>
                <li>marketing- en communicatie activiteiten</li>
                <li>werving en selectie</li>
              </ul>
            </div>

            {/* Grondslag */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Grondslag verwerking persoonsgegevens
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Advocatenkantoor Bissessur verwerkt de hierboven genoemde persoonsgegevens op basis van 
                de hierna te noemen gronden als bedoeld in artikel 6 van de AVG:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>wettelijke verplichting</li>
                <li>uitvoering van een overeenkomst</li>
                <li>verkregen toestemming van betrokkene(n)</li>
                <li>gerechtvaardigd belang</li>
              </ul>
            </div>

            {/* Delen met derden */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Delen van persoonsgegevens met derden
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Advocatenkantoor Bissessur deelt uw persoonsgegevens alleen met derde partijen voor zover 
                noodzakelijk voor de dienstverlening met inachtneming van de hiervoor genoemde doeleinden. 
                Hierbij valt te denken aan waarneming van de praktijk door een andere advocaat, het (laten) 
                uitvoeren van een deskundigheidsonderzoek of het inschakelen van een andere derde partij 
                namens en in opdracht, zoals een IT-leverancier, maar ook het verstrekken van uw persoonsgegevens 
                in verband met (gerechtelijke) procedures of correspondentie met de wederpartij.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Daarnaast kan Advocatenkantoor Bissessur persoonsgegevens verstrekken aan een derde partij, 
                zoals een toezichthouder of een andere met openbaar gezag beklede instantie, voor zover 
                daartoe een wettelijke verplichting bestaat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Door Advocatenkantoor Bissessur ingeschakelde derde partijen, die als verwerkingsverantwoordelijke 
                diensten aanbieden, zijn voor de (verdere) verwerking van uw persoonsgegevens zelf verantwoordelijk 
                voor de naleving van de AVG. Hierbij valt te denken aan een accountant, notaris, ingeschakelde 
                andere derde partij ten behoeve van een second opinion of deskundigenrapport.
              </p>
            </div>

            {/* Beveiliging */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Beveiliging
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Advocatenkantoor Bissessur hecht waarde aan de beveiliging en bescherming van uw 
                persoonsgegevens en zorgt voor passende technische en organisatorische maatregelen 
                om een op het risico afgestemd beveiligingsniveau te waarborgen.
              </p>
            </div>

            {/* Bewaartermijn */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Bewaartermijn
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Advocatenkantoor Bissessur bewaart persoonsgegevens die worden verwerkt niet langer dan 
                noodzakelijk is voor de hiervoor genoemde doeleinden van de gegevensverwerking dan wel 
                op grond van wet- en regelgeving is vereist.
              </p>
            </div>

            {/* Privacy rechten */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Privacy rechten
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Een verzoek tot inzage, correctie, beperking, verzet, overdraagbaarheid van gegevens, 
                verwijdering van uw persoonsgegevens of intrekking van eerder gegeven toestemming, kunt 
                u sturen via onderstaande contactgegevens. U ontvangt binnen vier weken na ontvangst van 
                uw verzoek nader bericht, mits zich omstandigheden voordoen waarbij aan uw verzoek als 
                betrokkene geen of niet volledige uitvoering kan geven. Hierbij valt te denken aan de 
                geheimhoudingsplicht van de advocaat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Advocatenkantoor Bissessur heeft het recht de inhoud van dit privacy statement op ieder 
                gewenst moment zonder voorafgaande kennisgeving te wijzigen. Aanpassingen van het privacy 
                statement worden op de website van Advocatenkantoor Bissessur gepubliceerd.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-secondary rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Contactmogelijkheden
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bij vragen of opmerkingen over de verwerking van uw persoonsgegevens en dit privacy 
                statement kunt u contact opnemen met mr. A.R. Bissessur. Advocatenkantoor Bissessur 
                neemt alleen verzoeken in behandeling die betrekking hebben op uw eigen persoonsgegevens.
              </p>
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center gap-2"
              >
                Neem Contact Op
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
