// src/app/products/page.tsx
import { PrismaClient } from '@prisma/client';
import ProductCard from '@/components/ProductCard';

const prisma = new PrismaClient();

async function getAllProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return products;
}

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Tất cả sản phẩm</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}