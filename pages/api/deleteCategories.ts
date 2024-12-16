import path from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "../../types/categories";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const filePath = path.join(process.cwd(), 'db', 'categories.json');
    const { id } = req.query;
    try {
        const fileData = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(fileData);
        const newData: Category[] = jsonData.filter(category => category.id != id);
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
        res.status(200).json({ success: true, data: newData, message: "Data deleted successfully" });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the data",
            error: error instanceof Error ? error.message : String(error),
        });
    }
}