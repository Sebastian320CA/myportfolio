import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
            <div className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">

                        <Link
                            href="/"
                            className="flex items-center gap-3"
                        >
                            <Image
                                src="/Logo.png"
                                alt="Sebastian Dev Logo"
                                width={36}
                                height={36}
                                className="object-contain"
                            />

                            <span className="text-sm font-bold tracking-wider uppercase">
                                <span className="text-white">
                                    Sebastian
                                </span>{" "}
                                <span className="text-blue-400 font-extrabold">
                                    Dev
                                </span>
                            </span>
                        </Link>

                        <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs text-center md:text-left">
                            Systems Engineering student focused on backend
                            development with Java and Spring Boot.
                        </p>

                    </div>


                    {/* Navigation */}
                    <div className="flex flex-col items-center md:items-start gap-3">

                        <h3 className="text-white font-semibold">
                            Navigation
                        </h3>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">

                            <Link
                                href="/"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Home
                            </Link>

                            <a
                                href="/about"
                                className="hover:text-blue-400 transition-colors"
                            >
                                About
                            </a>

                            <a
                                href="/projects"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Projects
                            </a>
                             <a
                                href="/credentials"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Credentials
                            </a>

                        </div>

                    </div>
                    <div className="flex flex-col items-center md:items-end gap-3">

                        <h3 className="text-white font-semibold">
                            Connect
                        </h3>

                        <div className="flex gap-3">

                            <a
                                href="https://github.com/Sebastian320CA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sebastian-ba23722b8/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>

                </div>


                <div className="mt-10 pt-6 border-t border-gray-800/70">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">

                        <p>
                            © {new Date().getFullYear()} Sebastian Dev.
                            All rights reserved.
                        </p>

                        <p>
                            Built with Next.js, TypeScript & Tailwind CSS
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;