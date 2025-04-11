import { NextResponse } from "next/server"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase/clientapp"

// Handle the POST request
export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const body = await request.json()

    // Destructure the form fields from the body
    const {
      title,
      location,
      category,
      priority,
      description,
      contactName,
      contactEmail,
      contactPhone,
      assignedTo,
    } = body

    // Create the object to store in Firestore
    const postRequestData = {
      title,
      location,
      category,
      priority,
      description,
      contactName,
      contactEmail,
      contactPhone: contactPhone || null, // Optional
      status: "submitted",                // Default status
      submittedDate: new Date().toISOString(), // Timestamp
      assignedTo
    }

    // Add to Firestore collection
    await addDoc(collection(db, "maintenance-requests"), postRequestData)

    return NextResponse.json({
      message: "Maintenance request submitted successfully!",
    }, { status: 200 })
  } catch (error) {
    console.error("Error submitting maintenance request:", error)
    return NextResponse.json({
      message: "Failed to submit maintenance request. Please try again.",
    }, { status: 500 })
  }
}
