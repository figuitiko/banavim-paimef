/*
  Warnings:

  - You are about to drop the column `name` on the `Agressor` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ViolenceCase` table. All the data in the column will be lost.
  - You are about to drop the `AgressorVictim` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `County` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Relationship` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `civilStatus` to the `Agressor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateCase` to the `Agressor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDrugAddict` to the `Agressor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isKnown` to the `Agressor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipalityId` to the `Agressor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relativeLink` to the `Agressor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `livingPlace` to the `Victim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rangeAgeId` to the `Victim` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AgressorVictim" DROP CONSTRAINT "AgressorVictim_agressorId_fkey";

-- DropForeignKey
ALTER TABLE "AgressorVictim" DROP CONSTRAINT "AgressorVictim_relationshipId_fkey";

-- DropForeignKey
ALTER TABLE "AgressorVictim" DROP CONSTRAINT "AgressorVictim_victimId_fkey";

-- DropForeignKey
ALTER TABLE "County" DROP CONSTRAINT "County_municipalityId_fkey";

-- DropForeignKey
ALTER TABLE "ViolenceCase" DROP CONSTRAINT "ViolenceCase_countyId_fkey";

-- AlterTable
ALTER TABLE "Agressor" DROP COLUMN "name",
ADD COLUMN     "civilStatus" TEXT NOT NULL,
ADD COLUMN     "dateCase" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isDrugAddict" BOOLEAN NOT NULL,
ADD COLUMN     "isKnown" BOOLEAN NOT NULL,
ADD COLUMN     "municipalityId" INTEGER NOT NULL,
ADD COLUMN     "relativeLink" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Victim" ADD COLUMN     "livingPlace" TEXT NOT NULL,
ADD COLUMN     "rangeAgeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ViolenceCase" DROP COLUMN "title";

-- DropTable
DROP TABLE "AgressorVictim";

-- DropTable
DROP TABLE "County";

-- DropTable
DROP TABLE "Relationship";

-- CreateTable
CREATE TABLE "VictimViolenceCase" (
    "id" SERIAL NOT NULL,
    "victimId" INTEGER NOT NULL,
    "violenceCaseId" INTEGER NOT NULL,
    "scholarchip" TEXT NOT NULL,
    "civilStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VictimViolenceCase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VictimViolenceCase" ADD CONSTRAINT "VictimViolenceCase_victimId_fkey" FOREIGN KEY ("victimId") REFERENCES "Victim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VictimViolenceCase" ADD CONSTRAINT "VictimViolenceCase_violenceCaseId_fkey" FOREIGN KEY ("violenceCaseId") REFERENCES "ViolenceCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agressor" ADD CONSTRAINT "Agressor_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
