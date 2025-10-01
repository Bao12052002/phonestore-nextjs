// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          PhoneStore
        </Link>
        <div>
          <Link href="/products" className="mr-6 hover:text-blue-300">
            Sản phẩm
          </Link>
          <Link href="/cart" className="hover:text-blue-300">
            Giỏ hàng
          </Link>
        </div>
      </nav>
    </header>
  );
}