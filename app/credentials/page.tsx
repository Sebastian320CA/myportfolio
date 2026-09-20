import React from 'react';
import { FaAws, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    duration: string;
    credentialUrl?: string;
    skills: string[];
    isAws?: boolean;
}

const certificationsData: Certification[] = [
    {
        id: '1',
        title: 'Gen AI Intermedio',
        issuer: 'AWS Entrena LATAM / TIDWIT',
        date: 'Aug 2026',
        duration: '04:09:39',
        credentialUrl: '/GenAI-Intermedio.pdf',
        skills: ['Generative AI', 'AWS Cloud', 'Prompting', 'LLMs'],
        isAws: true,
    },
    {
        id: '2',
        title: 'AWS Cloud Practitioner Essentials',
        issuer: 'AWS Entrena Colombia / TIDWIT',
        date: 'Jun 2026',
        duration: '12:45:03',
        credentialUrl: '/Certificate.pdf',
        skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security'],
        isAws: true,
    },
    {
        id: '3',
        title: 'Artificial Intelligence Essentials',
        issuer: 'HPE (AvanzaTEC)',
        date: 'Jul 2026',
        duration: '8h 00m',
        credentialUrl: '/CERTIFICADO_Sebastian_Cetina.pdf',
        skills: ['AI Fundamentals', 'Machine Learning', 'Data Science'],
        isAws: false,
    },
    {
        id: '4',
        title: 'Gen AI Fundamentos',
        issuer: 'AWS Entrena LATAM / TIDWIT',
        date: 'Jun 2026',
        duration: '01:54:00',
        credentialUrl: '/GenAI.pdf',
        skills: ['Generative AI', 'Cloud AI', 'AI Ethics'],
        isAws: true,
    },
    {
        id: '5',
        title: 'AWS AI Practitioner Prep - Week 3',
        issuer: 'AWS Entrena Colombia / TIDWIT',
        date: 'Jul 2026',
        duration: '01:45:00',
        credentialUrl: '/CertificateA.pdf',
        skills: ['Exam Prep', 'AI Models', 'AWS AI Services'],
        isAws: true,
    },
];

const Credentials = () => {
    return (
        <section id="credentials" className="bg-gray-900 text-white pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 sm:p-12">

                    {/* Cabecera y la Insignia Destacada Afuera */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-8 border-b border-gray-700/60">
                        <div>
                            <span className="text-base font-medium text-blue-400">
                                Credentials
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
                                Certifications & Courses
                            </h2>
                            <p className="mt-2 text-base text-gray-400">
                                Official validation of my technical knowledge and skills.
                            </p>
                        </div>

                        {/* Contenedor de la Insignia General Afuera */}
                        <div className="flex items-center gap-4 bg-gray-900/80 border border-gray-700 rounded-xl p-4 shrink-0 shadow-lg">
                            <img
                                src="/Insignia.svg"
                                alt="AWS Insignia Oficial"
                                className="w-16 h-16 object-contain"
                            />
                            <div>
                                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Verified Badge</span>
                                <h4 className="text-sm font-bold text-white">AWS Certified</h4>
                                <a
                                    href="/Certificate.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-gray-400 hover:text-blue-400 underline inline-flex items-center gap-1 mt-0.5"
                                >
                                    View Credential <FaExternalLinkAlt className="w-2.5 h-2.5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certificationsData.map((cert) => (
                            <div
                                key={cert.id}
                                className="flex flex-col justify-between rounded-xl border border-gray-700/50 bg-gray-900/60 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-gray-900"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="p-2 bg-gray-800/80 rounded-lg shrink-0 border border-gray-700/30">
                                            {cert.isAws ? (
                                                <FaAws className="text-orange-400 w-7 h-7" />
                                            ) : (
                                                <FaCertificate className="text-green-400 w-7 h-7" />
                                            )}
                                        </div>
                                        <span className="shrink-0 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
                                            {cert.date}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mt-4 leading-snug">
                                        {cert.title}
                                    </h3>

                                    <p className="mt-1.5 text-xs font-medium text-gray-400">
                                        Issued by: <span className="text-gray-200">{cert.issuer}</span>
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {cert.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="rounded-md bg-gray-800/80 border border-gray-700/40 px-2 py-0.5 text-[11px] font-medium text-gray-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs">
                                    <span className="text-gray-500">
                                        Duration: {cert.duration}
                                    </span>

                                    {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300 transition-colors ml-auto text-sm"
                                        >
                                            Verify
                                            <FaExternalLinkAlt className="w-3 h-3" />
                                        </a>
                                    ) : (
                                        <span className="text-gray-600 italic">Attendance cert</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Credentials;