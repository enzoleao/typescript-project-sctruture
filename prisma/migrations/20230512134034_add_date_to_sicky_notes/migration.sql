/*
  Warnings:

  - Added the required column `date` to the `sticky_notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sticky_notes" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
