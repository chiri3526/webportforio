import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../layout/Container";

export function HeroSection() {
  return (
    <section className="bg-surface bg-halo py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="max-w-2xl">
            <p className="section-label">Portfolio</p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
              Shaping the
              <br />
              <span className="text-accent">future of the web.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-500 md:text-[1.375rem]">
              I combine high-quality full-stack development with an editorial approach to information design,
              turning complex value into clear, polished interfaces.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/projects" className="button-primary gap-2">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a href="/#about" className="button-secondary">
                About Me
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-x-12 top-12 h-48 rounded-full bg-indigo-300/20 blur-3xl" />
            <img
              src="/images/hero-board.svg"
              alt="Abstract circuit board graphic"
              className="relative w-full max-w-[620px] rounded-[2rem] object-cover shadow-soft lg:rotate-[3deg]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
