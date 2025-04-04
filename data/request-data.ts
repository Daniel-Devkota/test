export interface RequestItem {
  id: string
  title: string
  description: string
  location: string
  category: string
  priority: string
  status: "submitted" | "in-progress" | "scheduled" | "completed" | "rejected"
  submittedDate: string
  updatedDate: string
  assignedTo?: string
  comments?: {
    author: string
    date: string
    text: string
  }[]
}

export const requestData: RequestItem[] = [
  {
    id: "req-001",
    title: "Lobby Light Replacement",
    description:
      "Two lights in the main lobby are flickering and need to be replaced. This is causing visibility issues at night.",
    location: "Main Lobby",
    category: "electrical",
    priority: "normal",
    status: "in-progress",
    submittedDate: "2025-03-15T09:30:00Z",
    updatedDate: "2025-03-18T14:20:00Z",
    assignedTo: "Building Manager",
    comments: [
      {
        author: "Building Manager",
        date: "2025-03-18T14:20:00Z",
        text: "Ordered replacement lights. Will install once they arrive.",
      },
    ],
  },
  {
    id: "req-002",
    title: "Elevator Inspection",
    description:
      "The elevator makes an unusual noise when stopping at the 3rd floor. Requesting inspection and maintenance.",
    location: "Elevator",
    category: "mechanical",
    priority: "high",
    status: "scheduled",
    submittedDate: "2025-03-20T11:15:00Z",
    updatedDate: "2025-03-22T09:45:00Z",
    assignedTo: "Elevator Contractor",
    comments: [
      {
        author: "Building Manager",
        date: "2025-03-21T10:30:00Z",
        text: "Contacted elevator maintenance company.",
      },
      {
        author: "Elevator Contractor",
        date: "2025-03-22T09:45:00Z",
        text: "Scheduled inspection for March 25, 2025.",
      },
    ],
  },
  {
    id: "req-003",
    title: "Garage Door Repair",
    description: "The garage door is slow to respond and sometimes gets stuck halfway. Needs adjustment or repair.",
    location: "Parking Garage",
    category: "mechanical",
    priority: "normal",
    status: "in-progress",
    submittedDate: "2025-03-22T15:40:00Z",
    updatedDate: "2025-03-23T11:10:00Z",
    assignedTo: "Maintenance Contractor",
    comments: [
      {
        author: "Maintenance Contractor",
        date: "2025-03-23T11:10:00Z",
        text: "Inspected the door. Need to replace the motor. Parts ordered.",
      },
    ],
  },
  {
    id: "req-004",
    title: "Water Leak in Hallway",
    description: "There is a water leak in the hallway ceiling on the 4th floor near unit 405.",
    location: "4th Floor Hallway",
    category: "plumbing",
    priority: "urgent",
    status: "completed",
    submittedDate: "2025-03-10T08:20:00Z",
    updatedDate: "2025-03-12T16:30:00Z",
    assignedTo: "Plumbing Contractor",
    comments: [
      {
        author: "Building Manager",
        date: "2025-03-10T09:15:00Z",
        text: "Placed buckets to catch water. Called plumber.",
      },
      {
        author: "Plumbing Contractor",
        date: "2025-03-11T14:20:00Z",
        text: "Identified leak from unit 505 bathroom. Repaired pipe.",
      },
      {
        author: "Building Manager",
        date: "2025-03-12T16:30:00Z",
        text: "Ceiling repaired and painted. Issue resolved.",
      },
    ],
  },
  {
    id: "req-005",
    title: "Common Area AC Not Working",
    description: "The air conditioning in the common lounge area is not cooling properly.",
    location: "Common Lounge",
    category: "hvac",
    priority: "normal",
    status: "submitted",
    submittedDate: "2025-03-24T13:45:00Z",
    updatedDate: "2025-03-24T13:45:00Z",
  },
]

