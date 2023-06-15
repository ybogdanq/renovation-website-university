/*
  Warnings:

  - The `imgsrc` column on the `renovation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "renovation" DROP COLUMN "imgsrc",
ADD COLUMN     "imgsrc" TEXT[];
