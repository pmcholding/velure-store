// ---------------------------------------------------------------------------
// Shopify Storefront API – GraphQL client (native fetch, no external lib)
// API version: 2024-01
// ---------------------------------------------------------------------------

import type {
  Cart,
  CartLineInput,
  CartLineUpdateInput,
  Collection,
  Connection,
  Product,
  ShopifyResponse,
} from './types';
import {
  ADD_TO_CART_MUTATION,
  CREATE_CART_MUTATION,
  GET_CART_QUERY,
  GET_COLLECTION_BY_HANDLE_QUERY,
  GET_COLLECTIONS_QUERY,
  GET_PRODUCT_BY_HANDLE_QUERY,
  GET_PRODUCTS_QUERY,
  REMOVE_FROM_CART_MUTATION,
  UPDATE_CART_MUTATION,
} from './queries';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const apiVersion = '2024-01';

const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

// ---------------------------------------------------------------------------
// Core fetch helper
// ---------------------------------------------------------------------------

export async function shopifyFetch<T = unknown>({
  query,
  variables = {},
  headers: extraHeaders,
  cache = 'force-cache',
  tags,
}: {
  query: string;
  variables?: Record<string, unknown>;
  headers?: HeadersInit;
  cache?: RequestCache;
  tags?: string[];
}): Promise<ShopifyResponse<T>> {
  if (!domain || !storefrontAccessToken) {
    throw new Error(
      'Missing Shopify environment variables. Ensure NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN are set.',
    );
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      ...extraHeaders,
    },
    body: JSON.stringify({ query, variables }),
    cache,
    ...(tags ? { next: { tags } } : {}),
  });

  const body: ShopifyResponse<T> = await response.json();

  if (body.errors) {
    console.error('[shopify] GraphQL errors:', JSON.stringify(body.errors, null, 2));
    throw new Error(body.errors.map((e) => e.message).join('\n'));
  }

  if (!response.ok) {
    throw new Error(`[shopify] HTTP ${response.status}: ${response.statusText}`);
  }

  return body;
}

// ---------------------------------------------------------------------------
// Helper – unwrap connection edges into a flat array
// ---------------------------------------------------------------------------

function removeEdgesAndNodes<T>(connection: Connection<T>): T[] {
  return connection.edges.map((edge) => edge.node);
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export async function getProducts(options?: {
  first?: number;
  after?: string;
  sortKey?: string;
  reverse?: boolean;
  query?: string;
}): Promise<Product[]> {
  const { data } = await shopifyFetch<{
    products: Connection<Product>;
  }>({
    query: GET_PRODUCTS_QUERY,
    variables: {
      first: options?.first ?? 20,
      after: options?.after,
      sortKey: options?.sortKey ?? 'RELEVANCE',
      reverse: options?.reverse ?? false,
      query: options?.query,
    },
    tags: ['products'],
  });

  return data ? removeEdgesAndNodes(data.products) : [];
}

export async function getProduct(handle: string): Promise<Product | null> {
  const { data } = await shopifyFetch<{
    productByHandle: Product | null;
  }>({
    query: GET_PRODUCT_BY_HANDLE_QUERY,
    variables: { handle },
    tags: ['products'],
  });

  return data?.productByHandle ?? null;
}

// ---------------------------------------------------------------------------
// Collections
// ---------------------------------------------------------------------------

export async function getCollections(options?: {
  first?: number;
  after?: string;
}): Promise<Collection[]> {
  const { data } = await shopifyFetch<{
    collections: Connection<Collection>;
  }>({
    query: GET_COLLECTIONS_QUERY,
    variables: {
      first: options?.first ?? 20,
      after: options?.after,
    },
    tags: ['collections'],
  });

  return data ? removeEdgesAndNodes(data.collections) : [];
}

export async function getCollection(
  handle: string,
  options?: {
    first?: number;
    after?: string;
    sortKey?: string;
    reverse?: boolean;
  },
): Promise<Collection | null> {
  const { data } = await shopifyFetch<{
    collectionByHandle: Collection | null;
  }>({
    query: GET_COLLECTION_BY_HANDLE_QUERY,
    variables: {
      handle,
      first: options?.first ?? 20,
      after: options?.after,
      sortKey: options?.sortKey ?? 'RELEVANCE',
      reverse: options?.reverse ?? false,
    },
    tags: ['collections'],
  });

  return data?.collectionByHandle ?? null;
}

// ---------------------------------------------------------------------------
// Cart
// ---------------------------------------------------------------------------

export async function getCart(cartId: string): Promise<Cart | null> {
  const { data } = await shopifyFetch<{ cart: Cart | null }>({
    query: GET_CART_QUERY,
    variables: { cartId },
    cache: 'no-store',
  });

  return data?.cart ?? null;
}

export async function createCart(lines: CartLineInput[] = []): Promise<Cart> {
  const { data } = await shopifyFetch<{
    cartCreate: { cart: Cart; userErrors: { field: string[]; message: string }[] };
  }>({
    query: CREATE_CART_MUTATION,
    variables: { lines },
    cache: 'no-store',
  });

  if (!data?.cartCreate.cart) {
    throw new Error(
      `Failed to create cart: ${data?.cartCreate.userErrors.map((e) => e.message).join(', ') ?? 'unknown error'}`,
    );
  }

  return data.cartCreate.cart;
}

export async function addToCart(
  cartId: string,
  lines: CartLineInput[],
): Promise<Cart> {
  const { data } = await shopifyFetch<{
    cartLinesAdd: { cart: Cart; userErrors: { field: string[]; message: string }[] };
  }>({
    query: ADD_TO_CART_MUTATION,
    variables: { cartId, lines },
    cache: 'no-store',
  });

  if (!data?.cartLinesAdd.cart) {
    throw new Error(
      `Failed to add to cart: ${data?.cartLinesAdd.userErrors.map((e) => e.message).join(', ') ?? 'unknown error'}`,
    );
  }

  return data.cartLinesAdd.cart;
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[],
): Promise<Cart> {
  const { data } = await shopifyFetch<{
    cartLinesRemove: { cart: Cart; userErrors: { field: string[]; message: string }[] };
  }>({
    query: REMOVE_FROM_CART_MUTATION,
    variables: { cartId, lineIds },
    cache: 'no-store',
  });

  if (!data?.cartLinesRemove.cart) {
    throw new Error(
      `Failed to remove from cart: ${data?.cartLinesRemove.userErrors.map((e) => e.message).join(', ') ?? 'unknown error'}`,
    );
  }

  return data.cartLinesRemove.cart;
}

export async function updateCart(
  cartId: string,
  lines: CartLineUpdateInput[],
): Promise<Cart> {
  const { data } = await shopifyFetch<{
    cartLinesUpdate: { cart: Cart; userErrors: { field: string[]; message: string }[] };
  }>({
    query: UPDATE_CART_MUTATION,
    variables: { cartId, lines },
    cache: 'no-store',
  });

  if (!data?.cartLinesUpdate.cart) {
    throw new Error(
      `Failed to update cart: ${data?.cartLinesUpdate.userErrors.map((e) => e.message).join(', ') ?? 'unknown error'}`,
    );
  }

  return data.cartLinesUpdate.cart;
}
