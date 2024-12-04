import path from "path";
import fs from "fs";

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'db', 'categories.json');
    const {id} = req.query;
    try {
        const fileData = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(fileData);
        const newData = jsonData.filter(category => category.id !=id);
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
        res.status(200).json({ success: true, data: newData, message: "Data deleted successfully" });
    } catch (error) {
        
    }
}