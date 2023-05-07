-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Memory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Memory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_in_memories" (
    "user_id" INTEGER NOT NULL,
    "memory_id" INTEGER NOT NULL,

    CONSTRAINT "users_in_memories_pkey" PRIMARY KEY ("user_id","memory_id")
);

-- CreateTable
CREATE TABLE "Medias" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "memory_id" INTEGER NOT NULL,

    CONSTRAINT "Medias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reflections" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "memory_id" INTEGER NOT NULL,

    CONSTRAINT "Reflections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "memory_id" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sticky_notes" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sticky_notes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Memory" ADD CONSTRAINT "Memory_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_in_memories" ADD CONSTRAINT "users_in_memories_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_in_memories" ADD CONSTRAINT "users_in_memories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medias" ADD CONSTRAINT "Medias_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reflections" ADD CONSTRAINT "Reflections_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sticky_notes" ADD CONSTRAINT "sticky_notes_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
