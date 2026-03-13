"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  handle: string;
  image: {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  };
  price: string;
  compareAtPrice?: string;
  currencyCode?: string;
}

export default function ProductCard({
  title,
  handle,
  image,
  price,
  compareAtPrice,
  currencyCode = "USD",
}: ProductCardProps) {
  const hasDiscount = compareAtPrice && parseFloat(compareAtPrice) > parseFloat(price);

  const formatPrice = (amount: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(parseFloat(amount));
  };

  return (
    <Link
      href={`/products/${handle}`}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[var(--color-cream-dark)]">
        <Image
          src={image.url}
          alt={image.altText || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-[var(--color-gold)] text-white text-xs font-semibold px-2.5 py-1 rounded">
            Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--color-teal)] transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-semibold ${
              hasDiscount ? "text-[var(--color-teal)]" : "text-[var(--foreground)]"
            }`}
          >
            {formatPrice(price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-[var(--muted)] line-through">
              {formatPrice(compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
