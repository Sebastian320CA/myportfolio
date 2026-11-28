import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/lib/projects";
import ProjectMedia from "../../components/ProjectMedia";
import SectionHeading from "../../components/SectionHeading";
import TechChip from "../../components/TechChip";

type Props = { params: Promise<{ locale: string }> };

export default async function Projects({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("projects");

    return (
        <main className="container mx-auto max-w-5xl px-6 py-16">
            <SectionHeading
                label={t("label")}
                title={t("title")}
                intro={t("intro")}
            />

            <div className="grid grid-cols-1 gap-10">
                {PROJECTS.map((project, index) => {
                    const title = t(`items.${project.id}.title`);

                    return (
                        <article
                            key={project.id}
                            className="overflow-hidden rounded-lg border border-line bg-panel transition-colors hover:border-accent/40"
                        >
                            <ProjectMedia
                                project={project}
                                title={t("videoTitle", { title })}
                            />

                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
                                    <span className="text-accent">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-muted">
                                        {t(`items.${project.id}.kind`)}
                                    </span>
                                </div>

                                <h2 className="mt-2 text-2xl font-bold tracking-tight">
                                    {title}
                                </h2>

                                <p className="mt-3 leading-relaxed text-muted">
                                    {t(`items.${project.id}.description`)}
                                </p>

                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <TechChip key={tech.key} tech={tech} />
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    {project.repoUrl ? (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                                        >
                                            <FaGithub className="h-4 w-4" aria-hidden="true" />
                                            {t("repo")}
                                        </a>
                                    ) : project.sourceAvailable === false ? (
                                        <span className="inline-block rounded-md border border-line px-3 py-2 text-xs italic text-muted">
                                            {t("videoOnly")}
                                        </span>
                                    ) : null}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </main>
    );
}
