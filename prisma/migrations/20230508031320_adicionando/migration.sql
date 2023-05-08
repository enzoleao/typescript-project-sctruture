/*
  Warnings:

  - The primary key for the `Medias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Memory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Reflections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `sticky_notes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users_in_memories` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_memory_id_fkey";

-- DropForeignKey
ALTER TABLE "Medias" DROP CONSTRAINT "Medias_memory_id_fkey";

-- DropForeignKey
ALTER TABLE "Reflections" DROP CONSTRAINT "Reflections_memory_id_fkey";

-- DropForeignKey
ALTER TABLE "users_in_memories" DROP CONSTRAINT "users_in_memories_memory_id_fkey";

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "memory_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Medias" DROP CONSTRAINT "Medias_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "memory_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Medias_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Medias_id_seq";

-- AlterTable
ALTER TABLE "Memory" DROP CONSTRAINT "Memory_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Memory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Memory_id_seq";

-- AlterTable
ALTER TABLE "Reflections" DROP CONSTRAINT "Reflections_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "memory_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Reflections_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Reflections_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "birthday" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "sticky_notes" DROP CONSTRAINT "sticky_notes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "sticky_notes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "sticky_notes_id_seq";

-- AlterTable
ALTER TABLE "users_in_memories" DROP CONSTRAINT "users_in_memories_pkey",
ALTER COLUMN "memory_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_in_memories_pkey" PRIMARY KEY ("user_id", "memory_id");

-- AddForeignKey
ALTER TABLE "users_in_memories" ADD CONSTRAINT "users_in_memories_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medias" ADD CONSTRAINT "Medias_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reflections" ADD CONSTRAINT "Reflections_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
