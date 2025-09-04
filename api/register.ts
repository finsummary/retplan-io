import type { VercelRequest, VercelResponse } from '@vercel/node';
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { users } from '../shared/schema';
import { eq } from 'drizzle-orm';
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password, name } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL must be set");
    }

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle({ client: pool, schema: { users } });

    // Check if user already exists
    const [existingUser] = await db.select().from(users).where(eq(users.email, email));
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create new user
    const [user] = await db.insert(users).values({
      email,
      password: await hashPassword(password),
      name
    }).returning();

    // Return user data (without password)
    res.status(201).json({ 
      id: user.id, 
      email: user.email, 
      name: user.name 
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
}