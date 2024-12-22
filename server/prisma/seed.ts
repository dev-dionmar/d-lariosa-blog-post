/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function seed() {
  await prisma.post.createMany({
    data: [
      { title: 't-1', content: 'c-1' },
      { title: 't-2', content: 'c-2' },
    ],
  });
}
seed();
