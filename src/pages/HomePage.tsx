import { AboutSection } from "../components/home/AboutSection";
import { HeroSection } from "../components/home/HeroSection";
import { HighlightsSection } from "../components/home/HighlightsSection";
import { SkillsSection } from "../components/home/SkillsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <HighlightsSection />
      <AboutSection />
      <section id="contact" className="bg-surface py-24">
        <div className="content-container">
          <div className="card-surface overflow-hidden bg-slate-900 px-8 py-10 text-white md:px-12 md:py-14">
            <p className="section-label !text-indigo-300">Contact</p>
            <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-end">
              <div>
                <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                  新しいプロダクトやブランド体験を、一緒に形にしませんか。
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  サイト制作、UI 設計、情報整理、技術コンテンツ制作まで横断して対応できます。
                  ご相談はメールまたは SNS からお気軽にどうぞ。
                </p>
              </div>
              <a href="mailto:hello@example.com" className="button-primary whitespace-nowrap">
                hello@example.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
