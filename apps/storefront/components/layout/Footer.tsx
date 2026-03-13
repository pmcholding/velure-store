"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="font-heading text-2xl font-semibold tracking-[0.2em]">
                VELURE
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
              {t("tagline")}
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold tracking-wide uppercase">
                {t("newsletter")}
              </h4>
              <p className="mt-2 text-sm text-white/70">
                {t("newsletterText")}
              </p>
              <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="flex-1 border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/50 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="cursor-pointer bg-gold hover:bg-gold-dark px-5 py-2.5 text-sm font-medium text-teal-dark tracking-wide uppercase"
                >
                  {t("subscribe")}
                </button>
              </form>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase">
              {t("shop")}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/collections" className="text-sm text-white/70 hover:text-gold">
                  {t("skincare")}
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-white/70 hover:text-gold">
                  {t("haircare")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-white/70 hover:text-gold">
                  {t("bestsellers")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-white/70 hover:text-gold">
                  {t("newArrivals")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase">
              {t("company")}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-gold">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-gold">
                  {t("journal")}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-gold">
                  {t("sustainability")}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-gold">
                  {t("careers")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase">
              {t("support")}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-gold">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-gold">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-gold">
                  {t("shippingReturns")}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-gold">
                  {t("privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/50">
            {t("copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
