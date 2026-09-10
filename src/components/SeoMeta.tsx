import { useEffect } from "react";
import { siteConfig } from "@/lib/seo";

type SeoMetaProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export const SeoMeta = ({
  title,
  description,
  path,
  image = "/og-screenshot.png",
  type = "website",
}: SeoMetaProps) => {
  useEffect(() => {
    const canonicalUrl = `${siteConfig.url}${path}`;

    document.title = `${title} | ${siteConfig.name}`;

    const setOrCreateMeta = (selector: string, attribute: string, value: string) => {
      let tag = document.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }
      tag.setAttribute(attribute, value);
    };

    const ensurePropertyMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const descriptionTag = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }

    const titleTag = document.querySelector("meta[property='og:title']") as HTMLMetaElement | null;
    if (titleTag) {
      titleTag.setAttribute("content", `${title} | ${siteConfig.name}`);
    }

    const descTag = document.querySelector("meta[property='og:description']") as HTMLMetaElement | null;
    if (descTag) {
      descTag.setAttribute("content", description);
    }

    const imageTag = document.querySelector("meta[property='og:image']") as HTMLMetaElement | null;
    if (imageTag) {
      imageTag.setAttribute("content", image);
    }

    const typeTag = document.querySelector("meta[property='og:type']") as HTMLMetaElement | null;
    if (typeTag) {
      typeTag.setAttribute("content", type);
    }

    ensurePropertyMeta("og:title", `${title} | ${siteConfig.name}`);
    ensurePropertyMeta("og:description", description);
    ensurePropertyMeta("og:image", image);
    ensurePropertyMeta("og:type", type);
    ensurePropertyMeta("og:url", canonicalUrl);

    setOrCreateMeta("meta[name='description']", "content", description);
  }, [title, description, path, image, type]);

  return null;
};
