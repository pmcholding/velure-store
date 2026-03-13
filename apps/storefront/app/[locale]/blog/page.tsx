import { useTranslations } from "next-intl";

const PLACEHOLDER_POSTS = [
  {
    id: 1,
    slug: "the-science-of-botanical-skincare",
    title: "The Science of Botanical Skincare",
    excerpt: "Discover how plant-derived ingredients can transform your skin health with clinically proven results.",
    category: "Skincare",
    date: "2026-03-10",
  },
  {
    id: 2,
    slug: "building-a-sustainable-beauty-routine",
    title: "Building a Sustainable Beauty Routine",
    excerpt: "Simple steps to make your beauty routine more eco-conscious without compromising on results.",
    category: "Wellness",
    date: "2026-03-05",
  },
  {
    id: 3,
    slug: "understanding-your-hair-type",
    title: "Understanding Your Hair Type",
    excerpt: "A comprehensive guide to identifying your hair type and choosing the right products for optimal care.",
    category: "Haircare",
    date: "2026-02-28",
  },
];

export default function BlogPage() {
  const t = useTranslations("Blog");

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground">
            {t("title")}
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {PLACEHOLDER_POSTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PLACEHOLDER_POSTS.map((post) => (
              <article key={post.id} className="group">
                <div className="aspect-[16/10] bg-cream flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-teal/5 to-cream-dark flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <span className="font-heading text-5xl text-teal/10 font-semibold">V</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="text-gold font-medium tracking-wide uppercase">{post.category}</span>
                    <span>|</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="mt-3 font-heading text-xl font-semibold text-foreground group-hover:text-teal">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-teal tracking-wide uppercase">
                    {t("readMore")}
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-lg">{t("noPosts")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
