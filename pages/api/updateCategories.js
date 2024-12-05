import { v4 as uuid4 } from 'uuid';
import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const data = req.body;

    const filePath = path.join(process.cwd(), 'db', 'categories.json');
    try {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileData);
        
        const newData = jsonData.map(item => item.id == data.id ? data : item)

        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));

        res.status(200).json({ success: true, data: newData, message: "Data updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to save data" });
    }
}