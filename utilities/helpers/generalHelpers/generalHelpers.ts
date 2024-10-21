import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0]; // 'YYYY-MM-DD'
};
