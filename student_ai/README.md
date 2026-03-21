# 🤖 Student AI - ML API

FastAPI-based REST API that serves machine learning predictions for student performance analysis. This service processes student behavioral and lifestyle data to predict academic outcomes.

## 📌 Overview

The Student AI backend is a high-performance prediction service that:
- Provides RESTful API endpoints for predictions
- Validates incoming student data using Pydantic schemas
- Leverages trained ML models for performance forecasting
- Returns structured, actionable predictions

## 🏗️ Architecture

```
student_ai/
├── main.py                 # FastAPI app & prediction endpoint
├── PredictRequest.py       # Data validation & request schema
├── model.pkl               # Trained scikit-learn model
└── requirements.txt        # Python dependencies
```

## 🚀 Getting Started

### Installation

1. **Clone and navigate to backend:**
   ```bash
   cd student_ai
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run development server:**
   ```bash
   uvicorn main:app --reload
   ```

   Server starts at `http://localhost:8000`

## 📦 Dependencies

```
FastAPI==0.104+          # Web framework
uvicorn==0.24+           # ASGI server
pydantic==2.0+           # Data validation
pandas==2.0+             # Data processing
scikit-learn==1.3+       # ML model loading
joblib==1.3+             # Model serialization
```

## 🔌 API Reference

### POST /predict

Generates a performance prediction for a student based on their behavioral metrics.

**Request Body:**
```json
{
  "Age": 20,
  "Gender": "Male",
  "AcademicLevel": "Undergraduate",
  "PartTimeJob": "No",
  "StudyHours": 5.5,
  "SelfStudyHours": 3.0,
  "OnlineClassesHours": 2.0,
  "FocusIndex": 8,
  "ProductivityScore": 7,
  "SleepHours": 7.5,
  "ExerciseMinutes": 45,
  "CaffeineIntake": 2,
  "ScreenTimeHours": 4.0,
  "SocialMediaHours": 2.0,
  "GamingHours": 1.0,
  "InternetQuality": "Good",
  "UpcomingDeadline": "Yes",
  "MentalHealthScore": 7,
  "BurnoutLevel": 3
}
```

**Response (Success - 200):**
```json
{
  "result": [0.85]
}
```

**Error Response (Validation Error - 422):**
```json
{
  "detail": [
    {
      "loc": ["body", "Age"],
      "msg": "ensure this value is less than or equal to 35",
      "type": "value_error.number.not_le"
    }
  ]
}
```

### Input Validation Rules

| Field | Type | Range/Options | Notes |
|-------|------|---------------|-------|
| Age | int | 15-35 | Student age |
| Gender | string | Male, Female, Other | Demographics |
| AcademicLevel | string | High School, Undergraduate, Graduate, Postgraduate | Education level |
| StudyHours | float | 0-16 | Hours per day |
| SleepHours | float | 2-12 | Hours per night |
| FocusIndex | int | 1-10 | Self-rated focus (1=low, 10=high) |
| ProductivityScore | int | 1-10 | Self-rated productivity |
| MentalHealthScore | int | 1-10 | Psychological well-being |
| BurnoutLevel | int | 1-10 | Stress/burnout level |

## 🧪 Testing

### Health Check
```bash
curl http://localhost:8000/
```

### Sample Prediction
```bash
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d @sample_request.json
```

### Using Python
```python
import requests

data = {
    "Age": 20,
    "Gender": "Male",
    "AcademicLevel": "Undergraduate",
    "PartTimeJob": "No",
    "StudyHours": 5.5,
    # ... other fields
}

response = requests.post("http://localhost:8000/predict", json=data)
print(response.json())
```

## 📊 Model Information

- **Type**: Trained scikit-learn machine learning model
- **Format**: joblib pickle (.pkl)
- **Input Features**: 19 behavioral/lifestyle metrics
- **Output**: Performance prediction score
- **File**: `model.pkl` (ensure it exists in the project root)

## 🔧 Configuration

### CORS Settings (if needed)

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Production Deployment

```bash
# Using Gunicorn + Uvicorn workers
gunicorn main:app \
  --workers 4 \
  --worker-class uvicorn.workers.UvicornWorker \
  --bind 0.0.0.0:8000
```

## 📝 Troubleshooting

**Issue: Model file not found**
```
Error: [Errno 2] No such file or directory: 'model.pkl'
```
**Solution**: Ensure `model.pkl` exists in the project root directory.

**Issue: CORS errors from frontend**
**Solution**: Add CORS middleware (see Configuration section).

**Issue: Validation errors**
**Solution**: Check that all required fields are provided and within specified ranges.

## 🔒 Security Considerations

- Input validation via Pydantic prevents injection attacks
- All data is validated before processing
- Consider adding rate limiting for production
- Use HTTPS in production deployment
- Implement API authentication if needed

## 📚 API Documentation

Interactive API documentation available at:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## 🚢 Deployment

### Docker Deployment

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

```bash
docker build -t student-ai .
docker run -p 8000:8000 student-ai
```

### Cloud Platforms
- **Heroku**: Use `Procfile`: `web: gunicorn main:app`
- **AWS EC2**: Run with Gunicorn + Nginx
- **Railway/Render**: Deploy directly from Git

## 📈 Performance Metrics

- Response time: < 100ms per prediction
- Throughput: Handles multiple concurrent requests
- Accuracy: Based on model training dataset

## 🤝 Integration

### Frontend Integration
```typescript
const response = await fetch('http://localhost:8000/predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(studentData)
});
```

## 📄 License

MIT License - See LICENSE file for details


**Made with 🔧 for reliable ML predictions**
