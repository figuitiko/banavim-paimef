/*
  Warnings:

  - You are about to drop the column `crimeTypeId` on the `ViolenceCase` table. All the data in the column will be lost.
  - You are about to drop the column `hasOrderOfProtection` on the `ViolenceCase` table. All the data in the column will be lost.
  - You are about to drop the column `isOrganizedCrime` on the `ViolenceCase` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `ViolenceCase` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ViolenceCase` table. All the data in the column will be lost.
  - You are about to drop the column `violenceTypeId` on the `ViolenceCase` table. All the data in the column will be lost.
  - You are about to drop the `CrimeType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Victim` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VictimViolenceCase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ViolenceType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VictimViolenceCase" DROP CONSTRAINT "VictimViolenceCase_victimId_fkey";

-- DropForeignKey
ALTER TABLE "VictimViolenceCase" DROP CONSTRAINT "VictimViolenceCase_violenceCaseId_fkey";

-- DropForeignKey
ALTER TABLE "ViolenceCase" DROP CONSTRAINT "ViolenceCase_crimeTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ViolenceCase" DROP CONSTRAINT "ViolenceCase_violenceTypeId_fkey";

-- AlterTable
ALTER TABLE "ViolenceCase" DROP COLUMN "crimeTypeId",
DROP COLUMN "hasOrderOfProtection",
DROP COLUMN "isOrganizedCrime",
DROP COLUMN "location",
DROP COLUMN "updatedAt",
DROP COLUMN "violenceTypeId",
ADD COLUMN     "age" INTEGER,
ADD COLUMN     "amountAgressors" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "civilStatus" TEXT,
ADD COLUMN     "isKnownByAuthorities" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "linkWithVictim" TEXT,
ADD COLUMN     "modality" TEXT,
ADD COLUMN     "municipalityName" TEXT NOT NULL DEFAULT 'Durango',
ADD COLUMN     "name" TEXT,
ADD COLUMN     "sex" TEXT,
ADD COLUMN     "victimViolenceCase" TEXT,
ADD COLUMN     "violenceType" JSONB;

-- DropTable
DROP TABLE "CrimeType";

-- DropTable
DROP TABLE "Victim";

-- DropTable
DROP TABLE "VictimViolenceCase";

-- DropTable
DROP TABLE "ViolenceType";

-- AddForeignKey
ALTER TABLE "ViolenceCase" ADD CONSTRAINT "ViolenceCase_municipalityName_fkey" FOREIGN KEY ("municipalityName") REFERENCES "Municipality"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
