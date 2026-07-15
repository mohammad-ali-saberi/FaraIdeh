import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const username = process.env.SEED_ADMIN_USERNAME;
  const plainPassword = process.env.SEED_ADMIN_PASSWORD;

  if (!username || !plainPassword) {
    throw new Error('SEED_ADMIN_USERNAME و SEED_ADMIN_PASSWORD رو توی فایل .env تنظیم کنید');
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const admin = await prisma.user.upsert({
    where: { username },
    update: {},
    create: {
      username,
      email: process.env.SEED_ADMIN_EMAIL ?? null,
      password: hashedPassword,
      fullName: process.env.SEED_ADMIN_FULLNAME ?? 'مدیر سیستم',
      role: 'admin',
      isActive: true,
      isProtected: true,
    },
  });

  console.log('Admin user created:', admin.username);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
