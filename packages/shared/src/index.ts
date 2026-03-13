// ---------------------------------------------------------------------------
// Shared types for the velure-store monorepo
// ---------------------------------------------------------------------------

/** Supported locale codes. */
export type Locale = 'en-US' | 'pt-BR' | 'es-ES' | 'fr-FR' | 'de-DE';

/** ISO 4217 currency codes used across the store. */
export type Currency = 'USD' | 'BRL' | 'EUR' | 'GBP' | 'CAD';

/** Locale configuration for a single market / region. */
export interface LocaleConfig {
  /** BCP-47 locale code. */
  locale: Locale;
  /** Human-readable label (e.g. "English (US)"). */
  label: string;
  /** Default currency for this locale. */
  currency: Currency;
  /** ISO 3166-1 alpha-2 country code. */
  country: string;
  /** Language portion of the locale (e.g. "en"). */
  language: string;
}

/** Brand identity constants. */
export interface Brand {
  /** Store / brand display name. */
  name: string;
  /** Short tagline or description. */
  description: string;
  /** URL to the brand logo (SVG preferred). */
  logoUrl: string;
  /** Primary brand color (hex). */
  primaryColor: string;
  /** Secondary brand color (hex). */
  secondaryColor: string;
}

/** Pagination parameters used across API calls. */
export interface PaginationParams {
  first?: number;
  after?: string;
  last?: number;
  before?: string;
}

/** Generic paginated response wrapper. */
export interface PaginatedResult<T> {
  items: T[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string | null;
  startCursor: string | null;
}

/** Sort direction. */
export type SortDirection = 'asc' | 'desc';
