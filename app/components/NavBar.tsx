import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800 shadow-lg">
            {/* Cambié h-16 a h-20 para que el logo de 64px tenga espacio y no se vea apretado */}
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                
                {/* Logo e Identidad Visual (Corregido 'flex') */}
                <Link href="/" className="flex items-center gap-3 group transition">
                    <Image 
                        src="/Logo.png" 
                        alt="Logo" 
                        width={64} // Ahora sí se verá grande porque quitamos el div restrictivo
                        height={64}  
                        className="object-contain transition group-hover:scale-105" 
                        priority
                    />
                    <span className="text-lg font-bold tracking-wider uppercase bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-blue-400 transition">
                        Sebastian <span className="text-blue-500 font-extrabold">Dev</span>
                    </span>
                </Link>

                {/* Menú de Navegación (Corregido 'text-gray-300') */}
                <nav>
                    <ul className="flex items-center gap-6 font-medium text-sm tracking-wide text-gray-300">
                        <li>
                            {/* Corregido 'after:absolute' y el cierre correcto de la etiqueta </Link> */}
                            <Link href="/" className="hover:text-blue-400 transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all">
                                Home
                            </Link>
                        </li>
                        <li>
                            {/* Corregido 'after:absolute' y el cierre correcto de la etiqueta </Link> */}
                            <Link href="/about" className="hover:text-blue-400 transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all">
                                About me
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default NavBar;
