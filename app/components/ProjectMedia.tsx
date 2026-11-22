import type { Project } from "@/lib/projects";

/** Lazy YouTube embed for the project demo. Renders nothing without a video. */
const ProjectMedia = ({ project, title }: { project: Project; title: string }) => {
    if (!project.youtubeId) return null;

    return (
        <div className="relative aspect-video w-full overflow-hidden bg-black">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                title={title}
                loading="lazy"
                allow="accelerometer; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
            />
        </div>
    );
};

export default ProjectMedia;
