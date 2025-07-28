// ➕ src/components/IntegrationCard.jsx
export default function IntegrationCard({ title, description, icon }) {
  return (
    <div style={{border:'1px solid #eee',padding:'1rem',borderRadius:'0.5rem',textAlign:'center'}}>
      {icon && <img src={icon} alt="" style={{width:'40px',marginBottom:'0.5rem'}}/>}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
