import Link from "next/link";
import { ROUTES } from "@/app/routes";

const ProjectsPage = () => {
    return (
        <main className="bg-gray-900 text-white min-h-[calc(100vh-80px)] px-6 py-16">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-black tracking-tight mb-4">
                    Mis Proyectos
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                    Aquí puedes ver una lista de las aplicaciones y sistemas que he desarrollado.
                </p>

                {/* Aquí irán tus tarjetas de proyectos en el futuro */}
                <div className="bg-gray-800/50 border border-gray-800 p-6 rounded-xl mb-8">
                    <p className="text-gray-300">Próximamente agregaré mis proyectos destacados.</p>
                </div>

                <Link
                    href={ROUTES.HOME}
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-all"
                >
                    Volver al Inicio
                </Link>
            </div>
        </main>
    );
};

export default ProjectsPage;