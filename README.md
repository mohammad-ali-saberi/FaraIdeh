# FaraIdeh

<div align="center">
  <img src="https://s6.uupload.ir/files/logo_k380.png" alt="FaraIdeh Logo" width="200"/>
  
  ### Transforming Ideas into Real Digital Experiences
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-6.16-2d3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
  <!-- [![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE) -->

[🌐 Website](https://fara-ideh.ir) • [📧 Contact Us](https://fara-ideh.ir/contact) • [📝 Blog](https://fara-ideh.ir/blogs)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Preview](#-preview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [Database Models](#-database-models)
- [Contributing](#-contributing)
- [Development Team](#-development-team)
- [Important Links](#-important-links)
<!-- - [License](#-license) -->

---

## 🎯 About the Project

**FaraIdeh** is a modern and multipurpose digital platform that operates as a creative and agile team, providing software development services, UI/UX design, content management, and startup launches.

### 💡 Our Vision

At FaraIdeh, we believe every idea can be transformed into a lasting digital experience. From problem discovery to design, development, and support, we stand by you to build products that truly **work** and **stay memorable**.

### 🚀 What We Offer

- **Website Design & Development**: Modern, fast, and scalable solutions
- **Startup Launch**: From idea to MVP and product growth
- **Mobile App Design**: Native and smooth user experiences
- **Instagram Page Management**: Content strategy and organic growth
- **UI/UX Design**: Beautiful and functional user interfaces
- **Content Management**: Engaging and strategic content production and management

This project includes a Content Management System (CMS), professional blog, project showcase, team management, ordering system, and advanced admin panel.

---

## 📸 Preview

![Homepage](<https://s6.uupload.ir/files/screenshot_(81)_22bw.png>)
![Services](<https://s6.uupload.ir/files/screenshot_(82)_r4yd.png>)
![Login](<https://s6.uupload.ir/files/screenshot_(84)_pcb3.png>)
![Admin Panel](<https://s6.uupload.ir/files/screenshot_(83)_74gt.png>)

---

## ✨ Key Features

### 🎨 User Interface

- Modern and responsive design with Tailwind CSS 4
- Smooth animations with Swiper
- Optimized Persian fonts (IRANYekan, YekanBakh)
- Full RTL support

### 📝 Blog System

- Advanced Markdown editor with live preview
- Category and tag system
- Smart view counter (IP-based)
- SEO-friendly with optimized slugs
- Scheduled publishing

### 💼 Project Management

- Showcase completed projects with image galleries
- Filter by category and technology
- Track view count for each project
- Active/inactive status management

### 👥 Team Management

- Display team members with complete information
- Social media links (GitHub, LinkedIn, Instagram)
- Resume upload and management
- Resume download counter

### 🎯 Ordering System

- Multi-step order form
- Service category selection
- Multiple user registration in one order
- Order management panel

### 🏆 Achievements

- Display awards and certificates
- Categorize by year
- Image gallery

### 📊 Admin Panel

- Comprehensive statistical dashboard
- Complete content management (CRUD operations)
- Secure authentication with JWT
- Aboutpage slider management
- View feedback and contact messages
- Newsletter management
- Page view statistics

### 🔒 Security

- JWT and bcrypt authentication
- Admin route protection
- Password hashing
- Role-based access control

### 🎨 User Experience

- Fast loading with Turbopack
- Image lazy loading
- Toast notifications with Sonner
- Advanced error handling
- Loading states and skeleton screens

---

## 🛠 Tech Stack

### Frontend

- **Next.js 15.5** - React Framework with App Router
- **React 19.1** - UI Library
- **TypeScript 5.9** - Type Safety
- **Tailwind CSS 4.1** - Utility-First CSS Framework
- **Swiper 12** - Modern and responsive slider

### Backend & Database

- **Prisma 6.16** - Modern ORM
- **SQLite** - Lightweight and fast database
- **Server Actions** - Optimized API Routes in Next.js
- **Jose** - JWT Authentication

### Utility Libraries

- **@uiw/react-md-editor** - Markdown editor
- **react-markdown** - Markdown renderer
- **remark-gfm** - GitHub Flavored Markdown support
- **zod** - Data validation
- **bcryptjs** - Password hashing
- **sonner** - Toast notifications

### DevOps & Quality

- **ESLint** - Linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit checks
- **Commitlint** - Conventional commits
- **TypeScript** - Type checking

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** version 18 or higher
- **pnpm** (recommended package manager)
- **Git**

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/sb878787/FaraIdeh.git

# 2. Navigate to project directory
cd FaraIdeh

# 3. Install dependencies
pnpm install

# 4. Copy environment file
cp .env.example .env

# 5. Configure environment variables
# Edit the .env file and set required values

# 6. Run database migration
pnpm prisma migrate dev

# 7. (Optional) Run seed for initial data
pnpm prisma db seed

# 8. Start development server
pnpm dev
```

The project will be available at [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
FaraIdeh/
├── prisma/                    # Prisma configuration and migrations
│   ├── schema.prisma         # Database models
│   ├── migrations/           # Database migration history
│   └── data/                 # SQLite file
│
├── public/                    # Static files
│   ├── images/               # Public images
│   └── fonts/                # Web fonts
│
├── src/
│   ├── app/                  # App Router (Next.js 15)
│   │   ├── (auth)/          # Route Group - Authentication pages
│   │   │   └── login/
│   │   ├── (dashboard)/     # Route Group - Admin panel
│   │   │   └── admin/
│   │   │       ├── dashboard/
│   │   │       ├── blogs/
│   │   │       ├── projects/
│   │   │       ├── ourteam/
│   │   │       ├── achievement/
│   │   │       ├── orders/
│   │   │       ├── feedbacks/
│   │   │       └── slider/
│   │   ├── (global)/        # Route Group - Public pages
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── blogs/
│   │   │   ├── projects/
│   │   │   └── order-form/
│   │   └── actions/         # Server Actions
│   │
│   ├── assets/              # Static resources
│   │   ├── fonts/          # Persian fonts (IRANYekan)
│   │   └── images/         # Local images
│   │
│   ├── component/          # Reusable components
│   │   ├── dashboard/     # Admin panel components
│   │   └── icons/         # Custom SVG icons
│   │
│   ├── views/             # Page components
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── global/
│   │
│   ├── lib/               # Helper libraries
│   │   ├── prisma.ts     # Prisma Client instance
│   │   └── auth.ts       # Authentication functions
│   │
│   ├── types/             # TypeScript type definitions
│   │
│   ├── utils/             # Helper functions
│   │
│   └── features/          # Feature-specific logic
│
├── .husky/                # Git hooks
├── .vscode/               # VSCode settings
├── .env.example           # Example environment file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 🎮 Available Scripts

```bash
# Run development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start

# Lint code with ESLint
pnpm lint

# Format code with Prettier
pnpm format

# Type check with TypeScript
pnpm typecheck

# Database management with Prisma
pnpm prisma studio           # Open Prisma Studio
pnpm prisma migrate dev      # Run migrations
pnpm prisma generate         # Generate Prisma Client
pnpm prisma db push          # Push schema to database
pnpm prisma db seed          # Run seed
```

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and configure the following values:

```env
# -----------------------------------------------------------------------------
# App
# -----------------------------------------------------------------------------
NODE_ENV=development

# -----------------------------------------------------------------------------
# Database (SQLite)
# -----------------------------------------------------------------------------
DATABASE_URL="file:./data/dev.db"

# -----------------------------------------------------------------------------
# Authentication
# -----------------------------------------------------------------------------
# Generate a secure 32+ character key for JWT
JWT_SECRET="your-very-secure-secret-key-min-32-chars-long"

# -----------------------------------------------------------------------------
# URL
# -----------------------------------------------------------------------------
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
# In production:
# NEXT_PUBLIC_SITE_URL="https://fara-ideh.ir"
```

> ⚠️ **Security Warning**: Never commit actual `.env` values to Git!

---

## 🗄️ Database Models

### Core Models

#### **User** - System Administrators

```prisma
model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  email     String?  @unique
  password  String   // Hashed with bcrypt
  fullName  String
  role      String   @default("admin")
  isActive  Boolean  @default(true)
  lastLogin DateTime?
}
```

#### **Blogs** - Blog Articles

```prisma
model Blogs {
  id                 Int      @id @default(autoincrement())
  slug               String   @unique
  title              String
  excerpt            String?
  content            String   // Markdown format
  contentType        String   @default("markdown")
  published          Boolean  @default(false)
  category           String
  author             String
  featuredImage      String?
  readingTimeMinutes Int      @default(1)
  labels             Json     @default("[]")
  views              Int      @default(0)
}
```

#### **Project** - Completed Projects

```prisma
model Project {
  id            Int      @id @default(autoincrement())
  photos        Json     // Array of image URLs
  viewCount     Int      @default(0)
  name          String
  description   String
  year          Int
  category      String
  projectLink   String?
  requesterName String?
  technologies  Json     // Array of tech stack
  isActive      Boolean  @default(true)
}
```

#### **TeamMember** - Team Members

```prisma
model TeamMember {
  id            Int      @id @default(autoincrement())
  photo         String
  firstName     String
  lastName      String
  jobTitles     Json     // Array of job titles
  githubLink    String?
  linkedinLink  String?
  instagramLink String?
  resumeFile    String?
  viewCount     Int      @default(0)
}
```

#### **Order** - Orders

```prisma
model Order {
  id          Int      @id @default(autoincrement())
  category    Json     // Selected service categories
  users       Json     // Array of user info
  description String
}
```

Other models: `Achievement`, `Contact`, `Slider`, `Newsletter`, `PageView`, `BlogView`

For complete details, refer to `prisma/schema.prisma` file.

---

## 🤝 Contributing

Your contribution to improving this project is valuable! To contribute:

### Contribution Steps

1. **Fork** this repository
2. **Create a new branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'feat: add some amazing feature'
   ```
   > Use [Conventional Commits](https://www.conventionalcommits.org/)
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Coding Standards

- Use **TypeScript** for type safety
- Format your code with **Prettier** (`pnpm format`)
- Use **ESLint** for quality control (`pnpm lint`)
- Run **Type Check** before commit (`pnpm typecheck`)
- Follow **Conventional Commits**

### Ideas and Bugs

- To report bugs or suggest new features, create an [Issue](https://github.com/sb878787/FaraIdeh/issues)
- Check existing Issues before creating a new one

---

## 👨‍💻 Development Team

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/sb878787.png" width="100px;" alt="MohammadAli Saberi"/><br />
      <sub><b>MohammadAli Saberi</b></sub><br />
      <sub>Full-Stack Developer & Project Manager</sub><br />
      <a href="https://github.com/sb878787">GitHub</a> •
      <a href="https://linkedin.com/in/mohammad-ali-saberi">LinkedIn</a>
    </td>
  </tr>
</table>

---

## 🔗 Important Links

- **🌐 Official Website**: [fara-ideh.ir](https://fara-ideh.ir)
- **📦 Repository**: [github.com/sb878787/FaraIdeh](https://github.com/sb878787/FaraIdeh)
- **💼 LinkedIn**: [mohammad-ali-saberi](https://linkedin.com/in/mohammad-ali-saberi)
- **📸 Instagram**: [@mohammad_ali_saberi87](https://www.instagram.com/mohammad_ali_saberi87)
- **💬 Telegram**: [@M_sb87_Developer](https://web.telegram.org/k/#@M_sb87_Developer)
- **📝 Blog**: [fara-ideh.ir/blogs](https://fara-ideh.ir/blogs)
- **💼 Projects**: [fara-ideh.ir/projects](https://fara-ideh.ir/projects)

<!-- --- -->

<!-- ## 📄 License

This project is released under the **MIT** license. For more information, see the [LICENSE](LICENSE) file. -->

---

## 🌟 Support This Project

If you found this project useful:

- ⭐ Give this repository a **Star**
- 🔄 **Share** it with others
- 🐛 Report bugs
- 💡 Suggest new ideas

---

<div align="center">
  
### Made with ❤️ by FaraIdeh Team

**[⬆ Back to top](#faraideh)**

</div>
