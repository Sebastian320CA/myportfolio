const SectionHeading = ({
    label,
    title,
    intro,
}: {
    label: string;
    title: string;
    intro?: string;
}) => (
    <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {"// "}
            {label}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
        </h1>
        {intro && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                {intro}
            </p>
        )}
    </div>
);

export default SectionHeading;
