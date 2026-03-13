import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const PLACEHOLDER_COLLECTIONS = [
  {
    handle: "velure-skin",
    image: null,
    productCount: 12,
  },
  {
    handle: "velure-hair",
    image: null,
    productCount: 8,
  },
  {
    handle: "bestsellers",
    image: null,
    productCount: 6,
  },
  {
    handle: "new-arrivals",
    image: null,
    productCount: 4,
  },
];

export default function CollectionsPage() {
  const t = useTranslations("Collections");
  const tFeatured = useTranslations("FeaturedCollections");

  const collectionNames: Record<string, string> = {
    "velure-skin": tFeatured("skin.title"),
    "velure-hair": tFeatured("hair.title"),
    bestsellers: t("title"),
    "new-arrivals": t("title"),
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground">
            {t("title")}
          </h1>
          <p className="mt-4 text-muted text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLACEHOLDER_COLLECTIONS.map((collection) => (
            <Link
              key={collection.handle}
              href={`/collections/${collection.handle}`}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[16/9] bg-cream flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-teal/5 to-cream-dark flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <span className="font-heading text-6xl text-teal/10 font-semibold">V</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-heading text-2xl font-semibold text-white">
                  {collectionNames[collection.handle] || collection.handle}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {collection.productCount} products
                </p>
                <span className="mt-3 text-sm font-medium text-gold tracking-wide uppercase">
                  {t("viewCollection")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
