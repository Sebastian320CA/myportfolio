"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const LINKS = [
    { href: "/", key: "home" },
    { href: "/projects", key: "projects" },
    { href: "/about", key: "about" },
    { href: "/credentials", key: "credentials" },
] as const;

const NavBar = () => {
    const t = useTranslations("nav");
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);
    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="group flex items-center gap-3"
                >
                    <Image
                        src="/Logo.png"
                        alt={t("logoAlt")}
                        width={44}
                        height={44}
                        className="object-contain transition-transform duration-200 group-hover:scale-105"
                        priority
                    />
                    <span className="font-mono text-sm font-semibold tracking-tight">
                        sebastian<span className="text-accent">.dev</span>
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:block" aria-label="Main">
                        <ul className="flex items-center gap-7 text-sm">
                            {LINKS.map(({ href, key }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        aria-current={isActive(href) ? "page" : undefined}
                                        className={`transition-colors hover:text-white ${
                                            isActive(href)
                                                ? "text-white"
                                                : "text-muted"
                                        }`}
                                    >
                                        {t(key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <LanguageSwitcher />

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-soft transition-colors hover:text-white md:hidden"
                        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
                        aria-expanded={isOpen}
                    >
                        <span aria-hidden="true" className="text-xl leading-none">
                            {isOpen ? "×" : "☰"}
                        </span>
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav
                    className="border-t border-line bg-ink md:hidden"
                    aria-label="Mobile"
                >
                    <ul className="container mx-auto space-y-1 px-4 py-3">
                        {LINKS.map(({ href, key }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={closeMenu}
                                    aria-current={isActive(href) ? "page" : undefined}
                                    className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-panel hover:text-white ${
                                        isActive(href) ? "bg-panel text-white" : "text-muted"
                                    }`}
                                >
                                    {t(key)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default NavBar;
