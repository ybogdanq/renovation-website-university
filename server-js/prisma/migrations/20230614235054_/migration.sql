/*
  Warnings:

  - Added the required column `name` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comment" ADD COLUMN     "name" TEXT NOT NULL;
