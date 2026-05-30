-- CreateTable
CREATE TABLE "HubMessage" (
    "id" SERIAL NOT NULL,
    "input" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "intent" TEXT NOT NULL,
    "channel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HubMessage_pkey" PRIMARY KEY ("id")
);
