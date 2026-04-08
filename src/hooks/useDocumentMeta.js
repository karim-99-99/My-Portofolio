import { useEffect } from "react";
import { getTranslation } from "../i18n/translations";

const SITE = "https://www.karimkhamis.com";

/**
 * Sets html lang/dir and primary meta tags when the route language changes.
 */
export function useDocumentMeta(locale) {
  useEffect(() => {
    const seo = getTranslation(locale).seo;
    const root = document.documentElement;
    root.lang = locale === "ar" ? "ar" : "en";
    root.dir = locale === "ar" ? "rtl" : "ltr";

    document.title = seo.title;

    const setAttr = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setAttr('meta[name="description"]', "content", seo.description);
    setAttr('link[rel="canonical"]', "href", `${SITE}${seo.canonicalPath}`);
    setAttr('meta[property="og:title"]', "content", seo.ogTitle);
    setAttr('meta[property="og:description"]', "content", seo.ogDescription);
    setAttr('meta[property="og:url"]', "content", `${SITE}${seo.canonicalPath}`);
    setAttr('meta[name="twitter:title"]', "content", seo.ogTitle);
    setAttr('meta[name="twitter:description"]', "content", seo.ogDescription);
  }, [locale]);
}
