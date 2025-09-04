import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // For now, return unauthorized since we don't have session management in serverless
  // This will need to be updated with JWT or similar stateless auth
  res.status(401).json({ message: 'Unauthorized' });
}