import { TECH, type TechRef } from "@/lib/tech";

const TechChip = ({ tech }: { tech: TechRef }) => {
    const { name, Icon, color } = TECH[tech.key];

    return (
        <li className="inline-flex items-center gap-2 rounded-md border border-line bg-panel px-2.5 py-1 font-mono text-xs text-soft">
            <Icon className={`h-3.5 w-3.5 ${color}`} aria-hidden="true" />
            {tech.label ?? name}
        </li>
    );
};

export default TechChip;
