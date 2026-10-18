import { FaGraduationCap, FaServer, FaTools, FaBriefcase } from "react-icons/fa";


const highlights = [
    {
        icon: FaGraduationCap,
        title: "Education",
        text: "Systems Engineering student · University of Santo Tomás · Bogotá,  Colombia",
    },
    {
        icon: FaServer,
        title: "What I build",
        text: "Web backends with Java, Spring Boot and PostgreSQL, packaged with Docker",
    },
    {
        icon: FaTools,
        title: "Learning now",
        text: "AWS and cloud fundamentals, Linux, DevOps and English",
    },
];

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
                                Hi, I&apos;m{" "}
                                <span className="text-white font-semibold">Sebastian Cetina</span>,
                                a Systems Engineering student from Bogotá, Colombia. I focus on
                                backend development with{" "}
                                <span className="text-blue-400 font-medium">Java</span> and{" "}
                                <span className="text-blue-400 font-medium">Spring Boot</span>.
                            </p>

                            <p>
                                In my university projects I&apos;ve built a hospital operational
                                status monitor using hexagonal architecture, an equipment tracking
                                system secured with Spring Security, and a JavaFX desktop app
                                that applies the DAO, Singleton and Facade patterns. I use
                                PostgreSQL for data and Docker to run everything the same
                                way on any machine.
                            </p>
                            <p>
                                I love all about programming software but I would like to focus on backend development because
                                I enjoy designing and implementing the logic that makes applications work, I know that it is difficult to see the
                                results of my work, but I like to see how the backend interacts with the frontend and how it can improve the user experience.
                            </p>

                            <p>
                                I work on Linux day to day, I&apos;m learning AWS (I&apos;ve completed
                                Cloud Practitioner Essentials) and I&apos;m improving my English
                                because I know it matters for my career.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-700/60">
                            {highlights.map(({ icon: Icon, title, text }) => (
                                <div key={title} className="flex flex-col gap-2">
                                    <Icon className="text-blue-400 w-6 h-6" aria-hidden="true" />
                                    <h3 className="font-semibold text-white">{title}</h3>
                                    <p className="text-sm text-gray-400">{text}</p>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;