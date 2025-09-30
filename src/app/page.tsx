// src/app/page.tsx
import { PrismaClient } from '@prisma/client';
import ProductCard from '@/components/ProductCard';

const prisma = new PrismaClient();

async function getFeaturedProducts() {
  const products = await prisma.product.findMany({
    take: 3, // Chỉ lấy 3 sản phẩm
    orderBy: {
      createdAt: 'desc',
    },
  });
  return products;
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      <section className="text-center my-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Chào mừng đến với PhoneStore</h1>
        <p className="mt-4 text-lg text-gray-400">Những sản phẩm công nghệ đỉnh cao đang chờ bạn.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}