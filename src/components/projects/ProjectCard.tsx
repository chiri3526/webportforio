import { ArrowRight } from "lucide-react";
import type { Project } from "../../types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <a href={project.url} target="_blank" rel="noreferrer" className="block">
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src={project.image}
            alt={project.title}
            className="h-[240px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-[2rem] font-bold tracking-tight text-slate-900">{project.title}</h3>
        <p className="mt-3 text-lg leading-8 text-slate-500">{project.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-accent transition group-hover:gap-3">
          Visit Site
          <ArrowRight size={16} />
        </span>
      </a>
    </article>
  );
}
