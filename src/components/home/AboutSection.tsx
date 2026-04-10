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
              実装と編集の両方から、伝わる体験を設計します。
            </h2>
          </div>
          <div className="card-surface bg-surface p-8">
            <p className="text-base leading-8 text-slate-600">
              情報設計、UI デザイン、フロントエンド実装を横断しながら、複雑な技術や事業価値をわかりやすく翻訳することが得意です。
              見た目の美しさだけでなく、更新しやすさや運用のしやすさも含めて設計します。
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
            >
              お問い合わせへ
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
