import type { IconType } from "react-icons";
import {
    FaDesktop,
    FaDocker,
    FaGithub,
    FaJava,
    FaLeaf,
    FaLinux,
    FaLock,
    FaProjectDiagram,
    FaPython,
} from "react-icons/fa";
import {
    SiApachemaven,
    SiGradle,
    SiJsonwebtokens,
    SiMariadb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiSonarqubecloud,
    SiSpringboot,
    SiSpringsecurity,
    SiThymeleaf,
    SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const TECH = {
    java: { name: "Java", Icon: FaJava, color: "text-orange-400" },
    springBoot: { name: "Spring Boot", Icon: SiSpringboot, color: "text-green-400" },
    springSecurity: { name: "Spring Security", Icon: SiSpringsecurity, color: "text-green-500" },
    thymeleaf: { name: "Thymeleaf", Icon: SiThymeleaf, color: "text-emerald-400" },
    postgres: { name: "PostgreSQL", Icon: SiPostgresql, color: "text-sky-400" },
    docker: { name: "Docker", Icon: FaDocker, color: "text-sky-400" },
    gradle: { name: "Gradle", Icon: SiGradle, color: "text-cyan-400" },
    sonar: { name: "SonarQube", Icon: SiSonarqubecloud, color: "text-orange-400" },
    javafx: { name: "JavaFX", Icon: FaDesktop, color: "text-sky-400" },
    mariadb: { name: "MariaDB / MySQL", Icon: SiMariadb, color: "text-teal-400" },
    maven: { name: "Maven", Icon: SiApachemaven, color: "text-red-400" },
    bcrypt: { name: "BCrypt", Icon: FaLock, color: "text-green-400" },
    gof: { name: "GoF Patterns", Icon: FaLeaf, color: "text-lime-400" },
    react: { name: "React", Icon: SiReact, color: "text-cyan-400" },
    node: { name: "Node.js", Icon: SiNodedotjs, color: "text-green-400" },
    typescript: { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400" },
    vscode: { name: "VS Code", Icon: VscCode, color: "text-sky-400" },
    linux: { name: "Linux", Icon: FaLinux, color: "text-yellow-200" },
    mysql: { name: "MySQL", Icon: SiMysql, color: "text-sky-400" },
    jwt: { name: "JWT", Icon: SiJsonwebtokens, color: "text-pink-400" },
    github: { name: "GitHub", Icon: FaGithub, color: "text-white" },
    hexagonal: { name: "Hexagonal Architecture", Icon: FaProjectDiagram, color: "text-accent" },
    python: { name: "Python", Icon: FaPython, color: "text-yellow-400" },
    nextjs: { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
} satisfies Record<string, { name: string; Icon: IconType; color: string }>;

export type TechKey = keyof typeof TECH;

/** A technology reference. `label` overrides the default name (e.g. "Java 21"). */
export type TechRef = { key: TechKey; label?: string };
