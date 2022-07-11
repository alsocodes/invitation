import fs from 'fs';
import path from 'path';
const file = 'guests.json';

export default function handler(req, res) {
    const { one } = req.query;
    const filepath = path.join(process.cwd(), '/public/', file);
    const json = fs.readFileSync(filepath);
    const guests = JSON.parse(json);
    const guest = guests.find((a) => a.id === one) || { id: '', name: '', address: '', phone: '' };

    // console.log(guests);
    res.json(guest);
}
