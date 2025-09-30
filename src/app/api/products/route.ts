// File: src/app/api/products/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Hàm LẤY (GET) danh sách sản phẩm (đã có)
export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

// === HÀM MỚI ĐỂ THÊM (POST) SẢN PHẨM ===
export async function POST(request: Request) {
  try {
    // 1. Lấy dữ liệu JSON được gửi từ client
    const body = await request.json();
    const { name, price, category } = body;

    // 2. Kiểm tra dữ liệu đầu vào đơn giản
    if (!name || !price) {
      return NextResponse.json({ error: 'Tên và giá là bắt buộc' }, { status: 400 });
    }

    // 3. Dùng Prisma để tạo sản phẩm mới trong database
    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: price,
        category: category,
      },
    });

    // 4. Trả về sản phẩm vừa tạo với status code 201 (Created)
    return NextResponse.json(newProduct, { status: 201 });

  } catch (error) {
    console.error("Lỗi khi tạo sản phẩm:", error);
    return NextResponse.json({ error: 'Không thể tạo sản phẩm' }, { status: 500 });
  }
}