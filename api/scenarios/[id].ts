import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'DELETE') {
    // For now, return unauthorized since we don't have session management
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}