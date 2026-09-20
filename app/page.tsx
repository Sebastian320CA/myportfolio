import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaJava, FaPython, FaDocker, FaLinux } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiNextdotjs, SiTypescript } from "react-icons/si";

const Page = () => {
    // Definimos las tecnologías como objetos con su respectivo icono
    const technologies = [
        { name: "Java", icon: <FaJava className="text-red-400 w-4 h-4" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400 w-4 h-4" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400 w-4 h-4" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 w-4 h-4" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500 w-4 h-4" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white w-4 h-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400 w-4 h-4" /> },
        { name: "Linux", icon: <FaLinux className="text-yellow-200 w-4 h-4" /> },
    ];

    return (
        <main className="bg-gray-900 text-white">
            <section className="min-h-[calc(100vh-80px)] flex items-center">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
                    <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <div>
                            <span className="text-base font-medium text-blue-400">
                                Systems Engineering Student
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            Hi, I'm{" "}
                            <span className="text-blue-400">
                                Sebastian Cetina
                            </span>
                        </h1>

                        <p className="text-2xl sm:text-3xl font-semibold text-gray-200">
                            Backend Developer
                        </p>

                        <p className="text-gray-400 text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Focused on building maintainable backend applications
                            with Java and Spring Boot, with an interest in software
                            architecture, Linux and DevOps.
                        </p>

                        {/* Botones de contacto y redes directas */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                            <a
                                href="https://github.com/Sebastian320CA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-700 transition-colors"
                            >
                                <FaGithub className="w-4 h-4 text-blue-400" />
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sebastian-ba23722b8/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-700 transition-colors"
                            >
                                <FaLinkedin className="w-4 h-4 text-blue-400" />
                                LinkedIn
                            </a>

                            <a
                                href="mailto:sebastian022231@gmail.com"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            >
                                <FaEnvelope className="w-4 h-4" />
                                Contact Me
                            </a>
                        </div>

                        {/* Tecnologías con sus respectivos iconos */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2 pt-2">
                            {technologies.map((tech) => (
                                <span 
                                    key={tech.name} 
                                    className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-md text-sm border border-gray-700 text-gray-300"
                                >
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
                            <div className="relative">
                                <Image
                                    src="/Logo.png"
                                    alt="Sebastian Dev Logo"
                                    width={280}
                                    height={280}
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <span className="text-base font-medium text-blue-400">
                            About Me
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                            A little about me
                        </h2>
                        <p className="text-gray-400 text-xl leading-relaxed mt-6">
                            I'm a Systems Engineering student focused on backend development.
                            I enjoy building applications with Java and learning about software
                            architecture, Linux, and currently I'm learning about DevOps and Cloud computing.
                        </p>
                    </div>

                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <span className="text-base font-medium text-blue-400">
                            How I Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                            Always learning and improving
                        </h2>
                        <p className="text-gray-400 text-xl leading-relaxed mt-6">
                            I like understanding how things work under the hood and continuously
                            improving my technical skills through real projects and challenges.
                            I also enjoy collaborating with others and sharing knowledge.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div>
                        <span className="text-base font-medium text-blue-400">
                            Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                            Featured Project
                        </h2>
                        <p className="text-gray-400 text-lg mt-2 max-w-xl">
                            A quick look at one of my core backend projects. Check out the projects page to see more.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                            View all projects →
                        </Link>
                    </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                        Backend · Observability
                    </span>
                    <h3 className="text-2xl font-bold mt-2 text-white">
                        Operational Status Monitoring System
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed mt-3">
                        Platform designed to centralize and monitor critical hospital infrastructure using Hexagonal Architecture.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/projects"
                            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                        >
                            Watch Demo & Details
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 pb-16 text-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gray-800/30 border border-gray-800 px-6 py-4 rounded-xl text-sm text-gray-400">
                    <span>Web portfolio built with</span>
                    <span className="text-blue-400 font-medium inline-flex items-center gap-1"><SiNextdotjs className="w-3.5 h-3.5" /> Next.js</span>
                    <span>·</span>
                    <span className="text-blue-400 font-medium inline-flex items-center gap-1"><SiTypescript className="w-3.5 h-3.5" /> TypeScript</span>
                    <span>·</span>
                    <span className="text-blue-400 font-medium inline-flex items-center gap-1">Tailwind CSS</span>
                </div>
            </section>
        </main>
    );
};

export default Page;