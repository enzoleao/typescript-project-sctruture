/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users_in_memories` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Medias" DROP CONSTRAINT "Medias_memory_id_fkey";

-- DropForeignKey
ALTER TABLE "Memory" DROP CONSTRAINT "Memory_author_id_fkey";

-- DropForeignKey
ALTER TABLE "Reflections" DROP CONSTRAINT "Reflections_memory_id_fkey";

-- DropForeignKey
ALTER TABLE "sticky_notes" DROP CONSTRAINT "sticky_notes_author_id_fkey";

-- DropForeignKey
ALTER TABLE "users_in_memories" DROP CONSTRAINT "users_in_memories_memory_id_fkey";

-- DropForeignKey
ALTER TABLE "users_in_memories" DROP CONSTRAINT "users_in_memories_user_id_fkey";

-- AlterTable
ALTER TABLE "Memory" ALTER COLUMN "author_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "sticky_notes" ALTER COLUMN "author_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users_in_memories" DROP CONSTRAINT "users_in_memories_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_in_memories_pkey" PRIMARY KEY ("user_id", "memory_id");

-- AddForeignKey
ALTER TABLE "Memory" ADD CONSTRAINT "Memory_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_in_memories" ADD CONSTRAINT "users_in_memories_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_in_memories" ADD CONSTRAINT "users_in_memories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medias" ADD CONSTRAINT "Medias_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reflections" ADD CONSTRAINT "Reflections_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sticky_notes" ADD CONSTRAINT "sticky_notes_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
