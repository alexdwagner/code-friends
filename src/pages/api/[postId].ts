// pages/api/posts/[postId].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { postData as posts } from '../../components/Data';
import { PostProps } from '../../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  if (req.method === 'GET') {
    // Get data from database
    const post = posts.find(post => post.id === Number(postId));
    
    if (!post) {
      res.status(404).json({ message: 'Not found' });
      return;
    }

    res.status(200).json(post);
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
