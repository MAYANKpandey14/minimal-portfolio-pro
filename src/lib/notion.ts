import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const addToNotion = async ({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company: string;
  message: string;
}) => {
  return await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID!,
    },
    properties: {
      Name: {
        title: [
          {
            text: { content: name },
          },
        ],
      },
      Email: {
        email,
      },
      Company: {
        rich_text: [
          {
            text: { content: company || "N/A" },
          },
        ],
      },
      Message: {
        rich_text: [
          {
            text: { content: message },
          },
        ],
      },
    },
  });
};
