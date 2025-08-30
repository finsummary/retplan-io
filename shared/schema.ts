import { sql } from 'drizzle-orm';
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  text,
  real,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
// (IMPORTANT) This table is mandatory for authentication, don't drop it.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for email/password and Google OAuth authentication
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique().notNull(),
  password: varchar("password"),
  googleId: varchar("google_id").unique(),
  name: varchar("name"),
  profileImage: varchar("profile_image"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const savedScenarios = pgTable("saved_scenarios", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  name: varchar("name").notNull(),
  currentAge: integer("current_age").notNull(),
  retirementAge: integer("retirement_age").notNull(),
  currentSavings: real("current_savings").notNull(),
  desiredIncome: real("desired_income").notNull(),
  monthlyContribution: real("monthly_contribution").notNull(),
  retirementScenarios: jsonb("retirement_scenarios").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertSavedScenarioSchema = createInsertSchema(savedScenarios).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  name: z.string().min(1, "Scenario name is required"),
  currentAge: z.number().min(18).max(100),
  retirementAge: z.number().min(50).max(100),
  currentSavings: z.number().min(0),
  desiredIncome: z.number().min(100),
  monthlyContribution: z.number().min(0),
  retirementScenarios: z.any(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  googleId: true,
  profileImage: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSavedScenario = z.infer<typeof insertSavedScenarioSchema>;
export type SavedScenario = typeof savedScenarios.$inferSelect;
