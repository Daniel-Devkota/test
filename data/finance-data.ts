export interface FinanceItem {
  id: string
  type: "payment" | "charge"
  description: string
  amount: number
  date: string
  status: "paid" | "pending" | "overdue"
  category: "admin" | "capital" | "special" | "other"
}

export const financeData: FinanceItem[] = [
  {
    id: "fin-001",
    type: "charge",
    description: "Quarterly Admin Fund Levy",
    amount: 1250.0,
    date: "2025-04-01",
    status: "pending",
    category: "admin",
  },
  {
    id: "fin-002",
    type: "charge",
    description: "Quarterly Capital Works Fund Levy",
    amount: 750.0,
    date: "2025-04-01",
    status: "pending",
    category: "capital",
  },
  {
    id: "fin-003",
    type: "payment",
    description: "Quarterly Admin Fund Payment",
    amount: 1250.0,
    date: "2025-01-15",
    status: "paid",
    category: "admin",
  },
  {
    id: "fin-004",
    type: "payment",
    description: "Quarterly Capital Works Fund Payment",
    amount: 750.0,
    date: "2025-01-15",
    status: "paid",
    category: "capital",
  },
  {
    id: "fin-005",
    type: "charge",
    description: "Special Levy - Facade Repairs",
    amount: 500.0,
    date: "2025-02-01",
    status: "paid",
    category: "special",
  },
]

export const financeSummary = {
  totalDue: 2000.0,
  nextPaymentDate: "2025-04-15",
  adminFundBalance: 45000.0,
  capitalWorksBalance: 120000.0,
  paymentHistory: {
    onTime: 12,
    late: 1,
    missed: 0,
  },
}

