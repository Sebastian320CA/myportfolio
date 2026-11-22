import type { TechRef } from "./tech";

export type ProjectId = "hospitalService" | "monitor" | "ecogrow" | "voting";

export interface Project {
    id: ProjectId;
    tech: TechRef[];
    repoUrl?: string;
    /**
     * Preferred: the YouTube video ID (unlisted is fine). When set, the project
     * embeds YouTube and the local file is no longer needed.
     */
    youtubeId?: string;
    /** Fallback while there is no YouTube ID. */
    videoSrc: string;
}

export const PROJECTS: Project[] = [
    {
        id: "hospitalService",
        videoSrc: "/ServiceHospital.mp4",
        repoUrl: "https://github.com/Sebastian320CA/hospital-service",
        tech: [
            { key: "java" },
            { key: "springBoot" },
            { key: "springSecurity" },
            { key: "thymeleaf" },
            { key: "postgres" },
            { key: "docker" },
        ],
    },
    {
        id: "monitor",
        videoSrc: "/ServiciosFinal.mp4",
        repoUrl: "https://github.com/Sebastian320CA/san_rafael",
        tech: [
            { key: "java", label: "Java 21" },
            { key: "springBoot" },
            { key: "postgres", label: "PostgreSQL 16" },
            { key: "docker" },
            { key: "gradle" },
            { key: "sonar" },
        ],
    },
    {
        id: "ecogrow",
        videoSrc: "/EcoGrow.mp4",
        repoUrl: "https://github.com/Sebastian320CA/areas-de-vida",
        tech: [
            { key: "java", label: "Java 25" },
            { key: "javafx" },
            { key: "mariadb" },
            { key: "maven" },
            { key: "bcrypt" },
            { key: "gof" },
        ],
    },
    {
        id: "voting",
        videoSrc: "/VotingSystem.mp4",
        tech: [
            { key: "react" },
            { key: "node" },
            { key: "typescript" },
            { key: "postgres" },
            { key: "vscode" },
        ],
    },
];
