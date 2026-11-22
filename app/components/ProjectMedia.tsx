import type { Project } from "@/lib/projects";

/**
 * Shows the project demo. Prefers a YouTube embed (lazy, no weight in the repo)
 * and falls back to a local video that is NOT downloaded until the user presses play.
 */
const ProjectMedia = ({ project, title }: { project: Project; title: string }) =>
    !project.youtubeId && !project.videoSrc ? null : (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
        {project.youtubeId ? (
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                title={title}
                loading="lazy"
                allow="accelerometer; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
            />
        ) : (
            <video
                src={project.videoSrc}
                controls
                playsInline
                preload="none"
                aria-label={title}
                className="absolute inset-0 h-full w-full object-contain"
            />
        )}
    </div>
);

export default ProjectMedia;
