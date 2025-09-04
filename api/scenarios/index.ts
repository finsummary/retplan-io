import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    // Return empty array for now since we don't have auth
    return res.json([]);
  }
  
  if (req.method === 'POST') {
    // For now, return unauthorized since we don't have session management
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}