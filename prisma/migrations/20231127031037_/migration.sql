/*
  Warnings:

  - Made the column `violenceType` on table `ViolenceCase` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ViolenceCase" ALTER COLUMN "violenceType" SET NOT NULL;
