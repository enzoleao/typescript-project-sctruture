-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_memory_id_fkey";

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
