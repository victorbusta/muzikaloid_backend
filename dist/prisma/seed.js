"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const password_hasher_1 = require("./../bcrypt/password-hasher");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('seeding role table');
    const roleAdmin = await prisma.role.upsert({
        where: { role: 'ROLE_ADMIN' },
        update: {},
        create: {
            id: 1,
            role: 'ADMIN',
        },
    });
    await prisma.role.upsert({
        where: { role: 'ROLE_USER' },
        update: {},
        create: {
            id: 2,
            role: 'USER',
        },
    });
    console.log('seeding admin table');
    await prisma.user.upsert({
        where: { email: 'admin@test.com' },
        update: {},
        create: {
            firstname: 'victor',
            lastname: 'santos de bustamante',
            username: 'admin',
            email: 'admin@test.com',
            password: (0, password_hasher_1.hashPassword)(process.env.ADMIN_PASS),
            roleId: roleAdmin.id,
        },
    });
    console.log('seeding article type table');
    await prisma.articleType.upsert({
        where: { type: 'Admin' },
        update: {},
        create: { type: 'Admin' },
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
    console.log('seeding hardware type table');
    await prisma.hardwareType.upsert({
        where: { type: 'Synthesiser' },
        update: {},
        create: { type: 'Synthesiser' },
    });
    await prisma.hardwareType.upsert({
        where: { type: 'Module' },
        update: {},
        create: { type: 'Module' },
    });
    await prisma.hardwareType.upsert({
        where: { type: 'Pedal' },
        update: {},
        create: { type: 'Pedal' },
    });
    await prisma.hardwareType.upsert({
        where: { type: 'Component' },
        update: {},
        create: { type: 'Component' },
    });
    console.log('seeding document type table');
    await prisma.documentType.upsert({
        where: { type: 'PP' },
        update: {},
        create: { type: 'PP' },
    });
    await prisma.documentType.upsert({
        where: { type: 'Schema' },
        update: {},
        create: { type: 'Schema' },
    });
    await prisma.documentType.upsert({
        where: { type: 'Datasheet' },
        update: {},
        create: { type: 'Datasheet' },
    });
    await prisma.documentType.upsert({
        where: { type: 'Documentation' },
        update: {},
        create: { type: 'Documentation' },
    });
    await prisma.documentType.upsert({
        where: { type: 'Video' },
        update: {},
        create: { type: 'Video' },
    });
    console.log('database seeded');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map