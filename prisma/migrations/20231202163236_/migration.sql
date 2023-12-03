/*
  Warnings:

  - You are about to drop the column `violenceType` on the `ViolenceCase` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ViolenceCase" DROP COLUMN "violenceType",
ADD COLUMN     "isEconomic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isOther" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPatrimonial" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPhysical" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPsychological" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSexual" BOOLEAN NOT NULL DEFAULT false;
