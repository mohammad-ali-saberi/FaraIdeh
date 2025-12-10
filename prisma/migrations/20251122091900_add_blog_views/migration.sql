-- CreateTable
CREATE TABLE "BlogView" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "blogId" INTEGER NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT,
    "viewedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BlogView_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blogs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blogs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "contentType" TEXT NOT NULL DEFAULT 'markdown',
    "published" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "featuredImage" TEXT,
    "readingTimeMinutes" INTEGER NOT NULL DEFAULT 1,
    "labels" JSONB NOT NULL DEFAULT [],
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Blogs" ("author", "category", "content", "contentType", "createdAt", "excerpt", "featuredImage", "id", "labels", "published", "readingTimeMinutes", "slug", "title", "updatedAt") SELECT "author", "category", "content", "contentType", "createdAt", "excerpt", "featuredImage", "id", "labels", "published", "readingTimeMinutes", "slug", "title", "updatedAt" FROM "Blogs";
DROP TABLE "Blogs";
ALTER TABLE "new_Blogs" RENAME TO "Blogs";
CREATE UNIQUE INDEX "Blogs_slug_key" ON "Blogs"("slug");
CREATE INDEX "Blogs_slug_idx" ON "Blogs"("slug");
CREATE INDEX "Blogs_published_createdAt_idx" ON "Blogs"("published", "createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "BlogView_blogId_idx" ON "BlogView"("blogId");

-- CreateIndex
CREATE INDEX "BlogView_viewedAt_idx" ON "BlogView"("viewedAt");

-- CreateIndex
CREATE UNIQUE INDEX "BlogView_blogId_ipAddress_key" ON "BlogView"("blogId", "ipAddress");
