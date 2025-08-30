import { sql } from "drizzle-orm";
import { pgTable, text, varchar, real, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const retirementCalculations = pgTable("retirement_calculations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  currentAge: integer("current_age").notNull(),
  retirementAge: integer("retirement_age").notNull(),
  currentSavings: real("current_savings").notNull(),
  desiredMonthlyIncome: real("desired_monthly_income").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertRetirementCalculationSchema = createInsertSchema(retirementCalculations).omit({
  id: true,
  createdAt: true,
}).extend({
  currentAge: z.number().min(18).max(100),
  retirementAge: z.number().min(50).max(100),
  currentSavings: z.number().min(0),
  desiredMonthlyIncome: z.number().min(100),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertRetirementCalculation = z.infer<typeof insertRetirementCalculationSchema>;
export type RetirementCalculation = typeof retirementCalculations.$inferSelect;
