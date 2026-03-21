# 🎓 Student Performance Prediction System

A full-stack machine learning application that predicts student performance and academic outcomes using behavioral and lifestyle data. Built with FastAPI backend ML API and Next.js WEB APP.

## 📋 Overview

This project leverages machine learning to predict student academic performance based on:
- **Personal Information**: Age, gender, academic level
- **Study Patterns**: Study hours, self-study, online classes
- **Focus Metrics**: Focus index, productivity score
- **Lifestyle Factors**: Sleep, exercise, caffeine intake
- **Digital Behavior**: Screen time, social media, gaming hours
- **Well-being**: Mental health score, burnout level

The system provides students and educators with insights to optimize learning strategies and identify at-risk students early.

## 🏗️ Project Architecture

```
Student_Prediction_Project/
├── student_ai/              # Python FastAPI ML API - ML model & predictions
└── student_app/             # Next.js WEB APP - Web application & authentication
```

### Tech Stack

**ML API:**
- FastAPI - Modern, fast web framework
- Scikit-learn/ML Model - Predictive modeling
- Pydantic - Data validation
- Python 3.x

**WEB APP:**
- Next.js 16+ - React framework
- TypeScript - Type-safe development
- Tailwind CSS - Styling
- Shadcn/UI - Component library
- MongoDB - Database
- React Query - Data fetching
- Zustand - State management

## 🚀 Quick Start

