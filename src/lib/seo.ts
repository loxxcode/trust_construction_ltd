export const siteConfig = {
  name: "Trust Construction Company",
  shortName: "Trust Construction",
  url: "https://www.trustconstructionltd.com",
  logo: "https://www.trustconstructionltd.com/assets/logo.jpeg",
  email: "trustconstructionltd@outlook.com",
  phone: "+250 788 302 678",
  address: {
    streetAddress: "Chez John Building, Kicukiro, Kigali",
    addressLocality: "Kigali",
    addressRegion: "Kigali City",
    postalCode: "00000",
    addressCountry: "RW",
  },
  branches: [
    {
      location: "Kigali, Rwanda",
      branchName: "Kicukiro Branch",
      address: "Chez John Building, Kicukiro, Kigali",
    },
    {
      location: "Kigali, Rwanda",
      branchName: "Gisozi Branch",
      address: "Companion House Room #7, Gisozi, Kigali",
    },
  ],
};

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export type ProductSchemaInput = {
  name: string;
  description: string;
  image: string;
  category: string;
  brand?: string;
};

export const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: siteConfig.logo,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [
    "https://web.facebook.com/profile.php?id=61593990112440",
    "https://x.com/trust_construct",
    "https://www.instagram.com/trust_constructionltd/",
    "https://www.youtube.com/@trustconstructionltd",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
});

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  image: siteConfig.logo,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "$$",
  areaServed: "RW",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  sameAs: buildOrganizationSchema().sameAs,
});

export const buildProductSchema = (product: ProductSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  category: product.category,
  brand: {
    "@type": "Brand",
    name: product.brand ?? siteConfig.name,
  },
  manufacturer: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: "Rwanda",
});

export const buildPageMeta = ({ title, description, path }: PageMetaInput) => ({
  title: `${title} | ${siteConfig.name}`,
  description,
  canonical: `${siteConfig.url}${path}`,
  path,
});

export const buildWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: "Building materials, flooring, lighting, sanitary ware, and interior decoration supplies in Rwanda.",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
});
