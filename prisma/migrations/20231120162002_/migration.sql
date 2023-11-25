/*
  Warnings:

  - You are about to drop the column `activity` on the `Agressor` table. All the data in the column will be lost.
  - You are about to drop the column `isDrugAddict` on the `Agressor` table. All the data in the column will be lost.
  - You are about to drop the column `municipalityId` on the `Agressor` table. All the data in the column will be lost.
  - You are about to drop the column `countyId` on the `ViolenceCase` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ViolenceCase` table. All the data in the column will be lost.
  - Added the required column `municipalityName` to the `Agressor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Agressor" DROP CONSTRAINT "Agressor_municipalityId_fkey";

-- AlterTable
ALTER TABLE "Agressor" DROP COLUMN "activity",
DROP COLUMN "isDrugAddict",
DROP COLUMN "municipalityId",
ADD COLUMN     "municipalityName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ViolenceCase" DROP COLUMN "countyId",
DROP COLUMN "description";

-- AddForeignKey
ALTER TABLE "Agressor" ADD CONSTRAINT "Agressor_municipalityName_fkey" FOREIGN KEY ("municipalityName") REFERENCES "Municipality"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
