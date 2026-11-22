import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FaAws, FaExternalLinkAlt, FaGraduationCap, FaFlagCheckered } from "react-icons/fa";
import SectionHeading from '../../components/SectionHeading';

type CredentialType = 'course' | 'exam-prep' | 'hackathon';
type IconKind = 'aws' | 'nasa' | 'default';

interface Credential {
    id: string;
    title: string;
    type: CredentialType;
    issuer: string;
    completed: string;
    duration: string;
    certificateUrl?: string;
    verificationUrl?: string;
    skills: string[];
    icon?: IconKind;
}


const SHOW_NEXT_GOAL = true;

const credentialsData: Credential[] = [
    {
        id: '1',
        title: 'NASA Space Apps Challenge 2026',
        type: 'hackathon',
        issuer: 'NASA Space Apps Challenge',
        completed: '2026-11',
        duration: '48 h',
        certificateUrl: '/Nasa.pdf',
        skills: ['Space Data', 'Lunar Landing Site Navigator', 'Problem Solving'],
        icon: 'nasa',
    },
    {
        id: '2',
        title: 'Gen AI Intermedio',
        type: 'course',
        issuer: 'AWS Entrena LATAM / TIDWIT',
        completed: '2026-08',
        duration: '4h 10m',
        certificateUrl: '/GenAI-Intermedio.pdf',
        skills: ['Generative AI', 'AWS Cloud', 'Prompting', 'LLMs'],
        icon: 'aws',
    },
    {
        id: '3',
        title: 'Artificial Intelligence Essentials',
        type: 'course',
        issuer: 'HPE (AvanzaTEC)',
        completed: '2026-07',
        duration: '8h',
        certificateUrl: '/CERTIFICADO_Sebastian_Cetina.pdf',
        skills: ['AI Fundamentals', 'Machine Learning', 'Data Science'],
    },
    {
        id: '4',
        title: 'AWS AI Practitioner Prep – Week 3',
        type: 'exam-prep',
        issuer: 'AWS Entrena Colombia / TIDWIT',
        completed: '2026-07',
        duration: '1h 45m',
        certificateUrl: '/CertificateA.pdf',
        skills: ['Exam Prep', 'AI Models', 'AWS AI Services'],
        icon: 'aws',
    },
    {
        id: '5',
        title: 'AWS Cloud Practitioner Essentials',
        type: 'course',
        issuer: 'AWS Entrena Colombia / TIDWIT',
        completed: '2026-06',
        duration: '12h 45m',
        certificateUrl: '/Certificate.pdf',
        skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security'],
        icon: 'aws',
    },
    {
        id: '6',
        title: 'Gen AI Fundamentos',
        type: 'course',
        issuer: 'AWS Entrena LATAM / TIDWIT',
        completed: '2026-06',
        duration: '1h 54m',
        certificateUrl: '/GenAI.pdf',
        skills: ['Generative AI', 'Cloud AI', 'AI Ethics'],
        icon: 'aws',
    },
];

// Newest first.
const sortedCredentials = [...credentialsData].sort((a, b) =>
    b.completed.localeCompare(a.completed)
);

const CredentialIcon = ({ icon = 'default' }: { icon?: IconKind }) => {
    if (icon === 'aws')
        return <FaAws className="h-7 w-7 text-orange-400" aria-hidden="true" />;
    if (icon === 'nasa')
        return (
            <Image
                src="/Nasa.png"
                alt=""
                width={28}
                height={28}
                unoptimized
                className="h-7 w-7 object-contain"
            />
        );
    return <FaGraduationCap className="h-7 w-7 text-accent" aria-hidden="true" />;
};

type Props = { params: Promise<{ locale: string }> };

export default async function Credentials({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('credentials');

    const formatDate = (yearMonth: string) =>
        new Date(`${yearMonth}-01T00:00:00`).toLocaleDateString(locale, {
            month: 'short',
            year: 'numeric',
        });

    return (
        <main className="container mx-auto max-w-5xl px-6 py-16">
            <SectionHeading label={t('label')} title={t('title')} intro={t('intro')} />

            {SHOW_NEXT_GOAL && (
                <p className="-mt-6 mb-10 inline-flex items-center gap-2 rounded-md border border-line bg-panel px-4 py-2 text-sm text-soft">
                    <FaFlagCheckered className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {t('nextGoal')}
                </p>
            )}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {sortedCredentials.map((item) => (
                    <article
                        key={item.id}
                        className="flex flex-col justify-between rounded-lg border border-line bg-panel p-6 transition-colors hover:border-accent/40"
                    >
                        <div>
                            <div className="flex items-start justify-between gap-4">
                                <div className="shrink-0 rounded-md border border-line bg-ink p-2">
                                    <CredentialIcon icon={item.icon} />
                                </div>
                                <span className="shrink-0 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent">
                                    {formatDate(item.completed)}
                                </span>
                            </div>

                            <h2 className="mt-4 text-lg font-semibold leading-snug">
                                {item.title}
                            </h2>

                            <p className="mt-1 text-xs text-muted">{(`types.${item.type}`)}</p>

                            <p className="mt-1.5 text-xs text-muted">
                                {t('issuedBy')}: <span className="text-soft">{item.issuer}</span>
                            </p>

                            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={t('topics')}>
                                {item.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-md border border-line bg-ink px-2 py-0.5 font-mono text-[11px] text-soft"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-xs">
                            <span className="text-muted">
                                {t('duration')}: {item.duration}
                            </span>

                            <div className="ml-auto flex items-center gap-4">
                                {item.certificateUrl && (
                                    <a
                                        href={item.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                                    >
                                        {t('viewCertificate')}
                                        <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
                                    </a>
                                )}
                                {item.verificationUrl && (
                                    <a
                                        href={item.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                                    >
                                        {t('verifyOnline')}
                                        <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}