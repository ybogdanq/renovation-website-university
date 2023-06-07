/*
  Warnings:

  - You are about to drop the `Characteristic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Renovation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Characteristic" DROP CONSTRAINT "Characteristic_renovationId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_renovationId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_renovationId_fkey";

-- DropTable
DROP TABLE "Characteristic";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Rating";

-- DropTable
DROP TABLE "Renovation";

-- CreateTable
CREATE TABLE "renovation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imgsrc" TEXT NOT NULL,

    CONSTRAINT "renovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characteristic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "renovationId" INTEGER,

    CONSTRAINT "characteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "id" SERIAL NOT NULL,
    "renovationId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "renovationId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "characteristic" ADD CONSTRAINT "characteristic_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "renovation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "renovation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "renovation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
