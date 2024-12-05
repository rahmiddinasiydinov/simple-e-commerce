import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "db", "products.json");

  try {

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData); 

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    res.status(500).json({ success: false, error: "Failed to read JSON file" });
  }
}
