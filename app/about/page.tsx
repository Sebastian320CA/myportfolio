import { FaGraduationCap, FaServer, FaTools } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 sm:p-12">
                    <div className="max-w-3xl">
                        <span className="text-base font-medium text-blue-400">
                            About Me
                        </span>

                        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                            Learn more about me
                        </h1>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mt-6">
                            <p>
                                Hello! I'm <span className="text-white font-semibold">Sebastian Cetina</span>, a Systems Engineering student passionate about the world of
                                technology, software architecture, and especially backend development.
                            </p>

                            <p>
                                My primary focus is building maintainable, scalable, and robust backend applications using <span className="text-blue-400 font-medium">Java </span>
                                and <span className="text-blue-400 font-medium">Spring Boot</span>. I love understanding how things work under the hood—from database management
                                with PostgreSQL to containerization with Docker.
                            </p>

                            <p>
                                I love learning new things about backend development, Linux,
                                infrastructure, and full-stack development. I enjoy challenges because I feel they make us better developers, and I am also learning English,
                                as I consider it essential for our career.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-700/60">
                            <div className="flex flex-col gap-2">
                                <FaGraduationCap className="text-blue-400 w-6 h-6" />
                                <h3 className="font-semibold text-white">Education</h3>
                                <p className="text-sm text-gray-400">Systems Engineering Student</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <FaServer className="text-blue-400 w-6 h-6" />
                                <h3 className="font-semibold text-white">Backend Focus</h3>
                                <p className="text-sm text-gray-400">Java, Spring Boot & APIs</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <FaTools className="text-blue-400 w-6 h-6" />
                                <h3 className="font-semibold text-white">Continuous Learning</h3>
                                <p className="text-sm text-gray-400">DevOps, Docker & Linux</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;