export interface UserSettings {
  account: {
    name: string
    email: string
    phone: string
    unitNumber: string
    profileImage: string
  }
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
    categories: {
      maintenance: boolean
      financial: boolean
      meetings: boolean
      general: boolean
    }
  }
  privacy: {
    showContactInfo: boolean
    showUnitNumber: boolean
    shareDataWithCommittee: boolean
  }
  security: {
    twoFactorEnabled: boolean
    lastPasswordChange: string
    loginAlerts: boolean
  }
  preferences: {
    theme: "light" | "dark" | "system"
    language: string
    dateFormat: string
    timeFormat: string
  }
}

export const userSettings: UserSettings = {
  account: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+61 4 1234 5678",
    unitNumber: "101",
    profileImage: "/placeholder.svg?height=128&width=128",
  },
  notifications: {
    email: true,
    sms: false,
    push: true,
    categories: {
      maintenance: true,
      financial: true,
      meetings: true,
      general: false,
    },
  },
  privacy: {
    showContactInfo: true,
    showUnitNumber: false,
    shareDataWithCommittee: true,
  },
  security: {
    twoFactorEnabled: false,
    lastPasswordChange: "2025-01-15",
    loginAlerts: true,
  },
  preferences: {
    theme: "system",
    language: "English",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "24h",
  },
}

