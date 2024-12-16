import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { Category } from "../../types/categories";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "db", "categories.json");

  try {

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data: Category[] = JSON.parse(jsonData);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while getting the data",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
