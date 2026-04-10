import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "../components/layout/Container";
import { FilterTabs } from "../components/projects/FilterTabs";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/site";
import type { Category } from "../types/content";

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[1fr,auto] xl:items-end">
          <div>
            <p className="section-label">Projects</p>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">My Projects</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-500">
              実装力と編集視点が交差するデジタル体験をまとめています。表現、構造、運用までを含めて設計した仕事です。
            </p>
          </div>
          <FilterTabs current={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#eef1f5] px-8 py-4 text-sm font-semibold text-slate-500 transition hover:bg-[#e4e8ef]"
          >
            Load More Projects
            <ChevronDown size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
