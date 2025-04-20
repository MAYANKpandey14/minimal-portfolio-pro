
import { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("Received contact info:", { name, email, subject, message });

  try {
    // IMPORTANT: Adjusting to only send "Name" property, since your DB only shows that column
    // If you want to send more, ensure your Notion DB has those properties with correct types
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        // Remove Email, Company, Message properties for now to avoid errors
        // Uncomment and adjust if you add them to your DB schema:
        // Email: {
        //   email,
        // },
        // Company: {
        //   rich_text: [{ text: { content: subject || "N/A" } }],
        // },
        // Message: {
        //   rich_text: [{ text: { content: message } }],
        // },
      },
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Notion API Error:", error.body || error.message || error);
    return res.status(500).json({ error: "Failed to add to Notion", details: error.body || error.message });
  }
}
