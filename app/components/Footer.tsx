import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";

const Footer = async () => {
    const t = await getTranslations("footer");
    const nav = await getTranslations("nav");

    const links = [
        { href: "/", label: nav("home") },
        { href: "/projects", label: nav("projects") },
        { href: "/about", label: nav("about") },
        { href: "/credentials", label: nav("credentials") },
    ] as const;

    return (
        <footer className="border-t border-line text-muted">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/Logo.png"
                                alt={nav("logoAlt")}
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            <span className="font-mono text-sm font-semibold text-white">
                                sebastian<span className="text-accent">.dev</span>
                            </span>
                        </Link>
                        <p className="mt-3 max-w-xs text-center text-sm leading-relaxed md:text-left">
                            {t("tagline")}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-3 md:items-start">
                        <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
                            {t("navigation")}
                        </h2>
                        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm md:justify-start">
                            {links.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="transition-colors hover:text-white"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center gap-3 md:items-end">
                        <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
                            {t("connect")}
                        </h2>
                        <ul className="flex gap-5 text-sm">
                            <li>
                                <a
                                    href={SITE.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-white"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SITE.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-white"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted/70 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} {SITE.name}. {t("rights")}
                    </p>
                    <p>{t("built")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
