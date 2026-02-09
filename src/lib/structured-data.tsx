import { STORE, SITE_URL } from "./constants";

const FAQ_ITEMS = [
  {
    question: "Where is Global Telecom located in Panipat?",
    answer:
      "Global Telecom is located at Barsat Road, Noorwala Adda, Main Chowk, Near Pahwa Sweets, Panipat, Haryana 132103, India. We are easily accessible from the main market area.",
  },
  {
    question: "What brands does Global Telecom sell?",
    answer: `We are authorized dealers for ${STORE.brands.join(", ")} and more. Our inventory includes the latest smartphones, TVs, home appliances, and accessories from these brands.`,
  },
  {
    question: "Does Global Telecom offer EMI options?",
    answer:
      "Yes, we offer easy EMI options through Bajaj Finance. You can purchase smartphones, TVs, and appliances on convenient monthly installments. Visit the store with your documents for instant EMI approval.",
  },
  {
    question: "What are the store hours for Global Telecom?",
    answer:
      "Global Telecom is open every day from 10:00 AM to 9:00 PM, including weekends and most holidays. We recommend calling ahead on major holidays to confirm hours.",
  },
  {
    question: "Does Global Telecom provide warranty on products?",
    answer:
      "Yes, all products sold at Global Telecom come with official manufacturer warranty. We also assist with warranty claims and after-sales support for any issues you may face.",
  },
  {
    question: "How can I check product availability at Global Telecom?",
    answer: `Stock changes frequently. The fastest way to check availability is to call us at ${STORE.phone} or send a WhatsApp message. We'll confirm stock and pricing instantly.`,
  },
  {
    question: "क्या Global Telecom में EMI की सुविधा उपलब्ध है?",
    answer:
      "हाँ, हम Bajaj Finance के माध्यम से आसान EMI विकल्प प्रदान करते हैं। आप स्मार्टफोन, टीवी और उपकरण मासिक किस्तों पर खरीद सकते हैं। तुरंत EMI मंजूरी के लिए अपने दस्तावेज़ लेकर स्टोर पर आएं।",
  },
  {
    question: "Global Telecom पानीपत में कहाँ स्थित है?",
    answer:
      "Global Telecom बरसात रोड, नूरवाला अड्डा, मेन चौक, पहवा स्वीट्स के पास, पानीपत, हरियाणा 132103 में स्थित है। हम मुख्य बाज़ार क्षेत्र से आसानी से पहुँचा जा सकता है।",
  },
];

export { FAQ_ITEMS };

function jsonLdScript(data: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectronicsStore"],
    name: STORE.name,
    description:
      "Trusted electronics and mobile store in Panipat, Haryana since 1997. Authorized dealer for Samsung, Apple, Vivo, Oppo, OnePlus, Xiaomi and more. Smartphones, LED TVs, home appliances, and accessories with EMI options.",
    url: SITE_URL,
    telephone: STORE.phone,
    image: [
      `${SITE_URL}/images/shop-front.jpg`,
      `${SITE_URL}/images/shop-interior.jpg`,
      `${SITE_URL}/images/logo.png`,
    ],
    logo: `${SITE_URL}/images/logo.png`,
    priceRange: STORE.priceRange,
    foundingDate: `${STORE.foundingYear}`,
    founder: STORE.founders.map((name) => ({
      "@type": "Person",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE.streetAddress,
      addressLocality: STORE.city,
      addressRegion: STORE.state,
      postalCode: STORE.postalCode,
      addressCountry: STORE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: STORE.latitude,
      longitude: STORE.longitude,
    },
    openingHoursSpecification: STORE.openingHours.map((schedule) =>
      schedule.days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: schedule.opens,
        closes: schedule.closes,
      }))
    ).flat(),
    brand: STORE.brands.map((name) => ({
      "@type": "Brand",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electronics & Mobile Products",
      itemListElement: STORE.productCategories.map((category) => ({
        "@type": "OfferCatalog",
        name: category,
      })),
    },
    paymentAccepted: STORE.paymentMethods.join(", "),
    currenciesAccepted: "INR",
    sameAs: [STORE.instagramUrl, STORE.facebookUrl],
    areaServed: {
      "@type": "City",
      name: "Panipat",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: STORE.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: STORE.phone,
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [STORE.instagramUrl, STORE.facebookUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: STORE.name,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: STORE.name,
    },
    inLanguage: ["en-IN", "hi-IN"],
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${STORE.name} | Electronics & Mobile Store in Panipat`,
    url: SITE_URL,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#shop h1", "#about h2", "#faq"],
    },
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  return (
    <>
      {jsonLdScript(localBusiness)}
      {jsonLdScript(organization)}
      {jsonLdScript(website)}
      {jsonLdScript(webpage)}
      {jsonLdScript(faqPage)}
      {jsonLdScript(breadcrumb)}
    </>
  );
}
