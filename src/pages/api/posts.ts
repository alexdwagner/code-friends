// pages/api/posts.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { postData as posts } from '../../components/Data';
import { PostProps } from '../../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetches data from database
    res.status(200).json(posts);
  } else {
    // For any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
