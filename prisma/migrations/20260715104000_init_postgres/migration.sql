-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "photo" TEXT,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isProtected" BOOLEAN NOT NULL DEFAULT false,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Blogs" (
    "id" SERIAL NOT NULL,
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
    "labels" JSONB NOT NULL DEFAULT '[]',
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BlogView" (
    "id" SERIAL NOT NULL,
    "blogId" INTEGER NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlogView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TeamMember" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "jobTitles" JSONB NOT NULL DEFAULT '[]',
    "githubLink" TEXT,
    "linkedinLink" TEXT,
    "instagramLink" TEXT,
    "resumeFile" TEXT,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" SERIAL NOT NULL,
    "photos" JSONB NOT NULL DEFAULT '[]',
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "projectLink" TEXT,
    "requesterName" TEXT,
    "technologies" JSONB NOT NULL DEFAULT '[]',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Order" (
    "id" SERIAL NOT NULL,
    "category" JSONB NOT NULL,
    "users" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Achievement" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Slider" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "caption" TEXT,
    "linkUrl" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Newsletter" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "subscribedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PageView" (
    "id" SERIAL NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PageView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SocialMedia" (
    "id" SERIAL NOT NULL,
    "githubLink" TEXT NOT NULL DEFAULT '',
    "linkedinLink" TEXT NOT NULL DEFAULT '',
    "instagramLink" TEXT NOT NULL DEFAULT '',
    "telegramLink" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "SocialMedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Blogs_slug_key" ON "public"."Blogs"("slug");

-- CreateIndex
CREATE INDEX "Blogs_slug_idx" ON "public"."Blogs"("slug");

-- CreateIndex
CREATE INDEX "Blogs_published_createdAt_idx" ON "public"."Blogs"("published", "createdAt");

-- CreateIndex
CREATE INDEX "BlogView_blogId_idx" ON "public"."BlogView"("blogId");

-- CreateIndex
CREATE INDEX "BlogView_viewedAt_idx" ON "public"."BlogView"("viewedAt");

-- CreateIndex
CREATE UNIQUE INDEX "BlogView_blogId_ipAddress_key" ON "public"."BlogView"("blogId", "ipAddress");

-- CreateIndex
CREATE INDEX "Contact_createdAt_idx" ON "public"."Contact"("createdAt");

-- CreateIndex
CREATE INDEX "Contact_email_idx" ON "public"."Contact"("email");

-- CreateIndex
CREATE INDEX "Contact_phone_idx" ON "public"."Contact"("phone");

-- CreateIndex
CREATE INDEX "Slider_isActive_sortOrder_idx" ON "public"."Slider"("isActive", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_email_key" ON "public"."Newsletter"("email");

-- CreateIndex
CREATE INDEX "Newsletter_email_idx" ON "public"."Newsletter"("email");

-- CreateIndex
CREATE INDEX "Newsletter_isActive_idx" ON "public"."Newsletter"("isActive");

-- CreateIndex
CREATE INDEX "PageView_ipAddress_visitedAt_idx" ON "public"."PageView"("ipAddress", "visitedAt");

-- CreateIndex
CREATE INDEX "PageView_visitedAt_idx" ON "public"."PageView"("visitedAt");

-- AddForeignKey
ALTER TABLE "public"."BlogView" ADD CONSTRAINT "BlogView_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "public"."Blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
