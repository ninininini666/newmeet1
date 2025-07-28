// src/components/Hero.jsx ➕
export default function Hero(){
  return (
    <section style={{textAlign:'center',padding:'4rem 1rem'}}>
      <h1 style={{fontSize:'2.5rem',color:'#2563eb'}}>SeaMeet: Your 24/7 AI Meeting Copilot</h1>
      <p style={{maxWidth:'600px',margin:'1rem auto',fontSize:'1.1rem'}}>Real‑time transcription, summaries, action items, and collaborative tools powered by AI.</p>
      <button style={{background:'#2563eb',color:'#fff',padding:'0.75rem 1.5rem',border:'none',borderRadius:'0.35rem',fontSize:'1rem'}}>Get Started</button>
    </section>
  );
}


/*
export default function Hero(){
  return (
    <section className="hero">
      <h1>SeaMeet: Your 24/7 AI Meeting Copilot</h1>
      <p>Real-time transcription, summaries, action items, and collaboration—all powered by AI.</p>
      <button className="btn-primary">Get Started</button>
    </section>
  );
}
*/