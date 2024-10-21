-- CreateEnum
CREATE TYPE "Type" AS ENUM ('CTA', 'FOOTER');

-- CreateTable
CREATE TABLE "Waitlist" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'CTA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Waitlist_pkey" PRIMARY KEY ("id")
);
