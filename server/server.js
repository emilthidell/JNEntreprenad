import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5174;


app.use(cors({
origin: process.env.ALLOWED_ORIGIN?.split(',').map(s => s.trim()) || '*'
}));


// Simple in-memory cache (per process)
let cache = { data: null, ts: 0 };
const CACHE_MS = 15 * 60 * 1000; // 15 minutes


app.get('/api/ig-media', async (req, res) => {
try {
const now = Date.now();
if (cache.data && now - cache.ts < CACHE_MS) {
return res.json(cache.data);
}


const fields = [
'id', 'caption', 'media_type', 'media_url', 'permalink', 'thumbnail_url', 'timestamp'
].join(',');


const url = new URL(`https://graph.instagram.com/${process.env.INSTAGRAM_IG_USER_ID}/media`);
url.searchParams.set('fields', fields);
url.searchParams.set('access_token', process.env.INSTAGRAM_ACCESS_TOKEN);


const igRes = await fetch(url.toString());
if (!igRes.ok) {
const text = await igRes.text();
return res.status(igRes.status).json({ error: 'Instagram API error', details: text });
}


const json = await igRes.json();


// Optional: sort by timestamp desc and limit
const items = (json.data || [])
.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
.slice(0, 12);


cache = { data: items, ts: now };
res.json(items);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Server error' });
}
});


app.listen(PORT, () => {
console.log(`IG proxy listening on http://localhost:${PORT}`);
});