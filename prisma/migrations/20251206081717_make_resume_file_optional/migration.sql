-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TeamMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "photo" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "jobTitles" JSONB NOT NULL DEFAULT [],
    "githubLink" TEXT,
    "linkedinLink" TEXT,
    "instagramLink" TEXT,
    "resumeFile" TEXT,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_TeamMember" ("createdAt", "firstName", "githubLink", "id", "instagramLink", "jobTitles", "lastName", "linkedinLink", "photo", "resumeFile", "updatedAt", "viewCount") SELECT "createdAt", "firstName", "githubLink", "id", "instagramLink", "jobTitles", "lastName", "linkedinLink", "photo", "resumeFile", "updatedAt", "viewCount" FROM "TeamMember";
DROP TABLE "TeamMember";
ALTER TABLE "new_TeamMember" RENAME TO "TeamMember";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
