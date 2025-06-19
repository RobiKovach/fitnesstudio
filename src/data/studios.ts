// src/data/studios.ts
export interface FitnessStudio {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const fitnessStudios = [
  {
    id: "1",
    name: "Premium Fitness Studio in München",
    description:
      "Modernes Fitnessstudio mit neuesten Geräten und persönlicher Betreuung im Herzen von München.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    tags: ["Premium", "München", "Gerätetraining"],
    metadata: {
      Preis: "ab 59,90€/Monat",
      Größe: "1.200 m²",
      Öffnungszeiten: "24/7",
    },
  },
  {
    id: "2",
    name: "Yoga & Pilates Studio Berlin",
    description:
      "Spezialisiertes Studio für Yoga und Pilates mit erfahrenen Trainern und entspannter Atmosphäre.",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    tags: ["Yoga", "Pilates", "Berlin"],
    metadata: {
      Preis: "ab 49,90€/Monat",
      Kurse: "25+ pro Woche",
      Probetraining: "Kostenlos",
    },
  },
  {
    id: "3",
    name: "CrossFit Box Hamburg",
    description:
      "Hochintensive CrossFit-Trainingseinheiten in einer motivierenden Community-Atmosphäre.",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    tags: ["CrossFit", "Hamburg", "Functional Training"],
    metadata: {
      Preis: "ab 79,90€/Monat",
      Gruppengröße: "Max. 12 Personen",
      Niveau: "Alle Level",
    },
  },
  {
    id: "4",
    name: "EMS Studio Frankfurt",
    description:
      "Effektives Elektromuskelstimulationstraining mit persönlichem Coach in nur 20 Minuten pro Woche.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    tags: ["EMS", "Frankfurt", "Personal Training"],
    metadata: {
      Preis: "ab 89,90€/Monat",
      Dauer: "20 Min./Einheit",
      Termine: "Flexibel buchbar",
    },
  },
  {
    id: "5",
    name: "Boutique Fitness Club Köln",
    description:
      "Exklusiver Fitness-Club mit limitierter Mitgliederzahl und Premium-Ausstattung im Kölner Zentrum.",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    tags: ["Boutique", "Köln", "Premium"],
    metadata: {
      Preis: "ab 99,90€/Monat",
      Mitglieder: "Max. 500",
      Extras: "Sauna, Spa, Lounge",
    },
  },
  {
    id: "6",
    name: "Outdoor Fitness Park Stuttgart",
    description:
      "Naturnahes Training im Freien mit professioneller Anleitung und Gemeinschaftsgefühl.",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    tags: ["Outdoor", "Stuttgart", "Bootcamp"],
    metadata: {
      Preis: "ab 39,90€/Monat",
      Trainingszeiten: "Morgens & Abends",
      Wetter: "Bei jedem Wetter",
    },
  },
  {
    id: "7",
    name: "Functional Studio Leipzig",
    description:
      "Ein modernes Studio in Leipzig mit Fokus auf Functional, CrossFit, Outdoor.",
    image:
      "https://images.unsplash.com/photo-1697490551045-3414a6d998d3?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Functional", "Leipzig", "Outdoor"],
    metadata: {
      Preis: "ab 39,90€/Monat",
      Kurse: "23+ pro Woche",
      Extras: "Trainingsplan",
    },
  },
  {
    id: "8",
    name: "Functional Studio Köln",
    description:
      "A boutique fitness space offering HIIT, yoga, and strength classes in a sleek, urban setting.",
    image:
      "https://images.unsplash.com/photo-1651315283944-852219dff97b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Functional", "Köln", "Cardio"],
    metadata: {
      Preis: "ab 99,90€/Monat",
      Kurse: "13+ pro Woche",
      Extras: "Getränke inklusive",
    },
  },
  {
    id: "9",
    name: "Yoga Studio München",
    description:
      "A women-led studio combining strength training, pilates, and wellness coaching",
    image:
      "https://images.unsplash.com/photo-1717500251805-cd0306a48de4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Yoga", "München", "Gruppentraining"],
    metadata: {
      Preis: "ab 89,90€/Monat",
      Kurse: "30+ pro Woche",
      Extras: "Trainingsplan",
    },
  },
  {
    id: "10",
    name: "Boxen Studio Leipzig",
    description:
      "A hybrid gym offering bootcamps, boxing, and open-air circuits in a minimalist design",
    image:
      "https://images.unsplash.com/photo-1685633224330-d2bd56d7adf1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Boxen", "Leipzig", "HIIT"],
    metadata: {
      Preis: "ab 69,90€/Monat",
      Kurse: "23+ pro Woche",
      Extras: "Lounge",
    },
  },
  {
    id: "11",
    name: "Yoga Studio Düsseldorf",
    description:
      "A serene yoga space designed for deep breath, stillness, and inner reset.",
    image:
      "https://images.unsplash.com/photo-1602611000981-f9e33f0d1f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Yoga", "Düsseldorf", "Gruppentraining"],
    metadata: {
      Preis: "ab 49,90€/Monat",
      Kurse: "17+ pro Woche",
      Extras: "Getränke inklusive",
    },
  },
  {
    id: "12",
    name: "Yoga Studio Frankfurt",
    description:
      " A cozy urban studio offering Vinyasa, Yin, and sound bath evenings.",
    image:
      "https://images.unsplash.com/photo-1593358578295-c98263a2c590?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Yoga", "Entspannung", "Frankfurt"],
    metadata: {
      Preis: "ab 79,90€/Monat",
      Kurse: "18+ pro Woche",
      Extras: "Trainingsplan",
    },
  },
  {
    id: "13",
    name: "EMS Studio Stuttgart",
    description:
      "A high-energy studio blending functional strength, cardio bursts, and community motivation.",
    image:
      "https://images.unsplash.com/photo-1685633224408-b42cdcff553b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["EMS", "Stuttgart", "Schnelltraining"],
    metadata: {
      Preis: "ab 49,90€/Monat",
      Kurse: "14+ pro Woche",
      Extras: "Sauna",
    },
  },
  {
    id: "14",
    name: "Cardio Studio München",
    description:
      "A vibrant training spot combining dance cardio, resistance training, and vibe.",
    image:
      "https://images.unsplash.com/photo-1709315872247-644b7ff5ed10?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Cardio", "München", "Personal Training"],
    metadata: {
      Preis: "ab 79,90€/Monat",
      Kurse: "25+ pro Woche",
      Extras: "Trainingsplan",
    },
  },
  {
    id: "15",
    name: "Functional Studio Frankfurt",
    description:
      "A luxury fitness lounge with small group training, premium equipment, and smoothie bar.",
    image:
      "https://images.unsplash.com/photo-1685633224402-3410df959f98?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Functional", "Frankfurt", "Outdoor"],
    metadata: {
      Preis: "ab 59,90€/Monat",
      Kurse: "11+ pro Woche",
      Extras: "Sauna",
    },
  },
  {
    id: "16",
    name: "Cardio Studio München",
    description:
      "A next-gen gym offering hybrid workouts, open gym access, and smart coaching.",
    image:
      "https://images.unsplash.com/photo-1651340048650-9bb75627f3de?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Cardio", "München", "Personal Training"],
    metadata: {
      Preis: "ab 89,90€/Monat",
      Kurse: "29+ pro Woche",
      Extras: "Lounge",
    },
  },
];
