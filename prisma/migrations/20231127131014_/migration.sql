/*
  Warnings:

  - You are about to drop the column `victimViolenceCase` on the `ViolenceCase` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ViolenceCase" DROP COLUMN "victimViolenceCase",
ADD COLUMN     "scholarship" TEXT,
ALTER COLUMN "violenceType" SET DEFAULT '{}';
