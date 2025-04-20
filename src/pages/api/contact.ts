
import type { NextApiRequest, NextApiResponse } from 'next';
import { addToNotion } from '@/lib/notion';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("API /contact - Raw req.body type:", typeof req.body);
  console.log("API /contact - Raw req.body content:", req.body);

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    console.error("API /contact - Missing fields:", req.body);
    return res.status(400).json({ error: "Missing required fields: name, email, subject, and message are required" });
  }

  try {
    // Using "subject" as "company" for Notion database
    await addToNotion({ name, email, company: subject, message });
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("API /contact - Notion API Error:", error?.body || error?.message || error);
    return res.status(500).json({ error: "Failed to add to Notion", details: error?.body || error?.message });
  }
}
