from pydantic import BaseModel, Field
from typing import Literal

from pydantic import BaseModel, Field
from typing import Literal

class PredictRequest(BaseModel):
    Age: int = Field(..., ge=16, le=25)
    Gender: Literal["Male", "Female", "Other"]
    AcademicLevel: Literal["High School", "Undergraduate", "Postgraduate"]
    PartTimeJob: Literal["Yes","No"]
    StudyHours: float = Field(..., ge=0, le=12) 
    SelfStudyHours: float = Field(..., ge=0, le=7.5)  
    OnlineClassesHours: float = Field(..., ge=0, le=6)  
    FocusIndex: int = Field(..., ge=1, le=65)  
    ProductivityScore: int = Field(..., ge=1, le=100)
    SleepHours: float = Field(..., ge=4, le=10) 
    ExerciseMinutes: int = Field(..., ge=0, le=150)
    CaffeineIntake: int = Field(..., ge=0, le=500)
    ScreenTimeHours: float = Field(..., ge=1, le=15.5)
    SocialMediaHours: float = Field(..., ge=0, le=8.5) 
    GamingHours: float = Field(..., ge=0, le=5.7)  
    InternetQuality: Literal["Poor", "Average", "Good"]
    UpcomingDeadline: Literal["Yes","No"]
    MentalHealthScore: int = Field(..., ge=1, le=10)
    BurnoutLevel: int = Field(..., ge=1, le=100)  