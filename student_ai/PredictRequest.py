from pydantic import BaseModel, Field
from typing import Literal

class PredictRequest(BaseModel):
    Age: int = Field(..., ge=15, le=35)
    Gender: Literal["Male", "Female", "Other"]
    AcademicLevel: Literal["High School", "Undergraduate", "Graduate", "Postgraduate"]
    PartTimeJob: Literal["Yes","No"]
    StudyHours: float = Field(..., ge=0, le=16)
    SelfStudyHours: float = Field(..., ge=0, le=12)
    OnlineClassesHours: float = Field(..., ge=0, le=10)
    FocusIndex: int = Field(..., ge=1, le=10)
    ProductivityScore: int = Field(..., ge=1, le=10)
    SleepHours: float = Field(..., ge=2, le=12)
    ExerciseMinutes: int = Field(..., ge=0, le=180)
    CaffeineIntake: int = Field(..., ge=0, le=10)
    ScreenTimeHours: float = Field(..., ge=0, le=16)
    SocialMediaHours: float = Field(..., ge=0, le=12)
    GamingHours: float = Field(..., ge=0, le=12)
    InternetQuality: Literal["Poor", "Average", "Good", "Excellent"]
    UpcomingDeadline: Literal["Yes","No"]
    MentalHealthScore: int = Field(..., ge=1, le=10)
    BurnoutLevel: int = Field(..., ge=1, le=10)