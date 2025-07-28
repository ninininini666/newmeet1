// ➕ src/components/NavBar.jsx
import { Link } from 'react-router-dom';
export default function NavBar(){
  return (
    <nav className="navbar" style={{position:'sticky',top:0,zIndex:10,background:'#fff',borderBottom:'1px solid #e5e5e5',padding:'1rem'}}>
      <div><Link to="/" className="logo" style={{fontSize:'1.5rem',fontWeight:'bold',color:'#2563eb'}}>SeaMeet</Link></div>
      <ul className="nav-menu" style={{display:'inline-flex',listStyle:'none',gap:'1rem',marginLeft:'2rem'}}>
        <li><Link to="/seameet">Product</Link></li>
        <li><Link to="/integrations">Integrations</Link></li>
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div style={{marginLeft:'auto',display:'inline-flex',gap:'1rem'}}>
        <button className="btn-primary" style={{background:'#2563eb',color:'#fff',border:'none',padding:'0.5rem 1rem',borderRadius:'0.25rem'}}>Try SeaMeet</button>
        <button className="lang-toggle">EN</button>
      </div>
    </nav>
  );
}


/*
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">SeaMeet</Link>
      <ul className="menu">
        <li><Link to="/seameet">Product</Link></li>
        <li><Link to="/integrations">Integrations</Link></li>
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="actions">
        <button className="btn-primary">Try SeaMeet</button>
        <button className="lang-switch">EN</button>
      </div>
    </nav>
  );
}
*/

/*
// src/components/NavBar.jsx ➕
import { Link } from 'react-router-dom';
export default function NavBar(){
  return (
    <nav className="navbar">
      <Link to="/" className="logo">SeaMeet</Link>
      <ul className="nav-menu">
        <li><Link to="/seameet">Product</Link></li>
        <li><Link to="/integrations">Integrations</Link></li>
        <li><Link to="/use-cases">Use Cases</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="btn-primary">Try SeaMeet</button>
      <button className="lang-toggle">EN</button>
    </nav>
  );
}
*/
