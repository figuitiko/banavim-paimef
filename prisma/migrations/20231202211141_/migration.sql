-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "victimName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "orderType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "emisorAuthority" TEXT NOT NULL,
    "municipalityName" TEXT NOT NULL DEFAULT 'Durango',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_victimName_key" ON "Order"("victimName");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_municipalityName_fkey" FOREIGN KEY ("municipalityName") REFERENCES "Municipality"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
