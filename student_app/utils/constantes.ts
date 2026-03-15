import { BookOpen, Brain, Focus, Gamepad2, Moon, Wifi } from "lucide-react"
import { label } from "motion/react-m"

export const FormFields = [
    {
        name: "Student Information",
        logo: Brain,
        fields: [
            { name: "Age", type: "slider", label: "Age", min: 15, max: 35 },
            { name: "Gender", type: "select", label: "Gender", options: ["Male", "Female", "Other"] },
            { name: "AcademicLevel", type: "select", label: "Academic Level", options: ["High School", "Undergraduate", "Graduate", "Postgraduate"] },
            { name: "PartTimeJob", type: "select", label: "Part-Time Job", options: ["Yes", "No"] }
        ]
        
    },
    {
        name: "Study Habits",
        logo: BookOpen,
        fields: [
            { name: "StudyHours", type: "slider", label: "Study Hours", min: 0, max: 16 },
            { name: "SelfStudyHours", type: "slider", label: "Self-Study Hours", min: 0, max: 12 },
            { name: "OnlineClassesHours", type: "slider", label: "Online Classes Hours", min: 0, max: 10 },
            { name: "FocusIndex", type: "slider", label: "Focus Index", min: 1, max: 10 },
            { name: "ProductivityScore", type: "slider", label: "Productivity Score", min: 1, max: 10 }
        ]
    },
    {
        name: "Lifestyle Factors",
        logo: Moon,
        fields: [
            { name: "SleepHours", type: "slider", label: "Sleep Hours", min: 2, max: 12 },
            { name: "ExerciseMinutes", type: "slider", label: "Exercise Minutes", min: 0, max: 180 }, 
            { name: "CaffeineIntake", type: "slider", label: "Caffeine Intake", min: 0, max: 10 },
            { name: "ScreenTimeHours", type: "slider", label: "Screen Time Hours", min: 0, max: 16 },
        ]
    },
    {
        name: "Distractions & Environment",
        logo: Gamepad2,
        fields: [
            { name: "SocialMediaHours", type: "slider", label: "Social Media Hours", min: 0, max: 12 },
            { name: "GamingHours", type: "slider", label: "Gaming Hours", min: 0, max: 12 },
        ]

    }
    ,
    {
        name: "Environment",
        logo: Wifi,
        fields: [
            { name: "InternetQuality", type: "select", label: "Internet Quality", options: ["Poor", "Average", "Good", "Excellent"] },
            { name: "UpcomingDeadline", type: "select", label: "Upcoming Deadline", options: ["Yes", "No"] },
            { name: "MentalHealthScore", type: "slider", label: "Mental Health Score", min: 1, max: 10 },
            { name: "BurnoutLevel", type: "slider", label: "Burnout Level", min: 1, max: 10 }
        ]
    }
]