-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "status" TEXT,
    "serviceType" TEXT,
    "dateCapture" TIMESTAMP(3),
    "serviceDetail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "municipalityName" TEXT NOT NULL DEFAULT 'Durango',

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_municipalityName_fkey" FOREIGN KEY ("municipalityName") REFERENCES "Municipality"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
