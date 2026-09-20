import Link from "next/link";
import { FaGithub, FaJava, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiGradle, SiSonarqubecloud } from "react-icons/si";
import { SiReact, SiNodedotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Projects = () => {
    return (
        <main className="bg-gray-900 text-white min-h-screen py-16">
            <div className="container mx-auto px-6 max-w-5xl">

                <div className="mb-12">
                    <span className="text-base font-medium text-blue-400">
                        Projects
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                        Some things I've built
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed mt-4 max-w-2xl">
                        A selection of projects I've worked on while learning and
                        applying backend development and software architecture concepts.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10">

                    {/* Proyecto 1: Server Alert */}
                    <article className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
                        <div className="aspect-video bg-gray-950 max-h-[380px] w-full relative overflow-hidden flex items-center justify-center">
                            <video
                                src="/ServiceHospital.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="absolute inset-0 w-full h-full object-contain object-center"
                            />
                        </div>

                        <div className="p-6 sm:p-8">
                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                                Full-Stack · Academic Project
                            </span>

                            <h3 className="text-2xl font-bold mt-2 text-white">
                                Server Alert for Hospital Management System
                            </h3>

                            <p className="text-gray-400 text-base leading-relaxed mt-3">
                                Monitoring and alert platform designed to detect server
                                issues and provide real-time notifications in hospital
                                environments.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <FaJava className="text-orange-500 w-3.5 h-3.5" /> Java
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiSpringboot className="text-green-500 w-3.5 h-3.5" /> Spring Boot
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiPostgresql className="text-blue-400 w-3.5 h-3.5" /> PostgreSQL
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <FaDocker className="text-sky-400 w-3.5 h-3.5" /> Docker
                                </span>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="https://github.com/Sebastian320CA/hospital-service"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <FaGithub className="mr-2 text-lg" />
                                    GitHub Repository
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Proyecto 2: Operational Status Monitoring System */}
                    <article className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
                        <div className="aspect-video bg-gray-950 max-h-[380px] w-full relative overflow-hidden flex items-center justify-center">
                            <video
                                src="/ServiciosFinal.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="absolute inset-0 w-full h-full object-contain object-center"
                            />
                        </div>

                        <div className="p-6 sm:p-8">
                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                                Full-Stack · Academic Project
                            </span>

                            <h3 className="text-2xl font-bold mt-2 text-white">
                                Operational Status Monitoring System
                            </h3>

                            <p className="text-gray-400 text-base leading-relaxed mt-3">
                                Platform designed to centralize and monitor critical
                                hospital infrastructure, using Hexagonal Architecture
                                to manage operational status and system conditions.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <FaJava className="text-orange-500 w-3.5 h-3.5" /> Java 21
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiSpringboot className="text-green-500 w-3.5 h-3.5" /> Spring Boot
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiPostgresql className="text-blue-400 w-3.5 h-3.5" /> PostgreSQL 16
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <FaDocker className="text-sky-400 w-4 h-4" /> Docker
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiGradle className="text-cyan-500 w-3.5 h-3.5" /> Gradle
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiSonarqubecloud className="text-orange-400 w-3.5 h-3.5" /> SonarQube
                                </span>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="https://github.com/Sebastian320CA/san_rafael"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <FaGithub className="mr-2 text-lg" />
                                    GitHub Repository
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Proyecto 3: University Voting System */}
                    <article className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
                        <div className="aspect-video bg-gray-950 max-h-[380px] w-full relative overflow-hidden flex items-center justify-center">
                            <video
                                src="/VotingSystem.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="absolute inset-0 w-full h-full object-contain object-center"
                            />
                        </div>

                        <div className="p-6 sm:p-8">
                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                                Full-Stack · Academic Project
                            </span>

                            <h3 className="text-2xl font-bold mt-2 text-white">
                                University Voting System
                            </h3>

                            <p className="text-gray-400 text-base leading-relaxed mt-3">
                                Digital voting platform developed for university elections, designed to provide
                                a secure, intuitive, and real-time voting experience for students and faculty.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiReact className="text-cyan-400 w-3.5 h-3.5" /> React
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiNodedotjs className="text-green-500 w-3.5 h-3.5" /> Node.js
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiTypescript className="text-blue-500 w-3.5 h-3.5" /> TypeScript
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <SiPostgresql className="text-blue-400 w-3.5 h-3.5" /> PostgreSQL
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-md text-xs text-gray-300">
                                    <VscCode className="text-sky-400 w-3.5 h-3.5" /> VS Code
                                </span>
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <span className="text-xs text-gray-400 italic bg-gray-900/60 px-3 py-2 rounded-lg border border-gray-800">
                                    📹 Video Demonstration Only (Source code unavailable)
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
};

export default Projects;