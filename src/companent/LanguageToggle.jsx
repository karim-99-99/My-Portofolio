import { Link } from "react-router-dom";

/**
 * Switches between English (/) and Arabic (/ar) versions — no mixed language on one page.
 */
export function LanguageToggle({ locale, className = "" }) {
  const target = locale === "en" ? "/ar" : "/";
  const label = locale === "en" ? "العربية" : "English";
  const linkLang = locale === "en" ? "ar" : "en";

  return (
    <Link
      to={target}
      hrefLang={linkLang}
      lang={linkLang}
      className={`inline-flex items-center justify-center rounded-lg border border-teal-500/40 bg-slate-800/60 px-3 py-1.5 text-sm font-semibold text-teal-400 transition-colors hover:border-teal-400 hover:bg-teal-500/10 ${className}`}
    >
      {label}
    </Link>
  );
}
