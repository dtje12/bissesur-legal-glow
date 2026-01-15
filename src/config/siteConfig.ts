export const siteConfig = {
  name: "Advocatenkantoor Bissessur",
  tagline: "Uw recht, onze strijd",
  description: "Professionele juridische bijstand met persoonlijke aandacht. Wij staan voor u klaar.",
  
  contact: {
    phone: "070 427 6852",
    phoneLink: "tel:0704276852",
    email: "info@advocatenkantoor-bissessur.nl",
    address: {
      street: "Weimarstraat 227",
      postalCode: "2562 HG",
      city: "Den Haag",
      full: "Weimarstraat 227, 2562 HG Den Haag"
    },
    openingHours: {
      weekdays: "Maandag - Vrijdag: 09:00 - 17:00",
      weekend: "Zaterdag & Zondag: Gesloten"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Weimarstraat+227+2562+HG+Den+Haag",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.8!2d4.2867!3d52.0705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA0JzEzLjgiTiA0wrAxNycxMi4xIkU!5e0!3m2!1snl!2snl!4v1234567890"
  },

  lawyer: {
    name: "Mr. A.R. Bissessur",
    title: "Advocaat",
    bio: `Mr. A.R. Bissessur is een ervaren advocaat met ruime ervaring in de juridische praktijk. Na zijn rechtenstudie heeft hij zich gespecialiseerd in diverse rechtsgebieden, waarbij de belangen van de cliënt altijd centraal staan.

Met een scherp juridisch inzicht en een persoonlijke benadering streeft Mr. Bissessur ernaar om voor elke cliënt het beste resultaat te behalen. Hij staat bekend om zijn toegankelijkheid, duidelijke communicatie en vastberadenheid in de rechtszaal.`,
    values: [
      {
        title: "Integriteit",
        description: "Eerlijkheid en transparantie vormen de basis van onze dienstverlening."
      },
      {
        title: "Expertise",
        description: "Jarenlange ervaring en voortdurende bijscholing garanderen deskundig advies."
      },
      {
        title: "Toewijding",
        description: "Wij zetten ons volledig in voor het beste resultaat voor onze cliënten."
      },
      {
        title: "Persoonlijk",
        description: "Elke zaak verdient individuele aandacht en een op maat gemaakte aanpak."
      }
    ]
  },

  services: [
    {
      id: "civiel-recht",
      title: "Civiel Recht",
      shortDescription: "Geschillen tussen burgers en bedrijven, contractenrecht en aansprakelijkheid.",
      fullDescription: "Het civiel recht, ook wel burgerlijk recht genoemd, regelt de rechtsverhoudingen tussen burgers onderling en tussen burgers en bedrijven. Wij adviseren en procederen op het gebied van contractenrecht, aansprakelijkheidsrecht, huurrecht en incassozaken.",
      icon: "Scale"
    },
    {
      id: "strafrecht",
      title: "Strafrecht",
      shortDescription: "Verdediging bij strafrechtelijke vervolging en bijstand tijdens verhoren.",
      fullDescription: "Wordt u verdacht van een strafbaar feit? Wij staan u bij vanaf het eerste moment. Of het nu gaat om bijstand tijdens politieverhoren, verdediging in de rechtszaal of hoger beroep, wij zorgen voor een sterke verdediging van uw rechten.",
      icon: "Gavel"
    },
    {
      id: "familierecht",
      title: "Familierecht",
      shortDescription: "Echtscheiding, alimentatie, omgangsregelingen en gezagskwesties.",
      fullDescription: "Familierechtzaken zijn vaak emotioneel en ingrijpend. Wij begeleiden u met begrip en deskundigheid door procedures rondom echtscheiding, alimentatie, verdeling van vermogen, omgangsregelingen en gezag over kinderen.",
      icon: "Users"
    },
    {
      id: "arbeidsrecht",
      title: "Arbeidsrecht",
      shortDescription: "Arbeidsconflicten, ontslag, arbeidsovereenkomsten en cao-recht.",
      fullDescription: "Of u nu werkgever of werknemer bent, arbeidsrechtelijke kwesties vragen om specialistische kennis. Wij adviseren over arbeidsovereenkomsten, ontslagprocedures, reorganisaties en geschillen op de werkvloer.",
      icon: "Briefcase"
    },
    {
      id: "bestuursrecht",
      title: "Bestuursrecht",
      shortDescription: "Bezwaar en beroep tegen overheidsbesluiten en vergunningen.",
      fullDescription: "Heeft u te maken met een besluit van de overheid waar u het niet mee eens bent? Wij helpen u bij het indienen van bezwaar of beroep en procederen namens u bij de bestuursrechter.",
      icon: "Building"
    },
    {
      id: "huurrecht",
      title: "Huurrecht",
      shortDescription: "Geschillen tussen huurders en verhuurders, huurprijzen en onderhoud.",
      fullDescription: "Het huurrecht kent specifieke regels die zowel huurders als verhuurders beschermen. Wij adviseren over huurovereenkomsten, huurprijsgeschillen, gebreken aan het gehuurde en beëindiging van huurcontracten.",
      icon: "Home"
    }
  ],

  navigation: [
    { label: "Home", path: "/" },
    { label: "Over Ons", path: "/over-ons" },
    { label: "Rechtsgebieden", path: "/rechtsgebieden" },
    { label: "Tarieven", path: "/tarieven" },
    { label: "Contact", path: "/contact" },
  ],

  footerLinks: [
    { label: "Klachtenregeling", path: "/klachtenregeling" },
    { label: "Algemene Voorwaarden", path: "/algemene-voorwaarden" },
    { label: "Tarieven", path: "/tarieven" }
  ]
};
