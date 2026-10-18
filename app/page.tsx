import Image from "next/image";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaJava,
    FaPython,
    FaDocker,
    FaLinux,
    FaFilePdf,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiPostgresql,
    SiNextdotjs,
    SiTypescript,
} from "react-icons/si";

const Page = () => {
    const technologies = [
        {
            name: "Java",
            icon: <FaJava className="text-red-400 w-4 h-4" />,
        },
        {
            name: "Spring Boot",
            icon: <SiSpringboot className="text-green-400 w-4 h-4" />,
        },
        {
            name: "PostgreSQL",
            icon: <SiPostgresql className="text-blue-400 w-4 h-4" />,
        },
        {
            name: "Docker",
            icon: <FaDocker className="text-blue-500 w-4 h-4" />,
        },
        {
            name: "Linux",
            icon: <FaLinux className="text-yellow-200 w-4 h-4" />,
        },
        {
            name: "Python",
            icon: <FaPython className="text-yellow-400 w-4 h-4" />,
        },
        {
            name: "TypeScript",
            icon: <SiTypescript className="text-blue-400 w-4 h-4" />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs className="text-white w-4 h-4" />,
        },
    ];

    return (
        <main className="bg-gray-900 text-white min-h-screen overflow-x-hidden">

            {/* HERO */}
            <section className="min-h-[calc(100vh-80px)] flex items-center">
                <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16">

                    {/* TEXT */}
                    <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1 w-full max-w-full">

                        <div>
                            <span className="text-sm sm:text-base font-medium text-blue-400">
                                Systems Engineering Student
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
                            Hi, I'm{" "}
                            <span className="text-blue-400">
                                Sebastian Cetina
                            </span>
                        </h1>

                        <p className="text-xl sm:text-3xl font-semibold text-gray-200">
                            Backend Developer
                        </p>

                        <p className="text-gray-400 text-base sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed break-words">
                            Building maintainable backend applications with Java
                            and Spring Boot, with a focus on software architecture,
                            databases, Linux and DevOps practices.
                        </p>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2">

                            {/* GitHub */}
                            <a
                                href="https://github.com/Sebastian320CA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-700 transition-colors"
                            >
                                <FaGithub className="w-4 h-4 text-blue-400" />
                                GitHub
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/sebastian-ba23722b8/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-700 transition-colors"
                            >
                                <FaLinkedin className="w-4 h-4 text-blue-400" />
                                LinkedIn
                            </a>

                            {/* CV */}
                            <a
                                href="/CvResumeYojhanCetina.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-700 transition-colors"
                            >
                                <FaFilePdf className="w-4 h-4 text-red-400" />
                                View CV
                            </a>

                            {/* Contact */}
                            <a
                                href="mailto:sebastian022231@gmail.com"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            >
                                <FaEnvelope className="w-4 h-4" />
                                Contact Me
                            </a>

                        </div>

                        {/* TECHNOLOGIES */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2 pt-2">
                            {technologies.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-md text-xs sm:text-sm border border-gray-700 text-gray-300"
                                >
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* LOGO */}
                    <div className="flex justify-center order-1 lg:order-2 w-full">
                        <div className="relative w-full max-w-[180px] sm:max-w-[240px] lg:max-w-[280px] aspect-square">

                            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src="/Logo.png"
                                    alt="Sebastian Dev Logo"
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

            {/* ABOUT */}
            <section className="container mx-auto px-4 sm:px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* ABOUT ME */}
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 sm:p-6">

                        <span className="text-sm sm:text-base font-medium text-blue-400">
                            About Me
                        </span>

                        <h2 className="text-2xl sm:text-4xl font-bold mt-2">
                            A little about me
                        </h2>

                        <p className="text-gray-400 text-base sm:text-xl leading-relaxed mt-4 sm:mt-6 break-words">
                            I'm a Systems Engineering student focused on backend
                            development and software engineering. I build applications
                            using Java and Spring Boot, with a growing focus on software
                            architecture, Linux, DevOps and cloud technologies.
                        </p>

                    </div>

                    {/* HOW I WORK */}
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 sm:p-6">

                        <span className="text-sm sm:text-base font-medium text-blue-400">
                            How I Work
                        </span>

                        <h2 className="text-2xl sm:text-4xl font-bold mt-2">
                            Always learning and improving
                        </h2>

                        <p className="text-gray-400 text-base sm:text-xl leading-relaxed mt-4 sm:mt-6 break-words">
                            I like understanding how things work under the hood and
                            continuously improving my technical skills through real
                            projects and challenges. I also enjoy collaborating with
                            others and sharing knowledge.
                        </p>

                    </div>

                </div>
            </section>

        </main>
    );
};

export default Page;