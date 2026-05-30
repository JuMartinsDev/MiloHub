-- CreateTable
CREATE TABLE "Alerta" (
    "id" SERIAL NOT NULL,
    "mensagem" TEXT NOT NULL,
    "intent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alerta_pkey" PRIMARY KEY ("id")
);
