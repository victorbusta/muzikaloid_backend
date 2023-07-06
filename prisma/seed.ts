import { hashPassword } from './../bcrypt/password-hasher';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create roles
  console.log('seeding role table');

  const roleAdmin = await prisma.role.upsert({
    where: { id: Number(process.env.ROLE_ADMIN_ID) },
    update: {},
    create: {
      id: Number(process.env.ROLE_ADMIN_ID),
      role: 'ADMIN',
    },
  });
  await prisma.role.upsert({
    where: { id: Number(process.env.ROLE_USER_ID) },
    update: {},
    create: {
      id: Number(process.env.ROLE_USER_ID),
      role: 'USER',
    },
  });

  // admin user creation
  console.log('seeding admin table');

  await prisma.user.upsert({
    where: { email: 'admin@test.com' },
    update: {},
    create: {
      firstname: 'victor',
      lastname: 'santos de bustamante',
      username: 'admin',
      email: 'admin@test.com',
      password: hashPassword(process.env.ADMIN_PASS),
      validated: true,
      role_id: roleAdmin.id,
    },
  });

  // create article types
  console.log('seeding article type table');

  await prisma.articleType.upsert({
    where: { label: 'Admin' },
    update: {},
    create: { id: Number(process.env.ADMIN_TYPE_ID), label: 'Admin' },
  });
  await prisma.articleType.upsert({
    where: { label: 'HARDWARE' },
    update: {},
    create: { id: Number(process.env.HARDWARE_TYPE_ID), label: 'HARDWARE' },
  });
  await prisma.articleType.upsert({
    where: { label: 'Tips/Tricks' },
    update: {},
    create: { id: 3, label: 'Tips/Tricks' },
  });
  await prisma.articleType.upsert({
    where: { label: 'FIX' },
    update: {},
    create: { id: 4, label: 'FIX' },
  });
  await prisma.articleType.upsert({
    where: { label: 'DIY' },
    update: {},
    create: { id: 5, label: 'DIY' },
  });
  await prisma.articleType.upsert({
    where: { label: 'QUESTION' },
    update: {},
    create: { id: 6, label: 'QUESTION' },
  });
  await prisma.articleType.upsert({
    where: { label: 'REVIEW' },
    update: {},
    create: { id: 7, label: 'REVIEW' },
  });

  // create hardware types
  console.log('seeding hardware type table');

  await prisma.hardwareType.upsert({
    where: { label: 'Synthesiser' },
    update: {},
    create: { label: 'Synthesiser' },
  });
  await prisma.hardwareType.upsert({
    where: { label: 'Module' },
    update: {},
    create: { label: 'Module' },
  });
  await prisma.hardwareType.upsert({
    where: { label: 'Pedal' },
    update: {},
    create: { label: 'Pedal' },
  });
  await prisma.hardwareType.upsert({
    where: { label: 'Component' },
    update: {},
    create: { label: 'Component' },
  });

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
