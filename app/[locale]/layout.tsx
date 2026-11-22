import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
});

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: Pick<Props, "params">): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });

    return {
        metadataBase: new URL(SITE.url),
        title: t("title"),
        description: t("description"),
        alternates: {
            languages: { en: "/", es: "/es" },
        },
        openGraph: {
            type: "website",
            siteName: SITE.name,
            title: t("title"),
            description: t("description"),
            locale: locale === "es" ? "es_CO" : "en_US",
        },
        twitter: { card: "summary_large_image" },
    };
}

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);

    return (
        <html lang={locale} className={`${inter.variable} ${jetbrains.variable}`}>
            <body className="font-sans antialiased">
                <NextIntlClientProvider>
                    <NavBar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
