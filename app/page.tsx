import Image from "next/image";
import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaJava,
    FaPython,
    FaDocker,
    FaLinux,
    FaFilePdf,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaBriefcase,
} from "react-icons/fa";
import {
    SiSpringboot,
    SiPostgresql,
    SiNextdotjs,
    SiTypescript,
} from "react-icons/si";

const OPEN_TO: string | null =
    "Open to internships and junior backend roles, in Colombia or remote.";

const EMAIL = "sebastian022231@gmail.com";
const WHATSAPP_URL =
    "https://wa.me/573213554709?text=Hola%20Sebastian%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo.";

const mainStack = [
    { name: "Java", icon: <FaJava className="text-red-400 w-4 h-4" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-400 w-4 h-4" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 w-4 h-4" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500 w-4 h-4" /> },
    { name: "Linux", icon: <FaLinux className="text-yellow-200 w-4 h-4" /> },
];

const alsoWorkingWith = [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 w-4 h-4" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white w-4 h-4" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400 w-4 h-4" /> },
];

const featured = {
    title: "Hospital Operational Status Monitor",
    description:
        "Monitoring system for the critical platforms of a university hospital. It checks the availability of Admissions, Laboratory and Medical Records, and calculates the hospital's overall severity level in real time.",
    highlights: [
        "Hexagonal architecture (ports and adapters) to keep business rules independent from the database and the UI",
        "Dockerized PostgreSQL, with SonarQube for static code analysis",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL 16", "Docker", "Gradle", "SonarQube"],
    repoUrl: "https://github.com/Sebastian320CA/san_rafael",
};

const secondaryButton =
    "inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-700 transition-colors";

const Chip = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
    <li className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-md text-xs sm:text-sm border border-gray-700 text-gray-300">
        {icon}
        {name}
    </li>
);

const Page = () => {
    return (
        <main className="bg-gray-900 text-white min-h-screen overflow-x-hidden">

            {/* HERO */}
            <section className="min-h-[calc(100vh-80px)] flex items-center">
                <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16">

                    <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1 w-full max-w-full">

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-sm sm:text-base">
                            <span className="font-medium text-blue-400">
                                Systems Engineering Student
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-gray-400">
                                <FaMapMarkerAlt className="w-3.5 h-3.5" aria-hidden="true" />
                                Bogotá, Colombia
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
                            Hi, I&apos;m{" "}
                            <span className="text-blue-400">Sebastian Cetina</span>
                        </h1>

                        <p className="text-xl sm:text-3xl font-semibold text-gray-200">
                            Backend Developer
                        </p>

                        <p className="text-gray-400 text-base sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed break-words">
                            I build maintainable backend applications with Java and
                            Spring Boot, with a focus on software architecture,
                            databases, Linux and DevOps practices.
                        </p>

                        {OPEN_TO && (
                            <p className="inline-flex items-center gap-2 self-center lg:self-start rounded-lg border border-gray-700 bg-gray-800/60 px-4 py-2 text-sm text-gray-300">
                                <FaBriefcase className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                                {OPEN_TO}
                            </p>
                        )}

                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                            <a
                                href={`mailto:${EMAIL}`}
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            >
                                <FaEnvelope className="w-4 h-4" aria-hidden="true" />
                                Email me
                            </a>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat with me on WhatsApp"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            >
                                <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                                WhatsApp
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                            <a
                                href="https://github.com/Sebastian320CA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={secondaryButton}
                            >
                                <FaGithub className="w-4 h-4 text-blue-400" aria-hidden="true" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sebastian-ba23722b8/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={secondaryButton}
                            >
                                <FaLinkedin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                                LinkedIn
                            </a>
                            <a
                                href="/CVResumeSebastianCetina.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={secondaryButton}
                            >
                                <FaFilePdf className="w-4 h-4 text-red-400" aria-hidden="true" />
                                CV (English)
                            </a>
                            <a
                                href="/CVHojaSebastianCetina.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={secondaryButton}
                            >
                                <FaFilePdf className="w-4 h-4 text-red-400" aria-hidden="true" />
                                CV (Español)
                            </a>
                        </div>

                        <div className="space-y-3 pt-2">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                                <span className="text-xs text-gray-500 lg:w-28 lg:shrink-0 lg:text-left">
                                    Main stack
                                </span>
                                <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
                                    {mainStack.map((t) => <Chip key={t.name} {...t} />)}
                                </ul>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                                <span className="text-xs text-gray-500 lg:w-28 lg:shrink-0 lg:text-left">
                                    Also working with
                                </span>
                                <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
                                    {alsoWorkingWith.map((t) => <Chip key={t.name} {...t} />)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center order-1 lg:order-2 w-full">
                        <div className="relative w-full max-w-[180px] sm:max-w-[240px] lg:max-w-[280px] aspect-square">
                            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src="/Logo.png"
                                    alt="Sebastian Cetina logo"
                                    width={280}
                                    height={280}
                                    priority
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 pb-20 max-w-4xl">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 sm:p-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold">Let&apos;s talk</h2>
                    <p className="text-gray-400 mt-3 max-w-xl mx-auto">
                        If you have an opportunity, a question about my projects, or
                        just want to say hi, write to me.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <FaEnvelope className="w-4 h-4" aria-hidden="true" />
                            {EMAIL}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sebastian-ba23722b8/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <FaLinkedin className="w-4 h-4" aria-hidden="true" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Page;