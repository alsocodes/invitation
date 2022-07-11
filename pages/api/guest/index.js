import fs from 'fs';
import path from 'path';
const file = 'guests.json';

export default function handler(req, res) {
    const filepath = path.join(process.cwd(), '/public/', file);
    const json = fs.readFileSync(filepath);
    const guests = JSON.parse(json);

    // console.log(guests);
    res.json(guests);
}
