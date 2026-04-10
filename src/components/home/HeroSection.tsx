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
              未来のWebを
              <br />
              <span className="text-accent">言語化し、実装する。</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-500 md:text-[1.375rem]">
              高品質なフルスタック実装と、編集的な視点による情報設計を組み合わせ、
              複雑な価値を端正なインターフェースへ落とし込みます。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/projects" className="button-primary gap-2">
                実績を見る
                <ArrowRight size={18} />
              </Link>
              <a href="/#about" className="button-secondary">
                私について
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-x-12 top-12 h-48 rounded-full bg-indigo-300/20 blur-3xl" />
            <img
              src="/images/hero-board.svg"
              alt="抽象化された基板グラフィック"
              className="relative w-full max-w-[620px] rounded-[2rem] object-cover shadow-soft lg:rotate-[3deg]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
