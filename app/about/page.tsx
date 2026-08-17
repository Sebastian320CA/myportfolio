import Link from "next/link";
import { ROUTES } from "@/app/routes";

const AboutPage = () => {
    return (
        <main className="bg-gray-900 text-white min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-16">
            <div className="max-w-2xl space-y-6 text-center sm:text-left">
                <h1 className="text-4xl font-black tracking-tight text-center sm:text-left">
                    Sobre mí
                </h1>
                
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                    Hola, soy <strong className="text-blue-400 font-semibold">Sebastian Cetina</strong>, un estudiante y apasionado desarrollador Full Stack. Me encanta aprender constantemente sobre nuevas tecnologías y crear soluciones digitales eficientes, escalables y con una gran experiencia de usuario.
                </p>

                <p className="text-gray-400 leading-relaxed font-light">
                    Mi enfoque principal está en el desarrollo web moderno utilizando herramientas como Next.js, TypeScript y Tailwind CSS, siempre buscando escribir código limpio y estructurado.
                </p>

                <div className="flex justify-center sm:justify-start pt-4">
                    <Link
                        href={ROUTES.HOME}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;