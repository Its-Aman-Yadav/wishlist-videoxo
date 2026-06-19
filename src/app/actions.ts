"use server";

import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export async function joinWaitlist(email: string) {
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    const cleanEmail = email.trim().toLowerCase();

    // Check if email already exists in Firestore waitlist collection
    const waitlistRef = collection(db, "waitlist");
    const q = query(waitlistRef, where("email", "==", cleanEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { success: true, message: "You're already on the list! We will notify you when we launch." };
    }

    // Add new document to Firestore waitlist collection
    await addDoc(waitlistRef, {
      email: cleanEmail,
      timestamp: new Date().toISOString(),
    });

    return { success: true, message: "Success! You've joined the VideoXO waitlist." };
  } catch (error) {
    console.error("Firestore Waitlist error:", error);
    return { success: false, message: "An error occurred. Please try again later." };
  }
}
