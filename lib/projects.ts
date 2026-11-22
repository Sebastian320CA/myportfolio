import type { TechRef } from "./tech";

export type ProjectId = "scanner" | "hospitalService" | "monitor" | "ecogrow" | "voting";

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
    videoSrc?: string;
    /** Set to false only when the project has no public source code. */
    sourceAvailable?: boolean;
}

export const PROJECTS: Project[] = [
    {
        id: "scanner",
        youtubeId: "Dhu3PyfF8_c",
        // TODO: add repoUrl once the team repository is known.
        tech: [
            { key: "python" },
            { key: "hexagonal" },
            { key: "docker" },
            { key: "github" },
            { key: "mysql" },
            { key: "jwt" },
        ],
    },
    {
        id: "hospitalService",
        youtubeId: "6_CX0HyXV6Y",
        repoUrl: "https://github.com/Sebastian320CA/hospital-service",
        tech: [
            { key: "java", label: "Java 17" },
            { key: "springBoot" },
            { key: "springSecurity" },
            { key: "thymeleaf" },
            { key: "postgres" },
            { key: "docker" },
            { key: "maven" },
        ],
    },
    {
        id: "monitor",
        youtubeId: "HlBAvJlrCWk",
        repoUrl: "https://github.com/Sebastian320CA/san_rafael",
        tech: [
            { key: "java", label: "Java 21" },
            { key: "springBoot" },
            { key: "thymeleaf" },
            { key: "postgres", label: "PostgreSQL 16" },
            { key: "docker" },
            { key: "gradle" },
            { key: "sonar" },
        ],
    },
    {
        id: "ecogrow",
        youtubeId: "eCQvv3YDWVc",
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
        youtubeId: "xL7WxB5KAAo",
        sourceAvailable: false,
        tech: [
            { key: "react" },
            { key: "node" },
            { key: "typescript" },
            { key: "postgres" },
            { key: "vscode" },
        ],
    },
];
