import { v4 as uuid4 } from 'uuid';
import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const data = req.body;
    const filePath = path.join(process.cwd(), 'db', 'categories.json');
    try {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileData);

        jsonData.unshift({ id: uuid4(), name: data.name })

        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

        res.status(200).json({ success: true, data: jsonData, message: "Data saved successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to save data" });
    }
}