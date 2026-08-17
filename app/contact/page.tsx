import Link from "next/link";
import { ROUTES } from "@/app/routes";

const ContactPage = () => {
    return (
        <main className="bg-gray-900 text-white min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
            <div className="text-center max-w-lg space-y-6">
                <h1 className="text-4xl font-black tracking-tight">
                    Contacto
                </h1>
                <p className="text-gray-400 text-lg">
                    ¿Quieres que trabajemos juntos o tienes alguna pregunta? Escríbeme a través de LinkedIn.
                </p>
                
                {/* Botón directo a LinkedIn */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                    <a
                        href={ROUTES.CONTACT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20"
                    >
                        Ir a mi LinkedIn
                    </a>
                    
                    <Link
                        href={ROUTES.HOME}
                        className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;