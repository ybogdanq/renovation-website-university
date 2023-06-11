/*
  Warnings:

  - You are about to drop the `characteristic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "characteristic" DROP CONSTRAINT "characteristic_renovationId_fkey";

-- AlterTable
ALTER TABLE "renovation" ADD COLUMN     "characteristics" TEXT[];

-- DropTable
DROP TABLE "characteristic";
