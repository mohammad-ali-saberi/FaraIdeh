-- CreateTable
CREATE TABLE "TermsPage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'قوانین و مقررات',
    "content" TEXT NOT NULL DEFAULT '',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TermsPage_pkey" PRIMARY KEY ("id")
);
