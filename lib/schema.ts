const baseUrl = process.env.NEXT_PUBLIC_URL || "https://bidropproduction.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "BiDrop Production",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description:
        "Kontraktor booth event profesional dan jasa desain booth pameran terpercaya di Indonesia.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+6281234567890",
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["Indonesian"],
        },
      ],
    },
    {
      "@type": "WebSite",
      name: "BiDrop Production",
      url: baseUrl,
    },
  ],
};

export const homeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BiDrop Production",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  image: `${baseUrl}/og.jpg`,
  description:
    "BiDrop Production adalah kontraktor booth event profesional dan jasa desain booth pameran terpercaya di Indonesia.",
  telephone: process.env.NEXT_PUBLIC_TLP || "+6281234567890",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  areaServed: "Indonesia",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Jasa Pembuatan Booth Event" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Jasa Desain Booth Pameran" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pembuatan Stage dan Backdrop",
        },
      },
    ],
  },
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Kontak BiDrop Production",
      url: `${baseUrl}/kontak`,
      description:
        "Hubungi BiDrop Production untuk konsultasi jasa booth event, desain pameran, dan produksi stage profesional.",
      mainEntity: {
        "@type": "Organization",
        name: "BiDrop Production",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: process.env.NEXT_PUBLIC_TLP || "+6281234567890",
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: ["Indonesian"],
          },
        ],
      },
    },
  ],
};

export const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Galeri Proyek BiDrop Production",
      url: `${baseUrl}/galeri`,
      description:
        "Galeri dokumentasi hasil desain dan pengerjaan booth event profesional dari BiDrop Production untuk berbagai brand dan pameran.",
      isPartOf: {
        "@type": "WebSite",
        name: "BiDrop Production",
        url: baseUrl,
      },
      mainEntity: {
        "@type": "ImageGallery",
        name: "Galeri Proyek",
        description:
          "Dokumentasi hasil pekerjaan booth exhibition, stage production, dan event setup.",
      },
    },
  ],
};

export const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "Tentang BiDrop Production",
      url: `${baseUrl}/tentang`,
      description:
        "Pelajari profil BiDrop Production, kontraktor booth event profesional dan jasa desain pameran terpercaya di Indonesia.",
      mainEntity: {
        "@type": "Organization",
        name: "BiDrop Production",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description:
          "BiDrop Production adalah perusahaan kontraktor booth event, desain pameran, dan produksi stage profesional di Indonesia.",
        areaServed: "Indonesia",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: process.env.NEXT_PUBLIC_TLP || "+6281234567890",
            contactType: "customer service",
            availableLanguage: ["Indonesian"],
          },
        ],
      },
    },
  ],
};

export const product1Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Booth Event Exhibition",
      provider: {
        "@type": "Organization",
        name: "BiDrop Production",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
      },
      url: `${baseUrl}/booth-event-exhibition`,
      description:
        "Layanan pembuatan booth event exhibition profesional meliputi desain, produksi, instalasi, dan branding booth pameran.",
      areaServed: "Indonesia",
      serviceType: "Pembuatan Booth Pameran",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "IDR",
        url: `${baseUrl}/booth-event-exhibition`,
      },
    },

    {
      "@type": "Product",
      name: "Booth Exhibition Custom",
      description:
        "Booth pameran custom desain sesuai branding perusahaan untuk event, expo, dan pameran.",
      brand: {
        "@type": "Brand",
        name: "BiDrop Production",
      },
      image: `${baseUrl}/Booth Event Exhibition/Booth Event Exhibition (1).png`,
    },
  ],
};

export const product2Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Jasa Stage & Backdrop Event",
      provider: {
        "@type": "Organization",
        name: "BiDrop Production",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
      },
      url: `${baseUrl}/stage-&-backdrop-event`,
      description:
        "Layanan pembuatan stage dan backdrop event profesional meliputi desain, produksi, konstruksi, dan instalasi untuk berbagai acara.",
      areaServed: "Indonesia",
      serviceType: "Pembuatan Stage dan Backdrop Event",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "IDR",
        url: `${baseUrl}/stage-&-backdrop-event`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Jenis Layanan",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Stage Event Custom",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Backdrop Event Branding",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Panggung Seminar & Konser",
            },
          },
        ],
      },
    },

    {
      "@type": "Product",
      name: "Stage dan Backdrop Event Custom",
      image: `${baseUrl}/Stage & Backdrop/Stage dan Backdrop Event (1).png`,
      description:
        "Stage dan backdrop event custom desain sesuai kebutuhan acara seperti seminar, konser, launching produk, dan event perusahaan.",
      brand: {
        "@type": "Brand",
        name: "BiDrop Production",
      },
    },
  ],
};

export const product3Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Booth Event Exhibition",
      provider: {
        "@type": "Organization",
        name: "BiDrop Production",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
      },
      url: `${baseUrl}/booth-event-exhibition`,
      description:
        "Layanan pembuatan booth event exhibition profesional meliputi desain, produksi, instalasi, dan branding booth pameran.",
      areaServed: "Indonesia",
      serviceType: "Pembuatan Booth Pameran",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "IDR",
        url: `${baseUrl}/booth-event-exhibition`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Jenis Booth",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Booth Custom",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Booth Modular",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Booth Portable",
            },
          },
        ],
      },
    },

    {
      "@type": "Product",
      name: "Booth Exhibition Custom",
      image: `${baseUrl}/Booth Event Exhibition/Booth Event Exhibition (1).png`,
      description:
        "Booth pameran custom desain sesuai branding perusahaan untuk event, expo, dan pameran.",
      brand: {
        "@type": "Brand",
        name: "BiDrop Production",
      },
    },
  ],
};