### Prerequisites
- **Python 3.8+** - [Download](https://www.python.org/downloads/)
- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** - [Local](https://www.mongodb.com/try/download/community) or [Cloud (Atlas)](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/) "("Optional")"

---

## 📦 Complete Setup Guide

### 1️⃣ Download the Project
Clone the Project
```bash
git clone https://github.com/rmiliishaq0/Student_Prediction_Project
cd Student_Prediction_Project
```
Or Download As a Zip And Extract it
---

### 2️⃣ ML API Setup (FastAPI + Python)

#### Step 1: Navigate to ML API Directory
```bash
cd student_ai
```

#### Step 2: Create Virtual Environment
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

#### Step 3: Install Dependencies

**use requirements.txt :**
```bash
pip install -r requirements.txt
```
Or Install Manually
```bash
pip install fastapi uvicorn pydantic pandas scikit-learn joblib
```

#### Step 4: Run ML API Server
```bash
uvicorn main:app --reload
```

✅ ML API is live at `http://localhost:8000`

**Verify it's working:**
- Open [http://localhost:8000/docs](http://localhost:8000/docs) - Interactive API docs
- Open [http://localhost:8000/redoc](http://localhost:8000/redoc) - ReDoc documentation

---

### 3️⃣ Database Setup (MongoDB)

#### Option A: Local MongoDB
```bash
# Install MongoDB Community Edition
# Then start MongoDB service:

# Windows
mongod

# macOS (via Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

#### Option B: MongoDB Cloud (Atlas)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

---

### 4️⃣ WEB APP Setup (Next.js + React)

#### Step 1: Navigate to WEB APP Directory
```bash
cd ../student_app
```

#### Step 2: Install Dependencies
```bash
npm install
```

#### Step 3: Create Environment File
Create `.env` in the `student_app` root:
```env
# ML API
SERVER_AI=http://localhost:8000

# MongoDB
MONGODB_URI=mongodb://localhost:27017/student_ai
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/student_ai

# JWT Secret (generate a secure random string)
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars

PRODUCTION="false" or True
```

#### Step 4: Run WEB APP Development Server
```bash
npm run dev
```

✅ WEB APP is live at `http://localhost:3000`

---

### 5️⃣ Verify Full Setup


1. **WEB APP Running?**
   - Open [http://localhost:3000](http://localhost:3000) in browser

2. **Can You Register?**
   - Go to [http://localhost:3000](http://localhost:3000)
   - Click "Sign Up"
   - Create account with email/password

3. **Can You Make Predictions?**
   - Login with your credentials
   - Go to "Predict" page
   - Fill out the form
   - Submit and see prediction result

---

## 🛠️ Development Workflow

### Terminal 1: API ML
```bash
cd student_ai
source venv/bin/activate  # Windows: venv\Scripts\activate
uvicorn main:app --reload
```

### Terminal 2: WEB APP
```bash
cd student_app
npm run dev
```

### Terminal 3: Database (if local)
```bash
mongod
```

---

## 📝 Environment Variables Explained

### `.env` (Web APP)

| Variable | Required | Example | Purpose |
|----------|----------|---------|---------|
| `SERVER_AI` | Yes | `http://localhost:8000` | ML API URL |
| `MONGODB_URI` | Yes | `mongodb://localhost:27017` | Database connection |
| `JWT_SECRET` | Yes | `random_secret_key` | Token encryption key |
| `JWT_SECRET` |Yes|  false 

---

## ⚙️ Build for Production

### API ML (Python)
```bash
cd student_ai
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker
```

### WEP APP (Next.js)
```bash
cd student_app
npm run build
npm start
```

---

## 🐛 Common Issues & Solutions

### Issue: Port 8000 Already in Use
```bash
# Find and kill process using port 8000
# Windows:
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:8000 | xargs kill -9
```

### Issue: Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Issue: MongoDB Connection Failed
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env.local`
- Verify credentials for MongoDB Atlas

### Issue: Python Virtual Environment Not Activating
```bash
# Make sure you're in the correct directory
cd student_ai

# Activate venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
```

### Issue: Dependencies Not Installing
```bash
# Clear cache and try again
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

---

## 📁 Project Structure

### ML API (`student_ai/`)
- `main.py` - FastAPI application & prediction endpoint
- `PredictRequest.py` - Request validation schema
- `model.pkl` - Trained ML model

### Frontend (`student_app/`)
- `app/` - Next.js app directory with pages & API routes
- `components/` - Reusable React components
- `lib/` - Utilities & database connections
- `store/` - Zustand state management
- `utils/` - Helper functions & constants

## 🔐 Features

- ✅ User authentication & JWT tokens
- ✅ Student performance prediction
- ✅ Dashboard with analytics
- ✅ Prediction history tracking
- ✅ Responsive UI design
- ✅ Real-time data validation
- ✅ Error handling & user feedback

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/predict` | Get student performance prediction |

**Request Example:**
```json
{
  "Age": 20,
  "Gender": "Male",
  "AcademicLevel": "Undergraduate",
  "PartTimeJob": "No",
  "StudyHours": 5.5,
  "SelfStudyHours": 3,
  "OnlineClassesHours": 2,
  "FocusIndex": 8,
  "ProductivityScore": 7,
  "SleepHours": 7.5,
  "ExerciseMinutes": 45,
  "CaffeineIntake": 2,
  "ScreenTimeHours": 4,
  "SocialMediaHours": 2,
  "GamingHours": 1,
  "InternetQuality": "Good",
  "UpcomingDeadline": "Yes",
  "MentalHealthScore": 7,
  "BurnoutLevel": 3
}
```

## 🎯 Usage

1. **Register/Login** - Create account or sign in
2. **Fill Prediction Form** - Enter your lifestyle & study metrics
3. **Get Insights** - Receive personalized performance prediction
4. **Track Progress** - View prediction history on dashboard

## 🛠️ Development

### Building for Production

**Api ML:**
```bash
# Already deployment-ready with Gunicorn
gunicorn main:app
```

**WEB APP:**
```bash
cd student_app
npm run build
npm start
```

## 📝 Environment Variables

### WEBAPP (`.env`)
```
MONGODB_URI=
JWT_SECRET=
PRODUCTION=
SERVER_AI=
```

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Authors

- Rmili Ishaq - Initial work

**Made with ❤️ for student success**
