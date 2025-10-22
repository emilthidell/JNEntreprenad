import { useEffect, useState } from 'react';
let alive = true;
async function load() {
try {
const res = await fetch(endpoint);
if (!res.ok) throw new Error('Failed to load Instagram feed');
const data = await res.json();
if (alive) setItems(data);
} catch (e) {
if (alive) setError(e.message);
} finally {
if (alive) setLoading(false);
}
}
load();
return () => { alive = false; };
}, [endpoint]);


if (loading) return <p>Loading Instagram…</p>;
if (error) return <p style={{ color: 'crimson' }}>{error}</p>;
if (!items.length) return <p>No Instagram posts yet.</p>;


const gridTemplate = {
display: 'grid',
gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
gap: '12px'
};


return (
<div>
<div style={gridTemplate}>
{items.map((m) => (
<a
key={m.id}
href={m.permalink}
target="_blank"
rel="noreferrer noopener"
style={{
display: 'block',
borderRadius: 12,
overflow: 'hidden',
boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
}}
aria-label={m.caption || 'Instagram post'}
>
{m.media_type === 'VIDEO' ? (
<video
src={m.media_url}
poster={m.thumbnail_url || undefined}
preload="metadata"
muted
playsInline
style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
/>
) : (
<img
src={m.media_url}
alt={m.caption || 'Instagram image'}
loading="lazy"
style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
/>
)}
</a>
))}
</div>
</div>
);
}