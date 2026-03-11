"use server";

import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

export const createCheckout = async (
  products: CartProduct[],
  orderId: string,
) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2026-02-25.clover",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${process.env.HOST_URL}/order/success`,
    cancel_url: `${process.env.HOST_URL}/order/cancelled`,
    metadata: {
      orderId,
    },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          // O unit_amount precisa ser inteiro (centavos), por isso o * 100
          unit_amount: Math.round(product.totalPrice * 100),
        },
        quantity: product.quantity,
      };
    }),
  });

  // Retornamos o ID e a URL para o frontend não reclamar de falta de propriedades
  return {
    id: checkout.id,
    url: checkout.url,
  };
};
