import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <header className="bg-gray-900/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800">
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">

                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                >
                    <Image
                        src="/Logo.png"
                        alt="Sebastian Dev Logo"
                        width={52}
                        height={52}
                        className="object-contain transition-transform duration-200 group-hover:scale-105"
                        priority
                    />

                    <span className="text-lg font-bold tracking-wide">
                        <span className="text-white">
                            Sebastian
                        </span>{" "}
                        <span className="text-blue-400">
                            Dev
                        </span>
                    </span>
                </Link>

                <nav>
                    <ul className="flex items-center gap-8 font-medium text-sm text-gray-300">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-blue-400 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/credentials"
                                className="hover:text-blue-400 transition-colors"
                            >
                                Credentials
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default NavBar;