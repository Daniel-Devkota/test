export interface GymMembership {
  id: string
  status: "active" | "inactive" | "pending"
  startDate: string
  endDate: string
  membershipType: "resident" | "premium"
  accessCode: string
  restrictions?: string[]
}

export interface GymSchedule {
  id: string
  day: string
  openTime: string
  closeTime: string
  maintenanceTime?: string
  classes?: {
    name: string
    time: string
    instructor: string
    duration: number
  }[]
}

export const gymMembership: GymMembership = {
  id: "gym-001",
  status: "active",
  startDate: "2024-01-01",
  endDate: "2025-12-31",
  membershipType: "resident",
  accessCode: "1234",
  restrictions: [],
}

export const gymSchedule: GymSchedule[] = [
  {
    id: "sched-001",
    day: "Monday",
    openTime: "06:00",
    closeTime: "22:00",
    classes: [
      {
        name: "Morning Yoga",
        time: "07:00",
        instructor: "Sarah",
        duration: 60,
      },
      {
        name: "Evening HIIT",
        time: "18:30",
        instructor: "Mike",
        duration: 45,
      },
    ],
  },
  {
    id: "sched-002",
    day: "Tuesday",
    openTime: "06:00",
    closeTime: "22:00",
    classes: [
      {
        name: "Pilates",
        time: "09:00",
        instructor: "Emma",
        duration: 60,
      },
      {
        name: "Strength Training",
        time: "17:30",
        instructor: "David",
        duration: 60,
      },
    ],
  },
  {
    id: "sched-003",
    day: "Wednesday",
    openTime: "06:00",
    closeTime: "22:00",
    classes: [
      {
        name: "Morning Yoga",
        time: "07:00",
        instructor: "Sarah",
        duration: 60,
      },
      {
        name: "Cardio Blast",
        time: "18:30",
        instructor: "Mike",
        duration: 45,
      },
    ],
  },
  {
    id: "sched-004",
    day: "Thursday",
    openTime: "06:00",
    closeTime: "22:00",
    classes: [
      {
        name: "Pilates",
        time: "09:00",
        instructor: "Emma",
        duration: 60,
      },
      {
        name: "Strength Training",
        time: "17:30",
        instructor: "David",
        duration: 60,
      },
    ],
  },
  {
    id: "sched-005",
    day: "Friday",
    openTime: "06:00",
    closeTime: "22:00",
    classes: [
      {
        name: "Morning Yoga",
        time: "07:00",
        instructor: "Sarah",
        duration: 60,
      },
      {
        name: "HIIT",
        time: "18:30",
        instructor: "Mike",
        duration: 45,
      },
    ],
  },
  {
    id: "sched-006",
    day: "Saturday",
    openTime: "08:00",
    closeTime: "20:00",
    maintenanceTime: "20:00-22:00",
    classes: [
      {
        name: "Weekend Warrior",
        time: "10:00",
        instructor: "David",
        duration: 90,
      },
    ],
  },
  {
    id: "sched-007",
    day: "Sunday",
    openTime: "08:00",
    closeTime: "20:00",
    classes: [
      {
        name: "Gentle Yoga",
        time: "10:00",
        instructor: "Sarah",
        duration: 60,
      },
    ],
  },
]

export const gymEquipment = [
  {
    id: "equip-001",
    name: "Treadmills",
    count: 5,
    status: "operational",
  },
  {
    id: "equip-002",
    name: "Elliptical Machines",
    count: 3,
    status: "operational",
  },
  {
    id: "equip-003",
    name: "Exercise Bikes",
    count: 4,
    status: "operational",
  },
  {
    id: "equip-004",
    name: "Weight Machines",
    count: 8,
    status: "operational",
  },
  {
    id: "equip-005",
    name: "Free Weights",
    count: 1,
    status: "operational",
    description: "Set includes dumbbells from 2kg to 30kg",
  },
  {
    id: "equip-006",
    name: "Yoga Mats",
    count: 10,
    status: "operational",
  },
]

