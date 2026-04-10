import { Cloud, Code2, Database, LayoutTemplate, Server, Sparkles } from "lucide-react";
import { skills } from "../../data/site";
import type { Skill } from "../../types/content";
import { Container } from "../layout/Container";

function SkillIcon({ icon }: { icon: Skill["icon"] }) {
  const commonClass = "h-5 w-5 text-accent";

  switch (icon) {
    case "server":
      return <Server className={commonClass} />;
    case "database":
      return <Database className={commonClass} />;
    case "cloud":
      return <Cloud className={commonClass} />;
    case "spark":
      return <Sparkles className={commonClass} />;
    case "layout":
      return <LayoutTemplate className={commonClass} />;
    default:
      return <Code2 className={commonClass} />;
  }
}

export function SkillsSection() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <p className="section-label">Ecosystem</p>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Featured Skills</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
          {skills.map((skill) => (
            <article key={skill.id} className="card-surface rounded-[1.5rem] p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accentSoft">
                <SkillIcon icon={skill.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">{skill.name}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
