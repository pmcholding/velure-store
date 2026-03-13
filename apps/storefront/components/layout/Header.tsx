"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function Header() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleLocaleChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale as "en" | "es" | "pt" });
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          {/* Navigation - desktop */}
          <nav className="hidden lg:flex lg:gap-x-8">
            <Link href="/products" className="text-sm font-medium text-foreground hover:text-teal tracking-wide uppercase">
              {t("shop")}
            </Link>
            <Link href="/collections" className="text-sm font-medium text-foreground hover:text-teal tracking-wide uppercase">
              {t("collections")}
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-teal tracking-wide uppercase">
              {t("blog")}
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-heading text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-teal">
              VELURE
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-x-4">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 text-sm">
              {routing.locales.map((loc, idx) => (
                <span key={loc} className="flex items-center">
                  {idx > 0 && <span className="text-border mx-1">|</span>}
                  <button
                    onClick={() => handleLocaleChange(loc)}
                    className={`cursor-pointer tracking-wide ${
                      locale === loc
                        ? "text-teal font-semibold"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {loc.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>

            <button type="button" className="text-foreground hover:text-teal cursor-pointer" aria-label={t("search")}>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <Link href="/cart" className="text-foreground hover:text-teal" aria-label={t("cart")}>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="mx-auto max-w-7xl px-6 py-6 space-y-4">
            <Link href="/products" className="block text-sm font-medium text-foreground hover:text-teal tracking-wide uppercase" onClick={() => setMobileMenuOpen(false)}>
              {t("shop")}
            </Link>
            <Link href="/collections" className="block text-sm font-medium text-foreground hover:text-teal tracking-wide uppercase" onClick={() => setMobileMenuOpen(false)}>
              {t("collections")}
            </Link>
            <Link href="/blog" className="block text-sm font-medium text-foreground hover:text-teal tracking-wide uppercase" onClick={() => setMobileMenuOpen(false)}>
              {t("blog")}
            </Link>
            {/* Mobile language switcher */}
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              {routing.locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    handleLocaleChange(loc);
                    setMobileMenuOpen(false);
                  }}
                  className={`cursor-pointer text-sm tracking-wide px-3 py-1 ${
                    locale === loc
                      ? "bg-teal text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
