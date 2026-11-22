"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LanguageSwitcher = () => {
    const t = useTranslations("nav");
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div
            role="group"
            aria-label={t("language")}
            className="inline-flex items-center rounded-md border border-line p-0.5 font-mono text-xs"
        >
            {routing.locales.map((code) => {
                const active = code === locale;
                return (
                    <button
                        key={code}
                        type="button"
                        lang={code}
                        aria-pressed={active}
                        onClick={() => router.replace(pathname, { locale: code })}
                        className={`rounded px-2 py-1 uppercase transition-colors ${
                            active
                                ? "bg-accent text-ink font-semibold"
                                : "text-muted hover:text-white"
                        }`}
                    >
                        {code}
                    </button>
                );
            })}
        </div>
    );
};

export default LanguageSwitcher;
