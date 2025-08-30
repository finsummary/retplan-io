import {
  users,
  savedScenarios,
  type User,
  type UpsertUser,
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
  // (IMPORTANT) these user operations are mandatory for authentication.
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  // Scenario operations
  saveScenario(scenario: InsertSavedScenario): Promise<SavedScenario>;
  getUserScenarios(userId: string): Promise<SavedScenario[]>;
  deleteScenario(id: string, userId: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  // (IMPORTANT) these user operations are mandatory for authentication.

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Scenario operations
  async saveScenario(scenario: InsertSavedScenario): Promise<SavedScenario> {
    const [savedScenario] = await db
      .insert(savedScenarios)
      .values(scenario)
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
