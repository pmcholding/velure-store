import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const PLACEHOLDER_PRODUCTS = [
  { id: 1, name: "Botanical Radiance Serum", price: "$68.00", category: "Skincare" },
  { id: 2, name: "Hydra-Glow Moisturizer", price: "$54.00", category: "Skincare" },
  { id: 3, name: "Renewal Night Cream", price: "$72.00", category: "Skincare" },
  { id: 4, name: "Vitamin C Brightening Toner", price: "$38.00", category: "Skincare" },
  { id: 5, name: "Restorative Hair Oil", price: "$46.00", category: "Haircare" },
  { id: 6, name: "Volumizing Shampoo", price: "$32.00", category: "Haircare" },
  { id: 7, name: "Deep Repair Conditioner", price: "$34.00", category: "Haircare" },
  { id: 8, name: "Scalp Revival Treatment", price: "$52.00", category: "Haircare" },
];

export default function ProductsPage() {
  const t = useTranslations("Products");
  const tProduct = useTranslations("Product");

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground">
            {t("title")}
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-border">
          <p className="text-sm text-muted">
            {PLACEHOLDER_PRODUCTS.length} products
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted">{t("sortBy")}:</span>
            <select className="text-sm bg-transparent border-none text-foreground focus:outline-none cursor-pointer">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
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
                <p className="text-xs text-muted tracking-wide uppercase">{product.category}</p>
                <h3 className="mt-1 text-sm font-medium text-foreground group-hover:text-teal">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-foreground font-medium">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
