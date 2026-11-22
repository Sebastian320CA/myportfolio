import { getTranslations, setRequestLocale } from "next-intl/server";
import {
    FaBriefcase,
    FaEnvelope,
    FaFilePdf,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaWhatsapp,
} from "react-icons/fa";
import { Link } from "@/i18n/navigation";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";
import type { TechRef } from "@/lib/tech";
import TechChip from "../components/TechChip";

const MAIN_STACK: TechRef[] = [
    { key: "java" },
    { key: "springBoot" },
    { key: "postgres" },
    { key: "docker" },
    { key: "linux" },
];

const ALSO_STACK: TechRef[] = [
    { key: "typescript" },
    { key: "nextjs" },
    { key: "python" },
];

const secondaryButton =
    "inline-flex items-center gap-2 rounded-md border border-line bg-panel px-4 py-2.5 text-sm font-medium text-soft transition-colors hover:border-accent/50 hover:text-white";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("home");

    const monitor = PROJECTS.find((p) => p.id === "monitor")!;
    const highlights = t.raw("featured.highlights") as string[];
    const whatsappUrl = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(
        t("whatsappMessage"),
    )}`;

    return (
        <main className="overflow-x-hidden">
            {/* HERO */}
            <section className="relative">
                <div
                    className="bg-grid pointer-events-none absolute inset-0"
                    aria-hidden="true"
                />
                <div className="container relative mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[calc(100vh-64px)] lg:grid-cols-[1.15fr_1fr] lg:py-20">
                    <div className="flex flex-col gap-6">
                        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-soft">
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            {t("openTo")}
                        </p>

                        <div>
                            <p className="font-mono text-sm text-muted">{t("greeting")}</p>
                            <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-6xl">
                                {SITE.name}
                            </h1>
                            <p className="mt-3 text-xl font-semibold text-accent sm:text-3xl">
                                {t("role")}
                            </p>
                        </div>

                        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                            {t("intro")}
                        </p>

                        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                            <span className="inline-flex items-center gap-1.5">
                                <FaBriefcase className="h-3.5 w-3.5" aria-hidden="true" />
                                {t("student")}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <FaMapMarkerAlt className="h-3.5 w-3.5" aria-hidden="true" />
                                {t("location")}
                            </span>
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={`mailto:${SITE.email}`}
                                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                            >
                                <FaEnvelope className="h-4 w-4" aria-hidden="true" />
                                {t("emailCta")}
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t("whatsappLabel")}
                                className={secondaryButton}
                            >
                                <FaWhatsapp className="h-4 w-4 text-accent" aria-hidden="true" />
                                {t("whatsappCta")}
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={SITE.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={secondaryButton}
                            >
                                <FaGithub className="h-4 w-4" aria-hidden="true" />
                                GitHub
                            </a>
                            <a
                                href={SITE.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={secondaryButton}
                            >
                                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                                LinkedIn
                            </a>
                            <a
                                href={SITE.cvEn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={secondaryButton}
                            >
                                <FaFilePdf className="h-4 w-4" aria-hidden="true" />
                                {t("cvEn")}
                            </a>
                            <a
                                href={SITE.cvEs}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={secondaryButton}
                            >
                                <FaFilePdf className="h-4 w-4" aria-hidden="true" />
                                {t("cvEs")}
                            </a>
                        </div>
                    </div>

                    {/* Terminal card */}
                    <div
                        className="w-full max-w-lg justify-self-center overflow-hidden rounded-lg border border-line bg-panel shadow-2xl shadow-black/40 lg:justify-self-end"
                        aria-hidden="true"
                    >
                        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-line" />
                            <span className="h-2.5 w-2.5 rounded-full bg-line" />
                            <span className="h-2.5 w-2.5 rounded-full bg-line" />
                            <span className="ml-3 font-mono text-xs text-muted">
                                ~/sebastian
                            </span>
                        </div>
                        <div className="space-y-1 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
                            <p>
                                <span className="text-accent">$</span> whoami
                            </p>
                            <p className="text-soft">sebastian-cetina</p>
                            <p className="pt-3">
                                <span className="text-accent">$</span> cat {t("terminal.stackFile")}
                            </p>
                            <p className="text-soft">java · spring-boot · postgresql</p>
                            <p className="text-soft">docker · linux · gradle</p>
                            <p className="pt-3">
                                <span className="text-accent">$</span> ls projects/
                            </p>
                            <p className="text-soft">hospital-service/  san_rafael/  areas-de-vida/</p>
                            <p className="pt-3">
                                <span className="text-accent">$</span> status
                            </p>
                            <p className="text-accent">● {t("terminal.status")}</p>
                            <p>
                                <span className="text-accent">$</span>{" "}
                                <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-soft motion-reduce:animate-none" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* STACK */}
            <section className="container mx-auto px-4 py-12 sm:px-6">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {"// "}
                    {t("stack.label")}
                </span>
                <div className="mt-6 space-y-5">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                        <h2 className="text-sm text-muted lg:w-40 lg:shrink-0">
                            {t("stack.main")}
                        </h2>
                        <ul className="flex flex-wrap gap-2">
                            {MAIN_STACK.map((tech) => (
                                <TechChip key={tech.key} tech={tech} />
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                        <h2 className="text-sm text-muted lg:w-40 lg:shrink-0">
                            {t("stack.also")}
                        </h2>
                        <ul className="flex flex-wrap gap-2">
                            {ALSO_STACK.map((tech) => (
                                <TechChip key={tech.key} tech={tech} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECT */}
            <section className="container mx-auto px-4 py-12 sm:px-6">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {"// "}
                    {t("featured.label")}
                </span>
                <article className="mt-6 grid gap-8 rounded-lg border border-line bg-panel p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            {t("featured.title")}
                        </h2>
                        <p className="mt-3 leading-relaxed text-muted">
                            {t("featured.description")}
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                            {monitor.tech.map((tech) => (
                                <TechChip key={tech.key} tech={tech} />
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {monitor.repoUrl && (
                                <a
                                    href={monitor.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                                >
                                    <FaGithub className="h-4 w-4" aria-hidden="true" />
                                    {t("featured.repo")}
                                </a>
                            )}
                            <Link href="/projects" className={secondaryButton}>
                                {t("featured.viewAll")}
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                            {t("featured.highlightsTitle")}
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {highlights.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-relaxed text-soft">
                                    <span className="mt-0.5 font-mono text-accent" aria-hidden="true">
                                        &gt;
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>

            {/* CONTACT */}
            <section className="container mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6">
                <div className="rounded-lg border border-line bg-panel p-8 text-center sm:p-10">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {t("contact.title")}
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-muted">
                        {t("contact.text")}
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
                        <a
                            href={`mailto:${SITE.email}`}
                            className="inline-flex items-center gap-2 font-medium text-accent transition-opacity hover:opacity-80"
                        >
                            <FaEnvelope className="h-4 w-4" aria-hidden="true" />
                            {SITE.email}
                        </a>
                        <a
                            href={SITE.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-medium text-accent transition-opacity hover:opacity-80"
                        >
                            <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
