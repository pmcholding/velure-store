// ---------------------------------------------------------------------------
// Shopify Storefront API – TypeScript types
// API version: 2024-01
// ---------------------------------------------------------------------------

/** Monetary value returned by the Storefront API. */
export interface Money {
  amount: string;
  currencyCode: string;
}

/** Image resource. */
export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

/** SEO metadata attached to products / collections. */
export interface SEO {
  title: string | null;
  description: string | null;
}

/** A single selectable option on a product (e.g. "Size", "Color"). */
export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

/** Price range for a product. */
export interface PriceRange {
  minVariantPrice: Money;
  maxVariantPrice: Money;
}

/** A single product variant. */
export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number | null;
  selectedOptions: { name: string; value: string }[];
  price: Money;
  compareAtPrice: Money | null;
  image: ShopifyImage | null;
}

/** Full product type returned by the Storefront API. */
export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  options: ProductOption[];
  priceRange: PriceRange;
  compareAtPriceRange: PriceRange;
  featuredImage: ShopifyImage | null;
  images: Connection<ShopifyImage>;
  variants: Connection<ProductVariant>;
  seo: SEO;
  tags: string[];
  vendor: string;
  productType: string;
  createdAt: string;
  updatedAt: string;
}

/** Collection type. */
export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  image: ShopifyImage | null;
  seo: SEO;
  updatedAt: string;
  products?: Connection<Product>;
}

// ---------------------------------------------------------------------------
// Cart
// ---------------------------------------------------------------------------

export interface CartLineItem {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    selectedOptions: { name: string; value: string }[];
    image: ShopifyImage | null;
    price: Money;
    product: Pick<Product, 'id' | 'handle' | 'title' | 'vendor' | 'featuredImage'>;
  };
  cost: {
    totalAmount: Money;
    amountPerQuantity: Money;
    compareAtAmountPerQuantity: Money | null;
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money | null;
  };
  lines: Connection<CartLineItem>;
}

// ---------------------------------------------------------------------------
// Generic Shopify connection / edge helpers
// ---------------------------------------------------------------------------

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export interface Edge<T> {
  cursor: string;
  node: T;
}

export interface Connection<T> {
  edges: Edge<T>[];
  pageInfo?: PageInfo;
}

// ---------------------------------------------------------------------------
// GraphQL operation helpers
// ---------------------------------------------------------------------------

export interface ShopifyErrorLocation {
  line: number;
  column: number;
}

export interface ShopifyError {
  message: string;
  locations?: ShopifyErrorLocation[];
}

export interface ShopifyResponse<T> {
  data?: T;
  errors?: ShopifyError[];
}

// ---------------------------------------------------------------------------
// Cart mutation input types
// ---------------------------------------------------------------------------

export interface CartLineInput {
  merchandiseId: string;
  quantity: number;
}

export interface CartLineUpdateInput {
  id: string;
  merchandiseId?: string;
  quantity: number;
}
