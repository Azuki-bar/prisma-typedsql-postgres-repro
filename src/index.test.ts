import { Prisma, PrismaClient } from "@prisma/client";
import { getNull } from "@prisma/client/sql";
import { expectTypeOf } from "expect-type";
const prisma = new PrismaClient();
async function test() {
  const res = await prisma.$queryRawTyped(getNull());
  expectTypeOf(res).toBeArray();
  // @ts-expect-error expect `{has_content: boolean}` but got `{has_content: boolean | null}`
  expectTypeOf(res).items.toEqualTypeOf<{ has_content: boolean }>();
  expectTypeOf(res).items.toEqualTypeOf<{ has_content: boolean | null }>();
}
