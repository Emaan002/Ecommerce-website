import { NextResponse } from "next/server";

let cart: any[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(req: Request) {
  const product = await req.json();
  cart.push(product);
  return NextResponse.json(cart);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  cart = cart.filter((item) => item.id !== id);
  return NextResponse.json(cart);
}
