"use server";

import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const WAITLIST_FILE = path.join(DATA_DIR, "waitlist.json");

export async function joinWaitlist(email: string) {
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    // Ensure the data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true });

    let waitlist: { email: string; timestamp: string }[] = [];

    try {
      const fileContent = await fs.readFile(WAITLIST_FILE, "utf8");
      waitlist = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is invalid, start clean
      waitlist = [];
    }

    const cleanEmail = email.trim().toLowerCase();
    const isDuplicate = waitlist.some((item) => item.email === cleanEmail);

    if (isDuplicate) {
      return { success: true, message: "You're already on the list! We will notify you when we launch." };
    }

    waitlist.push({
      email: cleanEmail,
      timestamp: new Date().toISOString(),
    });

    await fs.writeFile(WAITLIST_FILE, JSON.stringify(waitlist, null, 2), "utf8");

    return { success: true, message: "Success! You've joined the VideoXO waitlist." };
  } catch (error) {
    console.error("Waitlist error:", error);
    return { success: false, message: "An error occurred. Please try again later." };
  }
}
