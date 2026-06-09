import Link from 'next/link';
import Image from 'next/image';

const page = () => {
    return (
        <main className='bg-gray-900 text-white min-h-[calc(100vh-80px)] flex items-center'>
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
                <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center justify-center lg:justify-start gap-2">
                        <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase px-3 py-1
                                rounded-full border border-blue-500/10">Learning every day</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Sebastian Cetina</span>
                    </h1>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Developer passionate about crafting high-quality web solutions. With a strong foundation in JavaScript and a keen eye for design,
                         I specialize in building responsive and user-friendly websites that deliver exceptional performance and seamless user experiences.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <Link href="/projects" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg
                            shadow-blue-600/20 hover:-translate-y-0.5">
                            View Projects
                        </Link>
                        <a href="https://www.linkedin.com/in/sebastian-ba23722b8/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-medium 
                        px-6 py-3 rounded-lg transition-all shadow-lg shadow-gray-800/20 hover:-translate-y-0.5">
                            Contact me
                        </a>
                    </div>   
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition duration-100"></div>
                        <div className="relative bg-gray-800/40 p-8 rounded-full border border-gray-800/50 backdrop-blur-sm shadow-2xl">
                        <Image 
                            src="/Logo.png"
                            alt="Developer Sebastian"
                            width={280}
                            height={280}
                            className="object-contain animate-fade-in drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default page