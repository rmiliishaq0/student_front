# 🎨 Student App - WEB APP

Modern, responsive web application for student performance prediction and analytics. Built with Next.js, TypeScript, and Tailwind CSS.

## 📌 Overview

The Student App WEB provides:
- 🔐 User authentication with JWT tokens
- 📊 Interactive performance prediction form
- 📈 Personal analytics dashboard
- 🎯 Real-time prediction results
- 📱 Fully responsive mobile design

## 🏗️ Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **UI Components**: Shadcn/UI + Radix UI
- **State Management**: Zustand
- **Data Fetching**: React Query (@tanstack/react-query)
- **Database**: MongoDB + Mongoose
- **Animation**:  Motion
- **Charts**: Recharts
- **Authentication**: JWT + bcryptjs

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB instance running

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Application runs on `http://localhost:3000`

### Environment Setup

Create `.env` in the root:
```env
MONGODB_URI=
JWT_SECRET=
PRODUCTION=
SERVER_AI=
```

## 📁 Project Structure

```
student_app/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── check/route.ts
│   │   └── predict/              # Prediction endpoints
│   │       └── route.ts
│   ├── dashboard/                # User dashboard page
│   ├── predict/                  # Prediction form page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   └── providers.tsx             # Context providers
│
├── components/                   # React components
│   ├── ui/                       # UI component library
│   │   ├── FormCard.tsx          # Form wrapper component
│   │   ├── PredictForm.tsx       # Prediction form
│   │   ├── PredictTitle.tsx      # Form title
│   │   ├── DachboardContent.tsx  # Dashboard layout
│   │   ├── ScoreChart.tsx        # Chart visualization
│   │   ├── ScoreDrawer.tsx       # Drawer component
│   │   ├── SelectField.tsx       # Custom select input
│   │   ├── SliderField.tsx       # Custom slider input
│   │   ├── button.tsx            # Button component
│   │   ├── card.tsx              # Card component
│   │   ├── input.tsx             # Input field
│   │   ├── dialog.tsx            # Modal dialog
│   │   ├── alert.tsx             # Alert messages
│   │   └── ...                   # Other UI components
│   └── DotGrid.jsx               # Animated background
│
├── lib/
│   ├── mongodb.ts                # MongoDB connection
│   └── utils.ts                  # Utility functions
│
├── model/
│   └── User.ts                   # User schema & types
│
├── store/
│   └── auth-store.ts             # Zustand auth state
│
├── utils/
│   ├── api.ts                    # API client
│   ├── constantes.ts             # Constants
│   └── schemas.ts                # Validation schemas
│
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## 🔐 Authentication

### Login
```bash
POST /api/login
```

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

### Register
```bash
POST /api/register
```

**Request:**
```json
{
  "email": "newuser@example.com",
  "password": "securepass123",
  "name": "New User"
}
```

## 📋 Features

### 1. Home Page (`/`)
- Marketing landing page
- Call-to-action to get started
- Project introduction
- Animated background effects

### 2. Authentication
- Sign up with email/password
- Login with credentials
- JWT token management
- Secure session handling

### 3. Prediction Page (`/predict`)
- Interactive form with 19 input fields
- Real-time form validation
- Input field types:
  - Number inputs (age, study hours)
  - Dropdown selects (gender, academic level)
  - Sliders (focus, productivity scores)
  - Toggle switches (part-time job, deadline)
- Submit prediction request
- Display results with score

### 4. Dashboard (`/dashboard`)
- User profile information
- Prediction history
- Performance analytics
- Visual charts (Recharts)
- Statistics overview
- Export/download options

## 🎯 Component Usage

### Predict Form Example
```typescript
import PredictForm from "@/components/ui/PredictForm";

export default function PredictPage() {
  return <PredictForm />;
}
```

### Custom Select Field
```typescript
import SelectField from "@/components/ui/SelectField";

<SelectField
  label="Academic Level"
  options={[
    "High School",
    "Undergraduate",
    "Graduate",
    "Postgraduate"
  ]}
  value={level}
  onChange={setLevel}
/>
```

### Score Chart
```typescript
import ScoreChart from "@/components/ui/ScoreChart";

<ScoreChart
  data={predictionHistory}
  title="Performance Over Time"
/>
```

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Adding UI Components

New components from shadcn/ui:
```bash
npx shadcn-ui@latest add [component-name]
```

### Styling

- **Tailwind CSS**: Primary styling
- **CSS Modules**: Component-specific styles
- **Global CSS**: `app/globals.css`

Example component styling:
```typescript
export default function MyComponent() {
  return (
    <div className="flex items-center gap-4 p-6 bg-white/5 rounded-lg border border-white/10">
      <h1 className="text-2xl font-bold">Title</h1>
    </div>
  );
}
```

## 📊 State Management (Zustand)

Auth store example:
```typescript
// In store/auth-store.ts
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // ... implementation
}));

// Usage in components
import { useAuthStore } from "@/store/auth-store";

export default function MyComponent() {
  const { user, logout } = useAuthStore();
  return <></>;
}
```

## 🔌 API Integration

### API Client
```typescript
// utils/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function predict(data: StudentData) {
  const response = await fetch(`${API_BASE_URL}/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return response.json();
}
```

### Using in Components
```typescript
import { predict } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

function PredictForm() {
  const { mutate: submitPrediction } = useMutation({
    mutationFn: predict,
    onSuccess: (data) => {
      console.log('Prediction:', data);
    }
  });

  return <form onSubmit={() => submitPrediction(formData)} />;
}
```

## 🎨 Theming

The app supports dark and light themes using `next-themes`:

```typescript
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## 📱 Responsive Design

All components are mobile-first and responsive:
```typescript
// Example: Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Items */}
</div>
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables (Production)
```env
SERVER_AI=https://api.yourdomain.com
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_secret
PRODUCTION="true"
```

## 📦 Dependencies Overview

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `react` | UI library |
| `typescript` | Type safety |
| `tailwindcss` | Styling |
| `zustand` | State management |
| `@tanstack/react-query` | Data fetching |
| `recharts` | Data visualization |
| `mongoose` | MongoDB ODM |
| `bcryptjs` | Password hashing |
| `jsonwebtoken` | JWT tokens |

## 🔒 Security Features

- ✅ JWT authentication
- ✅ Password hashing (bcryptjs)
- ✅ Input validation (Pydantic on backend)
- ✅ HTTPS support (production)
- ✅ CORS configuration
- ✅ Secure session handling
- ✅ Environment variable protection

## 📈 Performance Optimization

- Server-side rendering (SSR)
- Static generation where applicable
- Image optimization
- Code splitting
- CSS optimization
- Font optimization with next/font

## 🐛 Troubleshooting

**Issue: Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

**Issue: MongoDB connection failed**
- Check `MONGODB_URI` in `.env.local`
- Ensure MongoDB service is running
- Verify credentials

**Issue: API calls failing**
- Check Environment variables (.env in Next Project)
- Ensure backend is running
- Check browser console for CORS errors

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please:
1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Ensure all tests pass


**Built with ❤️ for a better learning experience**
