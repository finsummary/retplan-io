import {
  users,
  savedScenarios,
  type User,
  type InsertUser,
  type SavedScenario,
  type InsertSavedScenario,
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByGoogleId(googleId: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createGoogleUser(googleData: { googleId: string; email: string; name?: string; profileImage?: string }): Promise<User>;
  // Scenario operations
  saveScenario(scenario: InsertSavedScenario): Promise<SavedScenario>;
  getUserScenarios(userId: string): Promise<SavedScenario[]>;
  deleteScenario(id: string, userId: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async getUserByGoogleId(googleId: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.googleId, googleId));
    return user;
  }

  async createUser(userData: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .returning();
    return user;
  }

  async createGoogleUser(googleData: { googleId: string; email: string; name?: string; profileImage?: string }): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(googleData)
      .returning();
    return user;
  }

  // Scenario operations
  async saveScenario(scenario: InsertSavedScenario): Promise<SavedScenario> {
    const [savedScenario] = await db
      .insert(savedScenarios)
      .values({
        ...scenario,
        retirementScenarios: scenario.retirementScenarios || {}
      })
      .returning();
    return savedScenario;
  }

  async getUserScenarios(userId: string): Promise<SavedScenario[]> {
    return await db
      .select()
      .from(savedScenarios)
      .where(eq(savedScenarios.userId, userId))
      .orderBy(savedScenarios.createdAt);
  }

  async deleteScenario(id: string, userId: string): Promise<void> {
    await db
      .delete(savedScenarios)
      .where(and(eq(savedScenarios.id, id), eq(savedScenarios.userId, userId)));
  }
}

export const storage = new DatabaseStorage();
