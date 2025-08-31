import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { insertSavedScenarioSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs/promises";

function isAuthenticated(req: any, res: any, next: any) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  setupAuth(app);

  // Scenario routes
  app.post('/api/scenarios', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const scenarioData = insertSavedScenarioSchema.parse({
        ...req.body,
        userId,
      });
      
      const savedScenario = await storage.saveScenario(scenarioData);
      res.json(savedScenario);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid scenario data", errors: error.errors });
      } else {
        console.error("Error saving scenario:", error);
        res.status(500).json({ message: "Failed to save scenario" });
      }
    }
  });

  app.get('/api/scenarios', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const scenarios = await storage.getUserScenarios(userId);
      res.json(scenarios);
    } catch (error) {
      console.error("Error fetching scenarios:", error);
      res.status(500).json({ message: "Failed to fetch scenarios" });
    }
  });

  app.delete('/api/scenarios/:id', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.id;
      const scenarioId = req.params.id;
      
      await storage.deleteScenario(scenarioId, userId);
      res.json({ message: "Scenario deleted successfully" });
    } catch (error) {
      console.error("Error deleting scenario:", error);
      res.status(500).json({ message: "Failed to delete scenario" });
    }
  });

  // Blog article endpoint
  app.get('/api/blog/:slug', async (req, res) => {
    try {
      const { slug } = req.params;
      const filePath = path.join(process.cwd(), 'client', 'src', 'content', 'blog', `${slug}.md`);
      
      const content = await fs.readFile(filePath, 'utf-8');
      res.setHeader('Content-Type', 'text/plain');
      res.send(content);
    } catch (error) {
      console.error("Error reading blog article:", error);
      res.status(404).json({ message: "Article not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
