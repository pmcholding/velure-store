import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const PLACEHOLDER_PRODUCTS = [
  { id: 1, name: "Botanical Radiance Serum", price: "$68.00" },
  { id: 2, name: "Hydra-Glow Moisturizer", price: "$54.00" },
  { id: 3, name: "Renewal Night Cream", price: "$72.00" },
  { id: 4, name: "Vitamin C Brightening Toner", price: "$38.00" },
  { id: 5, name: "Gentle Cleansing Balm", price: "$42.00" },
  { id: 6, name: "Eye Revive Complex", price: "$58.00" },
];

export default function CollectionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; handle: string }>;
}) {
  const t = useTranslations("Collections");
  const tProduct = useTranslations("Product");

  // Placeholder - will fetch collection by handle from Shopify
  const collectionTitle = "Velure Skin";

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/collections"
          className="inline-flex items-center text-sm text-muted hover:text-teal mb-10"
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          {t("title")}
        </Link>

        {/* Collection header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground">
            {collectionTitle}
          </h1>
          <p className="mt-4 text-muted text-lg">
            {PLACEHOLDER_PRODUCTS.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PLACEHOLDER_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group"
            >
              <div className="aspect-square bg-cream flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-cream-dark/30 to-cream flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="font-heading text-4xl text-teal/10 font-semibold">V</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-foreground group-hover:text-teal">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-foreground font-medium">
                  {product.price}
                </p>
              </div>
              <button className="mt-3 w-full border border-teal text-teal hover:bg-teal hover:text-white py-2.5 text-xs font-medium tracking-wide uppercase cursor-pointer">
                {tProduct("addToCart")}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
