import * as z from "zod"; 

export const formSchema = z.object({
        Age: z.number().min(15).max(35),
        Gender: z.enum(["Male", "Female", "Other"]),
        AcademicLevel: z.enum(["High School", "Undergraduate", "Graduate", "Postgraduate"]),
        PartTimeJob: z.enum(["Yes", "No"]),
        StudyHours: z.number().min(0).max(16),
        SelfStudyHours: z.number().min(0).max(12),
        OnlineClassesHours: z.number().min(0).max(10),
        FocusIndex: z.number().min(1).max(10),
        ProductivityScore: z.number().min(1).max(10),
        SleepHours: z.number().min(2).max(12),
        ExerciseMinutes: z.number().min(0).max(180),
        CaffeineIntake: z.number().min(0).max(10),
        ScreenTimeHours: z.number().min(0).max(16),
        SocialMediaHours: z.number().min(0).max(12),
        GamingHours: z.number().min(0).max(12),
        InternetQuality: z.enum(["Poor", "Average", "Good", "Excellent"]),
        UpcomingDeadline: z.enum(["Yes", "No"]),
        MentalHealthScore: z.number().min(1).max(10),
        BurnoutLevel: z.number().min(1).max(10)
    })

export const userSchemaZod = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().optional(),
})    