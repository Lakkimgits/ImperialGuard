const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

let fetch;
try {
  if (typeof global.fetch === 'function') {
    fetch = global.fetch;
  } else {
    fetch = require('node-fetch');
  }
} catch (e) {
  console.error("You must install node-fetch@2 for CommonJS, or use Node 18+ for built-in fetch.");
  process.exit(1);
}


app.use(cors());

app.get('/api/roblox/group/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const robloxRes = await fetch(`https://groups.roblox.com/v1/groups/${groupId}`);
    if (!robloxRes.ok) {
      const text = await robloxRes.text();
      console.error(`Roblox API error: ${robloxRes.status} ${robloxRes.statusText} - ${text}`);
      return res.status(robloxRes.status).json({ error: "Roblox API error", status: robloxRes.status, details: text });
    }
    const data = await robloxRes.json();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch Roblox data", details: e.message });
  }
});

app.get('/api/roblox/group/:groupId/members', async (req, res) => {
  try {
    const { groupId } = req.params;
    const limit = Math.max(1, Math.min(Number(req.query.limit) || 100, 100)); 
    const cursor = req.query.cursor ? `&cursor=${encodeURIComponent(req.query.cursor)}` : '';
    const url = `https://groups.roblox.com/v1/groups/${groupId}/users?limit=${limit}${cursor}`;
    const robloxRes = await fetch(url);
    if (!robloxRes.ok) {
      const text = await robloxRes.text();
      console.error(`Roblox API error (members): ${robloxRes.status} ${robloxRes.statusText} - ${text}`);
      return res.status(robloxRes.status).json({ error: "Roblox API error", status: robloxRes.status, details: text });
    }
    const data = await robloxRes.json();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch Roblox group members", details: e.message });
  }
});

app.get('/api/roblox/thumbnails', async (req, res) => {
  const { userIds, size = '100x100', format = 'Png', isCircular = 'true' } = req.query;
  if (!userIds) {
    return res.status(400).json({ error: 'userIds required' });
  }
  const url =
    `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userIds}&size=${size}&format=${format}&isCircular=${isCircular}`;
  try {
    const robloxRes = await fetch(url);
    if (!robloxRes.ok) {
      const text = await robloxRes.text();
      console.error(`Roblox API error (thumbnails): ${robloxRes.status} ${robloxRes.statusText} - ${text}`);
      return res.status(robloxRes.status).json({ error: "Roblox API error", status: robloxRes.status, details: text });
    }
    const data = await robloxRes.json();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch Roblox thumbnails", details: e.message });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));