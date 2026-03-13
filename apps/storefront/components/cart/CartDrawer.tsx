"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface CartLineItem {
  id: string;
  title: string;
  variantTitle?: string;
  quantity: number;
  price: string;
  currencyCode: string;
  image?: {
    url: string;
    altText?: string;
  };
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lineItems: CartLineItem[];
  onUpdateQuantity: (lineItemId: string, quantity: number) => void;
  onRemoveItem: (lineItemId: string) => void;
  checkoutUrl?: string;
}

export default function CartDrawer({
  isOpen,
  onClose,
  lineItems,
  onUpdateQuantity,
  onRemoveItem,
  checkoutUrl,
}: CartDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const formatPrice = (amount: string, currencyCode: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(parseFloat(amount));
  };

  const subtotal = lineItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0,
  );

  const subtotalCurrency = lineItems[0]?.currencyCode || "USD";

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[var(--color-cream)] shadow-2xl flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
          <h2 className="font-heading text-lg font-semibold text-[var(--foreground)]">
            Your Cart ({lineItems.length})
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-1 text-[var(--muted)] hover:text-[var(--foreground)]"
            aria-label="Close cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Line Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lineItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="h-16 w-16 text-[var(--border)] mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p className="text-[var(--muted)]">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {lineItems.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 py-4 border-b border-[var(--border)] last:border-0"
                >
                  {/* Product Image */}
                  {item.image && (
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded bg-[var(--color-cream-dark)]">
                      <Image
                        src={item.image.url}
                        alt={item.image.altText || item.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  )}

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-[var(--foreground)] line-clamp-1">
                        {item.title}
                      </h3>
                      {item.variantTitle && (
                        <p className="text-xs text-[var(--muted)] mt-0.5">
                          {item.variantTitle}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[var(--border)] rounded">
                        <button
                          onClick={() =>
                            item.quantity > 1
                              ? onUpdateQuantity(item.id, item.quantity - 1)
                              : onRemoveItem(item.id)
                          }
                          className="cursor-pointer px-2 py-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-sm font-medium text-[var(--foreground)] min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="cursor-pointer px-2 py-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-semibold text-[var(--foreground)]">
                        {formatPrice(
                          (parseFloat(item.price) * item.quantity).toString(),
                          item.currencyCode,
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="cursor-pointer self-start p-1 text-[var(--muted)] hover:text-red-600"
                    aria-label={`Remove ${item.title}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lineItems.length > 0 && (
          <div className="border-t border-[var(--border)] px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--muted)]">Subtotal</span>
              <span className="text-lg font-semibold text-[var(--foreground)]">
                {formatPrice(subtotal.toString(), subtotalCurrency)}
              </span>
            </div>
            <p className="text-xs text-[var(--muted)]">
              Shipping and taxes calculated at checkout.
            </p>
            <Button
              variant="gold"
              size="lg"
              className="w-full"
              onClick={() => {
                if (checkoutUrl) {
                  window.location.href = checkoutUrl;
                }
              }}
            >
              Checkout
            </Button>
            <button
              onClick={onClose}
              className="cursor-pointer w-full text-center text-sm text-[var(--color-teal)] hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
