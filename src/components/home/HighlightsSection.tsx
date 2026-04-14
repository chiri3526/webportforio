import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { highlights } from "../../data/site";
import { Container } from "../layout/Container";

export function HighlightsSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Case Studies</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Recent Highlights
            </h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {highlights.map((highlight) => (
            <article key={highlight.id} className="group">
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="h-[340px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {highlight.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 text-3xl font-bold text-slate-900">{highlight.title}</h3>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-500">{highlight.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
