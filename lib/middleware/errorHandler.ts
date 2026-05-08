import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Generic error handling wrapper for API routes.
 * Use as: export const POST = async (req, res) =>
 *   withErrorHandler(async (req, res) => { ... })(req, res);
 */
export function withErrorHandler(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<any>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err: any) {
      console.error('[API ERROR]', err);
      const status = err.status || 500;
      const message = err.message || 'Internal Server Error';
      res.status(status).json({ error: message });
    }
  };
}
