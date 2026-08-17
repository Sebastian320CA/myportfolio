import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { ROUTES } from "@/app/routes"; 

const Page = () => {
    const technologies = [
        "Next.js", "Java", "TypeScript", "Node.js", 
        "Tailwind CSS", "PostgreSQL", "Linux", "Docker", "Git",
    ];

    return (
        <main className="bg-gray-900 text-white min-h-[calc(100vh-80px)] flex items-center">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
                
                {/* Contenido de presentación */}
                <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center justify-center lg:justify-start gap-2">
                        <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-blue-500/20">
                            <Sparkles size={14} />
                            Enjoy to learning new technologies and building projects.
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            Sebastian Cetina
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Student Full Stack Developer focused on building fast, scalable and intuitive web applications.
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 text-sm rounded-full bg-gray-800 border border-gray-700 text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Botones */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <Link
                            href={ROUTES.PROJECTS} 
                            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20 hover:-translate-y-1"
                        >
                            View Projects
                        </Link>
                        <a
                            href={ROUTES.CONTACT}
                            className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-gray-800/20 hover:-translate-y-1"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Imagen */}
                <div className="flex justify-center order-1 lg:order-2">
                    <div className="relative group">
                        <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full blur-3xl opacity-20"></div>
                        <div className="relative bg-gray-800/40 p-8 rounded-full border border-gray-800/50 backdrop-blur-sm shadow-2xl">
                            <Image
                                src="/Logo.png"
                                alt="Developer Sebastian"
                                width={280}
                                height={280}
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Page;