/*
  Warnings:

  - You are about to drop the column `hasAllPermissions` on the `roles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `roles` DROP COLUMN `hasAllPermissions`,
    ADD COLUMN `has_all_permissions` BOOLEAN NOT NULL DEFAULT false;
