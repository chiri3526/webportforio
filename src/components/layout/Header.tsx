import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/site";
import { Container } from "./Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-slate-900">
            The Technical Editorial
          </Link>

          <nav className="hidden items-center gap-9 text-[15px] text-slate-600 md:flex">
            {navItems.map((item) => {
              const isHashLink = item.href.startsWith("/#");

              if (isHashLink) {
                return (
                  <a key={item.label} href={item.href} className="transition hover:text-accent">
                    {item.label}
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `border-b-2 pb-1 transition ${
                      isActive ? "border-accent text-accent" : "border-transparent hover:text-accent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <a href="/#contact" className="button-primary px-5 py-3">
              Hire Me
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-xl border border-line p-3 text-slate-700 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {open ? (
          <div className="border-t border-line pb-5 pt-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-slate-700">
              {navItems.map((item) =>
                item.href.startsWith("/#") ? (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} to={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                ),
              )}
              <a href="/#contact" className="button-primary mt-2 w-full" onClick={() => setOpen(false)}>
                Hire Me
              </a>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
