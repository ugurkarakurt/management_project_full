# Next.js Authentication & Dashboard Template

A modern, secure, and scalable Next.js 14 application. A comprehensive authentication and dashboard solution developed with TypeScript, Prisma, NextAuth.js, and Material-UI.

## 🌟 Features

### 🔐 Authentication

- Email/Password login
- JWT-based session management
- Password reset system (with Email integration)
- Route-based authorization
- Role-based access control

### 🎨 UI/UX

- Material-UI (MUI) components
- Responsive design
- Form validations
- Loading states
- Error handling

### 🛠 Technical Features

- Next.js 14 App Router
- TypeScript
- Prisma ORM
- PostgreSQL
- Server Components
- API Routes
- Middleware protection
- Environment variables management

### 🌍 Internationalization

- Turkish/English language support
- URL-based language routing
- Dynamic content translation

## 🚀 Getting Started

### Prerequisites

```bash
Node.js 18.0 or higher
PostgreSQL
npm or yarn
```

### Installation

1. Clone the repository

```bash
git clone [repo-url]
cd [project-name]
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```env
# Create .env file
POSTGRES_URL="your-postgres-url"
POSTGRES_PRISMA_URL="your-prisma-url"
POSTGRES_URL_NON_POOLING="your-non-pooling-url"
POSTGRES_USER="your-user"
POSTGRES_HOST="your-host"
POSTGRES_PASSWORD="your-password"
POSTGRES_DATABASE="your-database"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
```

4. Run Prisma migrations

```bash
npx prisma generate
npx prisma db push
```

5. Start the development server

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   └── reset-password/
│   ├── (dashboard)/
│   │   └── dashboard/
│   └── api/
├── components/
│   ├── auth/
│   ├── common/
│   └── dashboard/
├── containers/
├── context/
├── hooks/
├── lib/
├── providers/
├── styles/
├── types/
└── utils/
```

## 🔒 API Routes

### Authentication

```typescript
POST / api / auth / register;
POST / api / auth / login;
POST / api / auth / forgot - password;
POST / api / auth / reset - password;
```

## 🛡 Security Features

- Session management
- CSRF protection
- Password hashing
- Rate limiting
- Secure headers
- Input validation
- SQL injection protection

## 🔧 Environment Variables

| Variable        | Description               | Example                             |
| --------------- | ------------------------- | ----------------------------------- |
| POSTGRES_URL    | PostgreSQL connection URL | postgresql://user:pass@host:5432/db |
| NEXTAUTH_SECRET | JWT encryption key        | random-secret-key                   |
| EMAIL_USER      | SMTP email address        | example@gmail.com                   |

## 📦 Deployment

### Vercel Deployment

1. Install Vercel CLI

```bash
npm i -g vercel
```

2. Deploy

```bash
vercel
```

### Docker Deployment

```dockerfile
# Dockerfile included
docker build -t nextjs-auth-app .
docker run -p 3000:3000 nextjs-auth-app
```

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Todo

- [ ] OAuth providers (Google, GitHub) integration
- [ ] Two-factor authentication (2FA)
- [ ] Additional language support
- [ ] Dark/Light theme support
- [ ] Dashboard analytics
- [ ] User profile management

## 📄 License

MIT License - See [LICENSE.md](LICENSE.md) for details.

## ✨ Acknowledgments

This project was developed thanks to the following open source projects:

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [Material-UI](https://mui.com/)

## 🤔 FAQ

**Q: Why Next.js 15?**  
A: For App Router, React Server Components, and advanced optimizations.

**Q: Prisma vs Traditional ORM?**  
A: For type-safety, easy migrations, and modern API support.

## 🤝 Contact

Project Owner - [@ugurkarakurt](https://github.com/ugurkarakurt)

Project Link: [https://management-project-full.vercel.app/](https://management-project-full.vercel.app/)

---

⭐️ If you found this project helpful, don't forget to give it a star!
