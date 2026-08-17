import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                        >
                            <Image
                                src="/Logo.png"
                                alt="Sebastian Dev Logo"
                                width={36}
                                height={36}
                                priority
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="text-sm font-bold tracking-wider uppercase">
                                <span className="bg-gradient-to-red from-white to-gray-400 bg-clip-text text-transparent">
                                    Sebastian
                                </span>{" "}
                                <span className="text-blue-400 font-extrabold">
                                    Dev
                                </span>
                            </span>
                        </Link>
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs text-center md:text-left">
                            Crafting fast, scalable and user-focused web
                            applications using modern technologies,
                            clean architecture and thoughtful design.
                        </p>
                    </div>
                    {/* Navigation */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h3 className="text-white font-semibold tracking-wide">
                            Navigation
                        </h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                            <Link
                                href="/"
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                Home
                            </Link>
                            <Link
                                href="/projects"
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/about"
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-end gap-3">

                        <h3 className="text-white font-semibold tracking-wide">
                            Connect
                        </h3>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/Sebastian320CA"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="bg-gray-800 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sebastian-ba23722b8/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="bg-gray-800 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="mt-10 pt-6 border-t border-gray-800/70">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
                        <p>
                            © {new Date().getFullYear()} Sebastian Dev. All rights reserved.
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