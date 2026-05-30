/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `observacoes` on the `Paciente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "dataNascimento",
DROP COLUMN "observacoes",
ADD COLUMN     "idade" INTEGER,
ADD COLUMN     "observacao" TEXT;
