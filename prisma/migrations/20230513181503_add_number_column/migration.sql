/*
  Warnings:

  - Made the column `number` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "number" SET NOT NULL;
