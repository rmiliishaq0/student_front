import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  predictData: {
  type: {
    score:{type:Number},
    isPredict:{type:Boolean, default:false},
    Age: { type: Number, min: 15, max: 35 },
    Gender: { type: String, enum: ["Male", "Female", "Other"] },
    AcademicLevel: {
      type: String,
      enum: ["High School", "Undergraduate", "Graduate", "Postgraduate"],
    },
    PartTimeJob: { type: String, enum: ["Yes", "No"] },

    StudyHours: { type: Number, min: 0, max: 16 },
    SelfStudyHours: { type: Number, min: 0, max: 12 },
    OnlineClassesHours: { type: Number, min: 0, max: 10 },

    FocusIndex: { type: Number, min: 1, max: 10 },
    ProductivityScore: { type: Number, min: 1, max: 10 },

    SleepHours: { type: Number, min: 2, max: 12 },
    ExerciseMinutes: { type: Number, min: 0, max: 180 },

    CaffeineIntake: { type: Number, min: 0, max: 10 },
    ScreenTimeHours: { type: Number, min: 0, max: 16 },
    SocialMediaHours: { type: Number, min: 0, max: 12 },
    GamingHours: { type: Number, min: 0, max: 12 },

    InternetQuality: {
      type: String,
      enum: ["Poor", "Average", "Good", "Excellent"],
    },

    UpcomingDeadline: { type: String, enum: ["Yes", "No"] },

    MentalHealthScore: { type: Number, min: 1, max: 10 },
    BurnoutLevel: { type: Number, min: 1, max: 10 },
  },
  required: false,
  _id:false
}
});

export default mongoose.models.User || mongoose.model("User", UserSchema);