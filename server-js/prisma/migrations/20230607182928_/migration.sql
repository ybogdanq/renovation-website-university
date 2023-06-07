/*
  Warnings:

  - You are about to drop the `_characteristicTorenovation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `characteristic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `renovation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_characteristicTorenovation" DROP CONSTRAINT "_characteristicTorenovation_A_fkey";

-- DropForeignKey
ALTER TABLE "_characteristicTorenovation" DROP CONSTRAINT "_characteristicTorenovation_B_fkey";

-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_renovationId_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_renovationId_fkey";

-- DropTable
DROP TABLE "_characteristicTorenovation";

-- DropTable
DROP TABLE "characteristic";

-- DropTable
DROP TABLE "comment";

-- DropTable
DROP TABLE "rating";

-- DropTable
DROP TABLE "renovation";

-- CreateTable
CREATE TABLE "Renovation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imgsrc" TEXT NOT NULL,

    CONSTRAINT "Renovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Characteristic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "renovationId" INTEGER,

    CONSTRAINT "Characteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "renovationId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "renovationId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Characteristic" ADD CONSTRAINT "Characteristic_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "Renovation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "Renovation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "Renovation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
