import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; handle: string }>;
}) {
  const t = useTranslations("Product");

  // Placeholder product data - will be fetched from Shopify by handle
  const product = {
    name: "Botanical Radiance Serum",
    price: "$68.00",
    description:
      "A potent blend of botanical extracts and hyaluronic acid that deeply hydrates and brightens the skin. This lightweight serum absorbs quickly, leaving your skin radiant and plump.",
    ingredients:
      "Aqua, Hyaluronic Acid, Niacinamide, Rosehip Oil, Jojoba Oil, Vitamin E, Chamomile Extract, Green Tea Extract, Aloe Vera",
    howToUse:
      "Apply 2-3 drops to cleansed skin morning and evening. Gently press into skin and follow with moisturizer.",
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-muted hover:text-teal mb-10"
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          {t("backToProducts")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="aspect-square bg-cream flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-cream-dark/30 to-cream flex items-center justify-center">
              <span className="font-heading text-8xl text-teal/10 font-semibold">V</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl text-foreground font-medium">
              {product.price}
            </p>

            <p className="mt-6 text-muted leading-relaxed">
              {product.description}
            </p>

            {/* Size selector placeholder */}
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-3">{t("size")}</p>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-teal text-teal text-sm font-medium cursor-pointer">
                  30ml
                </button>
                <button className="px-4 py-2 border border-border text-muted text-sm hover:border-teal hover:text-teal cursor-pointer">
                  50ml
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-border">
                <button className="px-4 py-3 text-foreground hover:text-teal cursor-pointer">-</button>
                <span className="px-4 py-3 text-sm font-medium text-foreground min-w-[3rem] text-center">1</span>
                <button className="px-4 py-3 text-foreground hover:text-teal cursor-pointer">+</button>
              </div>
              <button className="flex-1 bg-teal hover:bg-teal-dark text-white py-3.5 px-8 text-sm font-medium tracking-wide uppercase cursor-pointer">
                {t("addToCart")}
              </button>
            </div>

            {/* Accordion sections */}
            <div className="mt-12 divide-y divide-border">
              <details className="py-4 group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-foreground">
                  {t("ingredients")}
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {product.ingredients}
                </p>
              </details>
              <details className="py-4 group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-foreground">
                  {t("howToUse")}
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {product.howToUse}
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-10">
            {t("relatedProducts")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-cream flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-cream-dark/30 to-cream flex items-center justify-center">
                    <span className="font-heading text-4xl text-teal/10 font-semibold">V</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-foreground group-hover:text-teal">
                    Related Product {i}
                  </h3>
                  <p className="mt-1 text-sm text-muted">$49.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
