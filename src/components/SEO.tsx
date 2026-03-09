import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
  hreflang?: { lang: string; href: string }[];
}

const defaultHreflang = (path: string) => [
  { lang: "en", href: `https://seashelltrips.com${path}` },
  { lang: "it", href: `https://seashelltrips.com${path}?lang=it` },
  { lang: "de", href: `https://seashelltrips.com${path}?lang=de` },
  { lang: "pl", href: `https://seashelltrips.com${path}?lang=pl` },
  { lang: "x-default", href: `https://seashelltrips.com${path}` },
];

const SEO = ({ title, description, canonical, jsonLd, ogImage, hreflang }: SEOProps) => {
  const path = canonical?.replace("https://seashelltrips.com", "") || "/";
  const langs = hreflang || defaultHreflang(path);
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Seashell Trips" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="it_IT" />
      <meta property="og:locale:alternate" content="de_DE" />
      <meta property="og:locale:alternate" content="pl_PL" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="geo.region" content="EG" />
      <meta name="geo.placename" content="Marsa Alam" />
      {langs.map(l => (
        <link key={l.lang} rel="alternate" hrefLang={l.lang} href={l.href} />
      ))}
      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
