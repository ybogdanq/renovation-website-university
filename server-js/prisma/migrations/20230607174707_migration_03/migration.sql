-- CreateTable
CREATE TABLE "Renovation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imgsrc" TEXT NOT NULL,

    CONSTRAINT "Renovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Characteristic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Characteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "renovationId" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "renovationId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacteristicToRenovation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacteristicToRenovation_AB_unique" ON "_CharacteristicToRenovation"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacteristicToRenovation_B_index" ON "_CharacteristicToRenovation"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "Renovation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_renovationId_fkey" FOREIGN KEY ("renovationId") REFERENCES "Renovation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacteristicToRenovation" ADD CONSTRAINT "_CharacteristicToRenovation_A_fkey" FOREIGN KEY ("A") REFERENCES "Characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacteristicToRenovation" ADD CONSTRAINT "_CharacteristicToRenovation_B_fkey" FOREIGN KEY ("B") REFERENCES "Renovation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
