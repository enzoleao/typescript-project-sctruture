/*
  Warnings:

  - You are about to drop the column `country` on the `Location` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "country",
ADD COLUMN     "city" TEXT,
ALTER COLUMN "state" DROP NOT NULL;
