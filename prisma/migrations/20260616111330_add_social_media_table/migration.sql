-- CreateTable
CREATE TABLE "SocialMedia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "githubLink" TEXT NOT NULL DEFAULT '',
    "linkedinLink" TEXT NOT NULL DEFAULT '',
    "instagramLink" TEXT NOT NULL DEFAULT '',
    "telegramLink" TEXT NOT NULL DEFAULT ''
);
