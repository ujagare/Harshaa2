import counsellingImage from "../../src/assets/image/shop/0563b5fc-a221-47ed-9489-d56f711e0aeb.webp";
import abundanceImage from "../../src/assets/image/shop/29edae1e-b0be-4e20-ad03-6994018076d7.webp";
import eftImage from "../../src/assets/image/shop/2af24bd0-93be-41bb-8e83-506d3e68b035 (1).webp";
import tarotImage from "../../src/assets/image/shop/39d293fd-023f-47b6-8180-9034f3317f24.webp";
import fullHealingImage from "../../src/assets/image/shop/7bd653b8-fd89-4df9-b44c-edb4fc28f02f.webp";

const currencyInfo = {
  currency: "INR",
  locale: "en-IN",
};

const products = [
  {
    id: "eft-tapping-energy-healing",
    title: "EFT Tapping & Energy Healing",
    subtitle: "Release emotional blocks with guided tapping and energy care.",
    description:
      "<p>A supportive session for nervous-system calming, emotional release, and energetic balance.</p>",
    image: eftImage,
    images: [{ id: "eft-1", url: eftImage }],
    ribbon_text: "Healing",
    purchasable: true,
    additional_info: [],
    variants: [
      {
        id: "eft-tapping-energy-healing-session",
        title: "60 minutes",
        price_in_cents: 9900,
        sale_price_in_cents: null,
        currency_info: currencyInfo,
        manage_inventory: false,
        inventory_quantity: 25,
      },
    ],
  },
  {
    id: "counselling-life-coaching",
    title: "Counselling & Life Coaching",
    subtitle: "A calm, private space for clarity, support, and next steps.",
    description:
      "<p>Compassionate counselling and life coaching to help you move through transitions with steadiness and purpose.</p>",
    image: counsellingImage,
    images: [{ id: "counselling-1", url: counsellingImage }],
    ribbon_text: "Support",
    purchasable: true,
    additional_info: [],
    variants: [
      {
        id: "counselling-life-coaching-session",
        title: "60 minutes",
        price_in_cents: 8800,
        sale_price_in_cents: null,
        currency_info: currencyInfo,
        manage_inventory: false,
        inventory_quantity: 25,
      },
    ],
  },
  {
    id: "full-healing-journey",
    title: "Full Healing Journey (6 Weeks)",
    subtitle: "A complete guided path for deep energetic transformation.",
    description:
      "<p>A six-week healing journey combining intuitive guidance, energy alignment, and practical integration.</p>",
    image: fullHealingImage,
    images: [{ id: "full-healing-1", url: fullHealingImage }],
    ribbon_text: "Premium",
    purchasable: true,
    additional_info: [],
    variants: [
      {
        id: "full-healing-journey-6-weeks",
        title: "6 weeks",
        price_in_cents: 44000,
        sale_price_in_cents: null,
        currency_info: currencyInfo,
        manage_inventory: false,
        inventory_quantity: 10,
      },
    ],
  },
  {
    id: "abundance-breakthrough",
    title: "Abundance Breakthrough Package",
    subtitle: "Clear money blocks and reconnect with your receiving energy.",
    description:
      "<p>A focused abundance session for releasing scarcity patterns and activating empowered receiving.</p>",
    image: abundanceImage,
    images: [{ id: "abundance-1", url: abundanceImage }],
    ribbon_text: "Abundance",
    purchasable: true,
    additional_info: [],
    variants: [
      {
        id: "abundance-breakthrough-package",
        title: "Package",
        price_in_cents: 24200,
        sale_price_in_cents: null,
        currency_info: currencyInfo,
        manage_inventory: false,
        inventory_quantity: 12,
      },
    ],
  },
  {
    id: "single-tarot-reading-session",
    title: "Single Tarot Reading Session",
    subtitle: "A focused reading for clarity, guidance, and grounded action.",
    description:
      "<p>A focused tarot session for insight, grounding, and next steps when you need a clear mirror.</p>",
    image: tarotImage,
    images: [{ id: "tarot-1", url: tarotImage }],
    ribbon_text: "Tarot",
    purchasable: true,
    additional_info: [],
    variants: [
      {
        id: "single-tarot-reading-session",
        title: "45 minutes",
        price_in_cents: 7700,
        sale_price_in_cents: null,
        currency_info: currencyInfo,
        manage_inventory: false,
        inventory_quantity: 25,
      },
    ],
  },
];

export function formatCurrency(amountInCents, info = currencyInfo) {
  return new Intl.NumberFormat(info.locale || "en-IN", {
    style: "currency",
    currency: info.currency || "INR",
    maximumFractionDigits: 0,
  }).format(amountInCents / 100);
}

function withFormattedPrices(product) {
  return {
    ...product,
    variants: product.variants.map((variant) => ({
      ...variant,
      price_formatted: formatCurrency(variant.price_in_cents, variant.currency_info),
      sale_price_formatted:
        variant.sale_price_in_cents == null
          ? null
          : formatCurrency(variant.sale_price_in_cents, variant.currency_info),
    })),
  };
}

export async function getProducts() {
  return { products: products.map(withFormattedPrices) };
}

export async function getProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    throw new Error("Product not found");
  }
  return withFormattedPrices(product);
}

export async function getProductQuantities({ product_ids: productIds = [] } = {}) {
  const variants = products
    .filter((product) => productIds.length === 0 || productIds.includes(product.id))
    .flatMap((product) =>
      product.variants.map((variant) => ({
        id: variant.id,
        inventory_quantity: variant.inventory_quantity,
      })),
    );

  return { variants };
}

export async function initializeCheckout() {
  return { url: `${window.location.origin}/success` };
}
