import * as z from "zod"; 

export const formSchema = z.object({
    Age: z.number().min(16).max(25), 
    Gender: z.enum(["Male", "Female", "Other"]),
    AcademicLevel: z.enum(["High School", "Undergraduate", "Postgraduate"]), 
    PartTimeJob: z.enum(["Yes", "No"]),
    StudyHours: z.number().min(0).max(12), 
    SelfStudyHours: z.number().min(0).max(7.5), 
    OnlineClassesHours: z.number().min(0).max(6),
    FocusIndex: z.number().min(1).max(65), 
    ProductivityScore: z.number().min(1).max(100), 
    SleepHours: z.number().min(4).max(10), 
    ExerciseMinutes: z.number().min(0).max(150),
    CaffeineIntake: z.number().min(0).max(500), 
    ScreenTimeHours: z.number().min(1).max(15.5),
    SocialMediaHours: z.number().min(0).max(8.5), 
    GamingHours: z.number().min(0).max(5.7), 
    InternetQuality: z.enum(["Poor", "Average", "Good"]), 
    UpcomingDeadline: z.enum(["Yes", "No"]),
    MentalHealthScore: z.number().min(1).max(10),
    BurnoutLevel: z.number().min(1).max(100) 
}).refine((d)=>{
    return d.StudyHours + d.SelfStudyHours + d.OnlineClassesHours + d.SleepHours + d.ScreenTimeHours + d.SocialMediaHours + d.GamingHours <=24
}, {
  message: "Total study hours must not exceed 20",
  path: ["StudyHours","SelfStudyHours","OnlineClassesHours","SleepHours","ScreenTimeHours","SocialMediaHours","GamingHours"] 
})

export const userSchemaZod = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().optional(),
})    