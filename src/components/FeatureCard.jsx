// ➕ src/components/FeatureCard.jsx
export default function FeatureCard({ title, description, icon }) {
  return (
    <div style={{border:'1px solid #eee',padding:'1.5rem',borderRadius:'0.5rem',textAlign:'center',maxWidth:'280px'}}>
      {icon && <img src={icon} alt="" style={{width:'48px',marginBottom:'1rem'}} />}
      <h3 style={{color:'#2563eb'}}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

/*
export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <img src={icon} alt="" className="icon"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
*/
