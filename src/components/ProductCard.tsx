// src/components/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@prisma/client';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border border-gray-700 rounded-lg p-4 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 h-full flex flex-col">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.image || '/images/placeholder.png'}
            alt={product.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-400">{product.brand}</p>
        <p className="text-xl text-blue-400 mt-auto pt-2">
          {new Intl.NumberFormat('vi-VN').format(product.price)} đ
        </p>
      </div>
    </Link>
  );
}