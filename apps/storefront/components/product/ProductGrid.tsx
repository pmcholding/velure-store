import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  handle: string;
  featuredImage: {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange?: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

const columnClasses: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function ProductGrid({
  products,
  columns = 4,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-[var(--muted)] text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${columnClasses[columns]} gap-6`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          handle={product.handle}
          image={product.featuredImage}
          price={product.priceRange.minVariantPrice.amount}
          compareAtPrice={product.compareAtPriceRange?.minVariantPrice.amount}
          currencyCode={product.priceRange.minVariantPrice.currencyCode}
        />
      ))}
    </div>
  );
}
