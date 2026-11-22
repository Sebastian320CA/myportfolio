import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "es"],
    defaultLocale: "en",
    // English keeps the existing URLs (/, /projects). Spanish lives under /es.
    localePrefix: "as-needed",
});
