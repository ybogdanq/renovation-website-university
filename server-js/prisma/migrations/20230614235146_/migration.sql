/*
  Warnings:

  - You are about to drop the column `name` on the `comment` table. All the data in the column will be lost.
  - Added the required column `userName` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comment" DROP COLUMN "name",
ADD COLUMN     "userName" TEXT NOT NULL;
