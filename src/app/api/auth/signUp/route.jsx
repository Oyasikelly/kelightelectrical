import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists!" }), {
        status: 400,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return new Response(
      JSON.stringify({ message: "Sign-up successful!", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Sign-up error:", error);
    return new Response(JSON.stringify({ message: "Server error!" }), {
      status: 500,
    });
  }
}
