// ➕ src/components/UseCaseCard.jsx
export default function UseCaseCard({ title, description, image }) {
  return (
    <div style={{border:'1px solid #eee',padding:'1rem',borderRadius:'0.5rem'}}>
      <img src={image} alt="" style={{width:'100%',borderRadius:'0.5rem',marginBottom:'0.75rem'}}/>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
