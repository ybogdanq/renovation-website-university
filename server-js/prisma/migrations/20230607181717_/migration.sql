-- AlterTable
ALTER TABLE "characteristic" ADD COLUMN     "renovationIds" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "renovation" ADD COLUMN     "characteristicIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "commentIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "ratingIds" TEXT[] DEFAULT ARRAY[]::TEXT[];
