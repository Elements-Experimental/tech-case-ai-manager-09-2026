import { useEffect, useState } from 'react'

export default function App() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(r => r.json())
      .then(d => setStatus(d.status === 'ok' ? 'ok' : 'error'))
      .catch(() => setStatus('error'))
  }, [])

  const badge = {
    loading: { bg: '#f3f4f6', color: '#6b7280', label: 'Checking…' },
    ok:      { bg: '#dcfce7', color: '#16a34a', label: '● Running' },
    error:   { bg: '#fee2e2', color: '#dc2626', label: '● Unreachable' },
  }[status]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'system-ui, sans-serif', background: '#f9fafb' }}>
      <p style={{ marginBottom: '1rem', color: '#6b7280', fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Backend status</p>
      <span style={{ background: badge.bg, color: badge.color, padding: '0.4rem 1.2rem', borderRadius: '999px', fontWeight: 600, fontSize: '1rem', transition: 'all 0.2s' }}>
        {badge.label}
      </span>
    </div>
  )
}
