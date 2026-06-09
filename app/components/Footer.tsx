import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2 group">
                        <Image 
                            src="/Logo.png" 
                            alt="Logo" 
                            width={32} 
                            height={32}  
                            className="object-contain transition group-hover:scale-110" 
                            priority
                        />
                        <span className="text-white font-bold tracking-wider uppercase text-sm">
                            Sebastian <span className="text-blue-500 font-extrabold">Dev</span>
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 max-w-xs">
                        Buildign web solutions with passion and precision with open source and high performance.
                    </p>
                </div> 
                <div className="flex flex-col gap-2">
                    <span className="text-white font-semibold text-sm tracking-wide">Navigation</span>
                    <div className="flex justify-center md:justify-start gap-4 text-xs font-medium">
                        <Link href="/" className="hover:text-blue-400 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-blue-400 transition-colors">
                            About me
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                    <span className="text-white font-semibold text-start tracking-wide">Follow me</span>
                    <div className="flex gap-4 text-xs">
                        <a href="https://github.com/Sebastian320CA" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 text-white
                            px-3 py-1.5 rounded-md font-medium transition-all hover:-translate-y-0.5 shadow-sm">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/sebastian-ba23722b8/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 text-white
                            px-3 py-1.5 rounded-md font-medium transition-all hover:-translate-y-0.5 shadow-sm">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-10 pt-6 border-t border-gray-800/50 text-center text-xs text-gray-600">
                &copy; {new Date().getFullYear()} Sebastian Dev. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;