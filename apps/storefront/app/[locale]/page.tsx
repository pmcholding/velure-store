import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // For static rendering support
  // setRequestLocale is called in layout, but we call useTranslations here
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-teal">
              {t("Hero.headline")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted max-w-xl">
              {t("Hero.subheadline")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white px-8 py-4 text-sm font-medium tracking-wide uppercase"
              >
                {t("Hero.cta")}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center border border-teal text-teal hover:bg-teal hover:text-white px-8 py-4 text-sm font-medium tracking-wide uppercase"
              >
                {t("Hero.secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-cream-dark/50 to-transparent hidden lg:block" />
      </section>

      {/* Featured Collections */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
              {t("FeaturedCollections.title")}
            </h2>
            <p className="mt-4 text-muted text-lg">
              {t("FeaturedCollections.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Skincare Collection */}
            <div className="group relative bg-cream overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
                <span className="font-heading text-6xl text-teal/20 font-semibold">V</span>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {t("FeaturedCollections.skin.title")}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {t("FeaturedCollections.skin.description")}
                </p>
                <Link
                  href="/collections"
                  className="mt-6 inline-flex items-center text-sm font-medium text-teal hover:text-teal-dark tracking-wide uppercase group-hover:underline underline-offset-4"
                >
                  {t("FeaturedCollections.skin.cta")}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Haircare Collection */}
            <div className="group relative bg-cream overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
                <span className="font-heading text-6xl text-gold/30 font-semibold">V</span>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {t("FeaturedCollections.hair.title")}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {t("FeaturedCollections.hair.description")}
                </p>
                <Link
                  href="/collections"
                  className="mt-6 inline-flex items-center text-sm font-medium text-teal hover:text-teal-dark tracking-wide uppercase group-hover:underline underline-offset-4"
                >
                  {t("FeaturedCollections.hair.cta")}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
              {t("Bestsellers.title")}
            </h2>
            <p className="mt-4 text-muted text-lg">
              {t("Bestsellers.subtitle")}
            </p>
          </div>

          {/* Placeholder product grid - will fetch from Shopify */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cream-dark/30 to-cream flex items-center justify-center">
                    <span className="font-heading text-4xl text-teal/10 font-semibold">V</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-foreground group-hover:text-teal">
                    Product Name {i}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    $49.00
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center border border-teal text-teal hover:bg-teal hover:text-white px-8 py-4 text-sm font-medium tracking-wide uppercase"
            >
              {t("Bestsellers.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground text-center mb-16">
            {t("Trust.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Cruelty-Free */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                {t("Trust.crueltyFree")}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t("Trust.crueltyFreeDesc")}
              </p>
            </div>

            {/* Clean Ingredients */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                {t("Trust.cleanIngredients")}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t("Trust.cleanIngredientsDesc")}
              </p>
            </div>

            {/* Sustainable */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 1 0 6.69 14.036m-6.69-14.036a8.996 8.996 0 0 1 6.69 14.036m-6.69-14.036v.568" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                {t("Trust.sustainable")}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t("Trust.sustainableDesc")}
              </p>
            </div>

            {/* Clinically Tested */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                {t("Trust.clinicallyTested")}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t("Trust.clinicallyTestedDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
