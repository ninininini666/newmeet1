// Footer.jsx
// ➕ src/components/Footer.jsx
export default function Footer(){
  return (
    <footer style={{padding:'2rem',background:'#f9f9f9',textAlign:'center',color:'#666',fontSize:'0.9rem'}}>
      <div>© 2025 SeaSalt.ai · SeaMeet</div>
      <div><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></div>
      <div style={{marginTop:'0.5rem'}}>
        <a href="https://twitter.com/seasalt_ai">Twitter</a> · <a href="https://www.linkedin.com/company/seasalt-ai/">LinkedIn</a>
      </div>
    </footer>
  );
}

/*
export default function Footer() {
  return (
    <footer className="footer">
      <div>© 2025 SeaSalt.ai · SeaMeet</div>
      <div>
        <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
      </div>
    </footer>
  );
}
*/