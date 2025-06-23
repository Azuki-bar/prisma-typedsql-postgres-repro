import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const prisma = new PrismaClient();
  prisma.post.createMany({
    data: [{ content: "foo" }, { content: null }],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
