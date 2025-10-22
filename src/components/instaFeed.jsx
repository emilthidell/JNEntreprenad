import { useEffect, useState } from 'react';

// Minimal, battle-tested version. Fully replace your file with this.
export default function InstaFeed({ endpoint = 'http://localhost:5174/api/ig-media', columns = 3 }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load Instagram feed');
        return res.json();
      })
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  if (loading) return <p>Loading Instagram…</p>;
  if (error) return <p style={{ color: 'crimson' }}>{error}</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: '12px' }}>
      {items.map((m) => (
        <a
          key={m.id}
          href={m.permalink}
          target="_blank"
          rel="noreferrer noopener"
          style={{ display: 'block', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          aria-label={m.caption || 'Instagram post'}
        >
          {m.media_type === 'VIDEO' ? (
            <video
              src={m.media_url}
              poster={m.thumbnail_url || undefined}
              preload="metadata"
              muted
              playsInline
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          ) : (
            <img
              src={m.media_url}
              alt={m.caption || 'Instagram image'}
              loading="lazy"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          )}
        </a>
      ))}
    </div>
  );
}
