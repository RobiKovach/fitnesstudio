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
];
