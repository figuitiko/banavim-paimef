/*
  Warnings:

  - The `linkWithVictim` column on the `ViolenceCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ViolenceCase" DROP COLUMN "linkWithVictim",
ADD COLUMN     "linkWithVictim" BOOLEAN;
