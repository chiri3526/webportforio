import { ArrowUpRight } from "lucide-react";
import { Container } from "../layout/Container";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="section-label">About</p>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              I design experiences that communicate clearly from concept through implementation.
            </h2>
          </div>
          <div className="card-surface bg-surface p-8">
            <p className="text-base leading-8 text-slate-600">
              I work across information architecture, UI design, and frontend development, translating
              complex technology and business value into interfaces people can understand quickly. I also
              design for maintainability, so the experience stays easy to update and operate over time.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
