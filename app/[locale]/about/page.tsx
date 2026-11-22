import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaGraduationCap, FaServer, FaTools } from "react-icons/fa";
import SectionHeading from "../../components/SectionHeading";

const HIGHLIGHTS = [
    { key: "education", Icon: FaGraduationCap },
    { key: "build", Icon: FaServer },
    { key: "learning", Icon: FaTools },
] as const;

type Props = { params: Promise<{ locale: string }> };

export default async function About({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("about");

    const tags = {
        name: (chunks: React.ReactNode) => (
            <span className="font-semibold text-white">{chunks}</span>
        ),
        hl: (chunks: React.ReactNode) => (
            <span className="font-medium text-accent">{chunks}</span>
        ),
    };

    return (
        <main className="container mx-auto max-w-4xl px-6 py-16">
            <SectionHeading label={t("label")} title={t("title")} />

            <div className="space-y-6 text-lg leading-relaxed text-soft">
                <p>{t.rich("p1", tags)}</p>
                <p>{t("p2")}</p>
                <p>{t("p3")}</p>
                <p>{t("p4")}</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {HIGHLIGHTS.map(({ key, Icon }) => (
                    <div
                        key={key}
                        className="rounded-lg border border-line bg-panel p-5"
                    >
                        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                        <h2 className="mt-3 font-semibold text-white">
                            {t(`highlights.${key}.title`)}
                        </h2>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                            {t(`highlights.${key}.text`)}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}
