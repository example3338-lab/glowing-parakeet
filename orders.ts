import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { orderItems, orders } from "../../db/schema.js";

interface OrderItemInput {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body: {
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    deliveryAddress?: string;
    items?: OrderItemInput[];
  };

  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { customerName, customerEmail, customerPhone, deliveryAddress, items } = body;

  if (!customerName || !customerEmail || !customerPhone || !deliveryAddress || !items?.length) {
    return new Response("Missing required fields", { status: 400 });
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [order] = await db
    .insert(orders)
    .values({
      customerName,
      customerEmail,
      customerPhone,
      deliveryAddress,
      totalAmount: total.toFixed(2),
      paymentMethod: "cash_on_delivery",
      status: "pending",
    })
    .returning();

  await db.insert(orderItems).values(
    items.map((item) => ({
      orderId: order.id,
      productId: item.productId,
      productName: item.productName,
      price: item.price.toFixed(2),
      quantity: item.quantity,
    }))
  );

  return Response.json({ orderId: order.id, status: "pending" }, { status: 201 });
};

export const config: Config = {
  path: "/api/orders",
};
