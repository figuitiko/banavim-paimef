/*
  Warnings:

  - You are about to drop the column `stateId` on the `Municipality` table. All the data in the column will be lost.
  - You are about to drop the `State` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Municipality" DROP CONSTRAINT "Municipality_stateId_fkey";

-- AlterTable
ALTER TABLE "Municipality" DROP COLUMN "stateId";

-- DropTable
DROP TABLE "State";
