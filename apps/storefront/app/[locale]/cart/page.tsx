import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CartPage() {
  const t = useTranslations("Cart");

  // Placeholder empty cart state - will integrate with Shopify cart
  const cartItems: Array<{
    id: number;
    name: string;
    price: string;
    quantity: number;
    size: string;
  }> = [];

  const isEmpty = cartItems.length === 0;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-12">
          {t("title")}
        </h1>

        {isEmpty ? (
          <div className="text-center py-20">
            <svg className="mx-auto h-16 w-16 text-muted/30" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <h2 className="mt-6 font-heading text-2xl font-semibold text-foreground">
              {t("empty")}
            </h2>
            <p className="mt-3 text-muted">
              {t("emptyMessage")}
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white px-8 py-4 text-sm font-medium tracking-wide uppercase"
            >
              {t("continueShopping")}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 divide-y divide-border">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 py-6">
                  <div className="w-24 h-24 bg-cream flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-2xl text-teal/10 font-semibold">V</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-foreground">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.size}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{item.price}</p>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex items-center border border-border">
                        <button className="px-3 py-1 text-foreground hover:text-teal cursor-pointer">-</button>
                        <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                        <button className="px-3 py-1 text-foreground hover:text-teal cursor-pointer">+</button>
                      </div>
                      <button className="text-sm text-muted hover:text-red-600 cursor-pointer">
                        {t("remove")}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cream p-8">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-6">
                {t("title")}
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">{t("subtotal")}</span>
                  <span className="font-medium text-foreground">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">{t("shipping")}</span>
                  <span className="text-muted">{t("shippingNote")}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="font-medium text-foreground">{t("total")}</span>
                  <span className="font-semibold text-foreground text-lg">$0.00</span>
                </div>
              </div>
              <button className="mt-8 w-full bg-teal hover:bg-teal-dark text-white py-4 text-sm font-medium tracking-wide uppercase cursor-pointer">
                {t("checkout")}
              </button>
              <Link
                href="/products"
                className="mt-4 block text-center text-sm text-muted hover:text-teal"
              >
                {t("continueShopping")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
