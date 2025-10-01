// src/app/api/products/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');

  const products = await prisma.product.findMany({
    // Nếu có 'limit', chuyển nó thành số và sử dụng, nếu không thì bỏ qua
    take: limit ? parseInt(limit) : undefined,
    orderBy: {
      createdAt: 'desc',
    },
  });
  
  return NextResponse.json(products);
}