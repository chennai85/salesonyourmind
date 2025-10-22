'use client';

import { useState } from 'react';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  hero: {
    textAlign: 'center',
    paddingTop: '60px',
    paddingBottom: '60px',
    borderBottom: '1px solid #eee',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
    color: '#1a1a1a',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    color: '#666',
    margin: '0 0 40px 0',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  selectorContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '60px',
  },
  selectorBtn: {
    padding: '12px 24px',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
  },
  selectorBtnActive: {
    borderColor: '#2563eb',
    backgroundColor: '#2563eb',
    color: '#fff',
  },
  packagesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  packageCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '30px',
    textAlign: 'left',
    transition: 'box-shadow 0.3s ease',
  },
  packageCardHover: {
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  packageName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    color: '#1a1a1a',
  },
  packageTagline: {
    fontSize: '0.9rem',
    color: '#999',
    fontStyle: 'italic',
    margin: '0 0 20px 0',
  },
  packageList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 20px 0',
  },
  packageListItem: {
    padding: '8px 0',
    color: '#555',
    borderBottom: '1px solid #f0f0f0',
  },
  packagePrice: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2563eb',
    margin: '20px 0',
  },
  cta: {
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '100%',
    transition: 'background-color 0.3s ease',
  },
  ctaHover: {
    backgroundColor: '#1d4ed8',
  },
};

const packages = {
  all: [
    {
      id: 'pipeline-builder',
      name: 'Pipeline Builder Kit',
      tagline: '"From cold start to warm pipeline in 30 days."',
      target: 'SMBs',
      description: 'AI-assisted prospecting engine (lead lists + outreach sequences). Qualification scorecard. Proposal templates. CRM automation setup.',
      outcomes: ['Predictable pipeline without extra headcount', 'Professionalized sales process', 'More time spent selling, less admin'],
      pricing: '$3K–$5K setup + $1K–$2K/mo',
      color: '#3b82f6',
    },
    {
      id: 'copilot',
      name: "Founder's Sales Copilot",
      tagline: '"Turn technical founders into confident sellers."',
      target: 'Startups',
      description: 'AI-enabled discovery toolkit. Proposal auto-drafts. AI negotiation coach. Closing assistant.',
      outcomes: ['Founders avoid rookie sales mistakes', 'Faster customer conversion', 'Better credibility with customers & investors'],
      pricing: '$2K–$4K/month',
      color: '#8b5cf6',
    },
    {
      id: 'growth-navigator',
      name: 'Growth Navigator',
      tagline: '"From first customers to repeatable growth."',
      target: 'SMBs + Startups',
      description: 'Everything in Pipeline Builder + Sales Copilot. Post-sale AI success assistant. Quarterly playbook refresh. KPI dashboard.',
      outcomes: ['End-to-end growth engine', 'Scalable process without Big 5 costs', 'Clear visibility into sales performance'],
      pricing: '$5K–$8K/month',
      color: '#ec4899',
    },
  ],
};

export default function Home() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? packages.all : packages.all.filter((p) => p.target.includes(filter === 'smb' ? 'SMBs' : 'Startups'));

  return (
    <div style={styles.container}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Sales Execution Without the Chaos</h1>
        <p style={styles.heroSubtitle}>
          AI-powered GTM for SMBs & startups. Predictable pipelines. Confident sellers. Repeatable growth.
        </p>
      </section>

      {/* Selector */}
      <div style={styles.selectorContainer}>
        <button
          style={{
            ...styles.selectorBtn,
            ...(filter === 'all' ? styles.selectorBtnActive : {}),
          }}
          onClick={() => setFilter('all')}
        >
          Show All
        </button>
        <button
          style={{
            ...styles.selectorBtn,
            ...(filter === 'smb' ? styles.selectorBtnActive : {}),
          }}
          onClick={() => setFilter('smb')}
        >
          I'm an SMB Leader
        </button>
        <button
          style={{
            ...styles.selectorBtn,
            ...(filter === 'startup' ? styles.selectorBtnActive : {}),
          }}
          onClick={() => setFilter('startup')}
        >
          I'm a Startup Founder
        </button>
      </div>

      {/* Packages */}
      <section style={styles.packagesContainer}>
        {filtered.map((pkg) => (
          <div key={pkg.id} style={styles.packageCard}>
            <h2 style={styles.packageName}>{pkg.name}</h2>
            <p style={styles.packageTagline}>{pkg.tagline}</p>
            <p style={{ color: '#666', marginBottom: '15px' }}>{pkg.description}</p>
            <h4 style={{ margin: '20px 0 10px 0', color: '#1a1a1a' }}>Outcomes:</h4>
            <ul style={styles.packageList}>
              {pkg.outcomes.map((outcome, i) => (
                <li key={i} style={styles.packageListItem}>
                  ✓ {outcome}
                </li>
              ))}
            </ul>
            <div style={styles.packagePrice}>{pkg.pricing}</div>
            <button
              style={styles.cta}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
              onClick={() => alert(`Let's talk about ${pkg.name}`)}
            >
              Learn More
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '60px 0', borderTop: '1px solid #eee', marginTop: '60px', color: '#999' }}>
        <p>© 2025 Sales on Your Mind. Built by Srivatsa Srinivasan.</p>
        <p>
          <a href="mailto:info@learn.salesonyourmind.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
            info@learn.salesonyourmind.com
          </a>
          {' | '}
          <a href="tel:+1-202-975-9075" style={{ color: '#2563eb', textDecoration: 'none' }}>
            +1-202-975-9075
          </a>
        </p>
      </footer>
    </div>
  );
}
