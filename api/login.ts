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
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL must be set");
    }

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle({ client: pool, schema: { users } });

    // Find user by email
    const [user] = await db.select().from(users).where(eq(users.email, email));
    
    if (!user || !user.password || !(await comparePasswords(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Return user data (without password)
    res.status(200).json({ 
      id: user.id, 
      email: user.email, 
      name: user.name 
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
}