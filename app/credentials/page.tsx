import React from 'react';
import { FaAws, FaExternalLinkAlt, FaGraduationCap, FaFlagCheckered } from "react-icons/fa";

type CredentialType = 'course' | 'exam-prep';

interface Credential {
    id: string;
    title: string;
    type: CredentialType;
    issuer: string;
    completed: string; // YYYY-MM, se usa para ordenar y para mostrar la fecha
    duration: string;
    certificateUrl?: string; // PDF del certificado de finalización
    verificationUrl?: string; // Solo si existe un enlace externo real (Credly, TIDWIT, etc.)
    skills: string[];
    isAws?: boolean;
}

// Qué significa cada tipo, para que quien lo lea sepa exactamente qué es.
const TYPE_LABEL: Record<CredentialType, string> = {
    'course': 'Course completion',
    'exam-prep': 'Exam prep session',
};

// Edita o pon null si no quieres mostrar esta meta.
const NEXT_GOAL: string | null =
    'Next goal: take the official AWS Certified Cloud Practitioner exam.';

const credentialsData: Credential[] = [
    {
        id: '1',
        title: 'Gen AI Intermedio',
        type: 'course',
        issuer: 'AWS Entrena LATAM / TIDWIT',
        completed: '2026-08',
        duration: '4h 10m',
        certificateUrl: '/GenAI-Intermedio.pdf',
        skills: ['Generative AI', 'AWS Cloud', 'Prompting', 'LLMs'],
        isAws: true,
    },
    {
        id: '2',
        title: 'Artificial Intelligence Essentials',
        type: 'course',
        issuer: 'HPE (AvanzaTEC)',
        completed: '2026-07',
        duration: '8h',
        certificateUrl: '/CERTIFICADO_Sebastian_Cetina.pdf',
        skills: ['AI Fundamentals', 'Machine Learning', 'Data Science'],
    },
    {
        id: '3',
        title: 'AWS AI Practitioner Prep – Week 3',
        type: 'exam-prep',
        issuer: 'AWS Entrena Colombia / TIDWIT',
        completed: '2026-07',
        duration: '1h 45m',
        certificateUrl: '/CertificateA.pdf',
        skills: ['Exam Prep', 'AI Models', 'AWS AI Services'],
        isAws: true,
    },
    {
        id: '4',
        title: 'AWS Cloud Practitioner Essentials',
        type: 'course',
        issuer: 'AWS Entrena Colombia / TIDWIT',
        completed: '2026-06',
        duration: '12h 45m',
        certificateUrl: '/Certificate.pdf',
        skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security'],
        isAws: true,
    },
    {
        id: '5',
        title: 'Gen AI Fundamentos',
        type: 'course',
        issuer: 'AWS Entrena LATAM / TIDWIT',
        completed: '2026-06',
        duration: '1h 54m',
        certificateUrl: '/GenAI.pdf',
        skills: ['Generative AI', 'Cloud AI', 'AI Ethics'],
        isAws: true,
    },
];

const formatDate = (yearMonth: string) =>
    new Date(`${yearMonth}-01T00:00:00`).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });

// Más reciente primero.
const sortedCredentials = [...credentialsData].sort((a, b) =>
    b.completed.localeCompare(a.completed)
);

const Credentials = () => {
    return (
        <section id="credentials" className="bg-gray-900 text-white pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 sm:p-12">

                    <div className="mb-10 pb-8 border-b border-gray-700/60">
                        <span className="text-base font-medium text-blue-400">
                            Credentials
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
                            Courses & training
                        </h2>
                        <p className="mt-2 text-base text-gray-400 max-w-2xl">
                            Courses and training programs I have completed in cloud and AI.
                            These are completion certificates, not proctored exam certifications.
                        </p>

                        {NEXT_GOAL && (
                            <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/70 px-4 py-2 text-sm text-gray-300">
                                <FaFlagCheckered className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                                {NEXT_GOAL}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sortedCredentials.map((item) => (
                            <article
                                key={item.id}
                                className="flex flex-col justify-between rounded-xl border border-gray-700/50 bg-gray-900/60 p-6 transition-colors duration-300 hover:border-blue-500/40 hover:bg-gray-900"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="p-2 bg-gray-800/80 rounded-lg shrink-0 border border-gray-700/30">
                                            {item.isAws ? (
                                                <FaAws className="text-orange-400 w-7 h-7" aria-hidden="true" />
                                            ) : (
                                                <FaGraduationCap className="text-green-400 w-7 h-7" aria-hidden="true" />
                                            )}
                                        </div>
                                        <span className="shrink-0 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
                                            {formatDate(item.completed)}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mt-4 leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        {TYPE_LABEL[item.type]}
                                    </p>

                                    <p className="mt-1.5 text-xs font-medium text-gray-400">
                                        Issued by: <span className="text-gray-200">{item.issuer}</span>
                                    </p>

                                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Topics covered">
                                        {item.skills.map((skill) => (
                                            <li
                                                key={skill}
                                                className="rounded-md bg-gray-800/80 border border-gray-700/40 px-2 py-0.5 text-[11px] font-medium text-gray-300"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between gap-4 text-xs">
                                    <span className="text-gray-500">Duration: {item.duration}</span>

                                    <div className="flex items-center gap-4 ml-auto">
                                        {item.certificateUrl && (
                                            <a
                                                href={item.certificateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300 transition-colors text-sm"
                                            >
                                                View certificate
                                                <FaExternalLinkAlt className="w-3 h-3" aria-hidden="true" />
                                            </a>
                                        )}
                                        {item.verificationUrl && (
                                            <a
                                                href={item.verificationUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300 transition-colors text-sm"
                                            >
                                                Verify online
                                                <FaExternalLinkAlt className="w-3 h-3" aria-hidden="true" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Credentials;