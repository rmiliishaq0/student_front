import { BookOpen, Brain, Focus, Gamepad2, Moon, Wifi } from "lucide-react"

export const getFormFields = (t: any) => [
    {
        name: t("studentInfo.title"),
        logo: Brain,
        fields: [
            { name: "Age", type: "slider", label: t("studentInfo.age"), min: 16, max: 25 },

            { name: "Gender", type: "select", label: t("studentInfo.gender"),options: ["Male", "Female", "Other"]},

            { name: "AcademicLevel", type: "select", label: t("studentInfo.academicLevel"), options: ["High School", "Undergraduate", "Postgraduate"]}, 

            { name: "PartTimeJob", type: "select", label: t("studentInfo.partTimeJob"),  options: ["Yes", "No"]}
        ]
    },
    {
        name: t("studyHabits.title"),
        logo: BookOpen,
        fields: [
            { name: "StudyHours", type: "slider", label: t("studyHabits.studyHours"), min: 0, max: 12 },

            { name: "SelfStudyHours", type: "slider", label: t("studyHabits.selfStudyHours"), min: 0, max: 7.5 }, 

            { name: "OnlineClassesHours", type: "slider", label: t("studyHabits.onlineClassesHours"), min: 0, max: 6 },

            { name: "FocusIndex", type: "slider", label: t("studyHabits.focusIndex"), min: 1, max: 65 }, 

            { name: "ProductivityScore", type: "slider", label: t("studyHabits.productivityScore"), min: 1, max: 100 } 
        ]
    },
    {
        name: t("lifestyle.title"),
        logo: Moon,
        fields: [
            { name: "SleepHours", type: "slider", label: t("lifestyle.sleepHours"), min: 4, max: 10 },

            { name: "ExerciseMinutes", type: "slider", label: t("lifestyle.exerciseMinutes"), min: 0, max: 150 }, 

            { name: "CaffeineIntake", type: "slider", label: t("lifestyle.caffeineIntake"), min: 0, max: 500 }, 

            { name: "ScreenTimeHours", type: "slider", label: t("lifestyle.screenTimeHours"), min: 1, max: 15.5 } 
        ]
    },
    {
        name: t("distractions.title"),
        logo: Gamepad2,
        fields: [
            { name: "SocialMediaHours", type: "slider", label: t("distractions.socialMediaHours"), min: 0, max: 8.5 },

            { name: "GamingHours", type: "slider", label: t("distractions.gamingHours"), min: 0, max: 5.7 },
        ]
    },
    {
        name: t("environment.title"),
        logo: Wifi,
        fields: [
            { name: "InternetQuality", type: "select", label: t("environment.internetQuality"), options:  ["Poor", "Average", "Good"]},

            { name: "UpcomingDeadline", type: "select", label: t("environment.upcomingDeadline"), options: ["Yes", "No"] },

            { name: "MentalHealthScore", type: "slider", label: t("environment.mentalHealthScore"), min: 1, max: 10 },

            { name: "BurnoutLevel", type: "slider", label: t("environment.burnoutLevel"), min: 1, max: 100 } 
        ]
    }
]