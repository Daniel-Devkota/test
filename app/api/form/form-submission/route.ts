import { NextResponse } from "next/server";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/clientapp";

// Handle the POST request
export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request
    const body = await request.json();
    const { name, email, subject, category, message } = body;

    // Add the form data to the Firestore collection
    await addDoc(collection(db, "contact-us-info"), {
      name,
      email,
      subject,
      category,
      message,
      createdAt: Timestamp.now(),  // Use Firestore Timestamp
    });

    // Return a success response
    return NextResponse.json({
      message: "Message sent successfully!",
    }, { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);

    // Return an error response
    return NextResponse.json({
      message: "There was a problem sending your message. Please try again.",
    }, { status: 500 });
  }
}
