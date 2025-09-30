// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany(); // Xóa dữ liệu cũ để tránh trùng lặp

  await prisma.product.createMany({
    data: [
      {
        name: 'Galaxy S25 Ultra',
        description: 'Điện thoại flagship hàng đầu từ Samsung với camera AI.',
        price: 35000000,
        brand: 'Samsung',
        stock: 50,
        image: '/images/galaxy-s25.jpg',
      },
      {
        name: 'iPhone 17 Pro',
        description: 'Thiết kế titan cao cấp và chip A19 Bionic mạnh mẽ.',
        price: 38000000,
        brand: 'Apple',
        stock: 40,
        image: '/images/iphone-17.jpg',
      },
      {
        name: 'Pixel 10 Pro',
        description: 'Trải nghiệm Android thuần khiết và nhiếp ảnh điện toán đỉnh cao.',
        price: 28000000,
        brand: 'Google',
        stock: 30,
        image: '/images/pixel-10.jpg',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });