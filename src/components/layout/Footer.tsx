import { Container } from "./Container";

const footerLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-slate-500">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-lg font-extrabold text-slate-900">The Technical Editorial</div>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-accent">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-slate-400">© 2024 The Technical Editorial. Built with craft.</p>
        </div>
      </Container>
    </footer>
  );
}
