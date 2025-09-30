// src/app/products/[id]/page.tsx
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: { id: id },
  });
  if (!product) {
    notFound(); // Trả về trang 404 nếu không tìm thấy sản phẩm
  }
  return product;
}

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductById(Number(params.id));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
      <div className="relative w-full h-96">
        <Image
          src={product.image || '/images/placeholder.png'}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-400 mt-2">{product.brand}</p>
        <p className="text-3xl text-blue-400 my-6">
          {new Intl.NumberFormat('vi-VN').format(product.price)} đ
        </p>
        <p className="mb-6">{product.description}</p>
        <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}