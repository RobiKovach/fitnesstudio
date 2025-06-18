import { Course } from '../types/Course';

export const courses: Course[] = [
  {
    id: '1',
    slug: 'morning-yoga-flow',
    title: 'Morning Yoga Flow',
    description: 'Start your day with energizing yoga sequences that awaken your body and mind.',
    longDescription: 'Join our invigorating Morning Yoga Flow class designed to kickstart your day with positive energy. This 60-minute session combines gentle warm-ups, dynamic vinyasa flows, and mindful breathing techniques. Perfect for all levels, our experienced instructors will guide you through sequences that improve flexibility, build strength, and promote mental clarity. Leave feeling refreshed, centered, and ready to tackle whatever the day brings.',
    category: 'Yoga',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 25,
    duration: '60 min',
    location: 'Studio A',
    instructor: 'Sarah Chen',
    level: 'Beginner',
    maxParticipants: 15,
    equipment: ['Yoga mat', 'Blocks', 'Strap'],
    schedule: [
      { day: 'Monday', time: '07:00 AM' },
      { day: 'Wednesday', time: '07:00 AM' },
      { day: 'Friday', time: '07:00 AM' }
    ]
  },
  {
    id: '2',
    slug: 'hiit-strength-training',
    title: 'HIIT Strength Training',
    description: 'High-intensity interval training focused on building strength and burning calories.',
    longDescription: 'Our HIIT Strength Training class combines the best of both worlds - cardiovascular conditioning and muscle building. This 45-minute high-energy session alternates between intense strength exercises and brief recovery periods. Using a variety of equipment including dumbbells, kettlebells, and resistance bands, you\'ll target all major muscle groups while improving your cardiovascular fitness. Our certified trainers ensure proper form and provide modifications for all fitness levels.',
    category: 'Strength',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 35,
    duration: '45 min',
    location: 'Strength Zone',
    instructor: 'Marcus Johnson',
    level: 'Intermediate',
    maxParticipants: 12,
    equipment: ['Dumbbells', 'Kettlebells', 'Resistance bands', 'Exercise mat'],
    schedule: [
      { day: 'Tuesday', time: '06:00 PM' },
      { day: 'Thursday', time: '06:00 PM' },
      { day: 'Saturday', time: '09:00 AM' }
    ]
  },
  {
    id: '3',
    slug: 'outdoor-bootcamp',
    title: 'Outdoor Bootcamp',
    description: 'Challenging full-body workout in the fresh air with military-style exercises.',
    longDescription: 'Take your fitness outdoors with our exhilarating Bootcamp class! This 50-minute session combines military-inspired drills, functional movements, and team-building exercises. Set in our beautiful outdoor training area, you\'ll experience varied workouts that challenge your strength, endurance, and mental toughness. Rain or shine, our dedicated instructors will push you to achieve your fitness goals while enjoying the benefits of fresh air and natural surroundings.',
    category: 'Outdoor',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 30,
    duration: '50 min',
    location: 'Outdoor Training Area',
    instructor: 'Alex Rodriguez',
    level: 'Intermediate',
    maxParticipants: 20,
    equipment: ['Battle ropes', 'Sandbags', 'Cones', 'Resistance bands'],
    schedule: [
      { day: 'Monday', time: '05:30 PM' },
      { day: 'Wednesday', time: '05:30 PM' },
      { day: 'Saturday', time: '08:00 AM' }
    ]
  },
  {
    id: '4',
    slug: 'cardio-dance-fusion',
    title: 'Cardio Dance Fusion',
    description: 'Fun, high-energy dance workout that burns calories while you move to the beat.',
    longDescription: 'Get your heart pumping with our energetic Cardio Dance Fusion class! This 55-minute session blends popular dance styles with cardio intervals for a fun, fat-burning workout. No dance experience required - our enthusiastic instructors break down each move step by step. With upbeat music and a supportive group atmosphere, you\'ll improve coordination, boost cardiovascular health, and leave with a smile on your face.',
    category: 'Cardio',
    image: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 28,
    duration: '55 min',
    location: 'Dance Studio',
    instructor: 'Maya Patel',
    level: 'Beginner',
    maxParticipants: 25,
    equipment: ['None required'],
    schedule: [
      { day: 'Tuesday', time: '07:00 PM' },
      { day: 'Thursday', time: '07:00 PM' },
      { day: 'Sunday', time: '10:00 AM' }
    ]
  },
  {
    id: '5',
    slug: 'pilates-core-strength',
    title: 'Pilates Core Strength',
    description: 'Low-impact exercise focusing on core stability, posture, and controlled movements.',
    longDescription: 'Discover the transformative power of Pilates in our Core Strength class. This 50-minute session focuses on building a strong, stable core through precise, controlled movements. Using both mat work and light equipment, you\'ll improve posture, increase flexibility, and develop long, lean muscles. Our certified Pilates instructor emphasizes proper alignment and breathing techniques, making this class suitable for all fitness levels including those recovering from injury.',
    category: 'Pilates',
    image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 32,
    duration: '50 min',
    location: 'Pilates Studio',
    instructor: 'Emma Thompson',
    level: 'Beginner',
    maxParticipants: 14,
    equipment: ['Pilates mat', 'Magic circle', 'Light weights', 'Resistance bands'],
    schedule: [
      { day: 'Monday', time: '12:00 PM' },
      { day: 'Wednesday', time: '12:00 PM' },
      { day: 'Friday', time: '12:00 PM' }
    ]
  },
  {
    id: '6',
    slug: 'advanced-power-yoga',
    title: 'Advanced Power Yoga',
    description: 'Challenging yoga practice with complex poses and dynamic flow sequences.',
    longDescription: 'Take your yoga practice to the next level with our Advanced Power Yoga class. This intensive 75-minute session features challenging asanas, advanced arm balances, and dynamic flow sequences that build serious strength and flexibility. Designed for experienced practitioners, this class will push your physical and mental boundaries while maintaining the mindful essence of yoga. Our expert instructor provides detailed alignment cues and assists to help you safely explore advanced poses.',
    category: 'Yoga',
    image: 'https://images.pexels.com/photos/4325438/pexels-photo-4325438.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 40,
    duration: '75 min',
    location: 'Studio B',
    instructor: 'David Kim',
    level: 'Advanced',
    maxParticipants: 10,
    equipment: ['Yoga mat', 'Blocks', 'Strap', 'Bolster'],
    schedule: [
      { day: 'Tuesday', time: '06:00 AM' },
      { day: 'Thursday', time: '06:00 AM' },
      { day: 'Sunday', time: '04:00 PM' }
    ]
  }
];