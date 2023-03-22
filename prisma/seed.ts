import { hashPassword } from './../bcrypt/password-hasher';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create roles
  console.log('seeding role table');

  const roleAdmin = await prisma.role.upsert({
    where: { role: 'ROLE_ADMIN' },
    update: {},
    create: {
      id: 1,
      role: 'ROLE_ADMIN',
    },
  });
  await prisma.role.upsert({
    where: { role: 'ROLE_USER' },
    update: {},
    create: {
      id: 2,
      role: 'ROLE_USER',
    },
  });

  await prisma.user.upsert({
    where: { email: 'admin@test.com' },
    update: {},
    create: {
      email: 'admin@test.com',
      name: 'admin',
      adresse: 'admin street',
      password: hashPassword(process.env.ADMIN_PASS),
      roleId: roleAdmin.id,
    },
  });

  // create article types
  console.log('seeding article type table');

  await prisma.articleType.upsert({
    where: { type: 'Home' },
    update: {},
    create: { type: 'Home' },
  });
  await prisma.articleType.upsert({
    where: { type: 'Tips/Tricks' },
    update: {},
    create: { type: 'Tips/Tricks' },
  });
  await prisma.articleType.upsert({
    where: { type: 'FIX' },
    update: {},
    create: { type: 'FIX' },
  });
  await prisma.articleType.upsert({
    where: { type: 'DIY' },
    update: {},
    create: { type: 'DIY' },
  });
  await prisma.articleType.upsert({
    where: { type: 'QUESTION' },
    update: {},
    create: { type: 'QUESTION' },
  });
  await prisma.articleType.upsert({
    where: { type: 'REVIEW' },
    update: {},
    create: { type: 'REVIEW' },
  });

  // create articles subtypes
  console.log('database seeded');
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
