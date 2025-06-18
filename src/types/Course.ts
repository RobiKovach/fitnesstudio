export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Yoga" | "Outdoor" | "Strength" | "Cardio" | "Pilates";
  image: string;
  price: number;
  duration: string;
  location: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  maxParticipants: number;
  equipment: string[];
  schedule: {
    day: string;
    time: string;
  }[];
  studioId: string;
}

export type CourseCategory = Course["category"] | "All";
