/*
  Warnings:

  - You are about to drop the `Characteristic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Renovation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CharacteristicToRenovation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_renovationId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_renovationId_fkey";

-- DropForeignKey
ALTER TABLE "_CharacteristicToRenovation" DROP CONSTRAINT "_CharacteristicToRenovation_A_fkey";

-- DropForeignKey
ALTER TABLE "_CharacteristicToRenovation" DROP CONSTRAINT "_CharacteristicToRenovation_B_fkey";

-- DropTable
DROP TABLE "Characteristic";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Rating";

-- DropTable
DROP TABLE "Renovation";

-- DropTable
DROP TABLE "_CharacteristicToRenovation";

-- CreateTable
CREATE TABLE "renovation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imgsrc" TEXT NOT NULL,

    CONSTRAINT "renovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characteristic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "characteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL,
    "renovationId" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" TEXT NOT NULL,
    "renovationId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_characteristicTorenovation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_characteristicTorenovation_AB_unique" ON "_characteristicTorenovation"("A", "B");

-- CreateIndex
CREATE INDEX "_characteristicTorenovation_B_index" ON "_characteristicTorenovation"("B");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "renovation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "renovation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_characteristicTorenovation" ADD CONSTRAINT "_characteristicTorenovation_A_fkey" FOREIGN KEY ("A") REFERENCES "characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_characteristicTorenovation" ADD CONSTRAINT "_characteristicTorenovation_B_fkey" FOREIGN KEY ("B") REFERENCES "renovation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
