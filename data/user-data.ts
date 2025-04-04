export interface UserData {
  id: string
  name: string
  email: string
  unitNumber: string
  joinDate: string
  role: "owner" | "tenant" | "committee"
}

export const userData: UserData = {
  id: "user-001",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  unitNumber: "101",
  joinDate: "2023-05-15",
  role: "owner",
}

