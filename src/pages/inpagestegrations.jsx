// ➕ src/pages/integrations.jsx
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import IntegrationCard from '../components/IntegrationCard';
import integrations from '../content/integrations';
export default function Integrations(){
  return <>
    <NavBar />
    <h1 style={{padding:'2rem',textAlign:'center'}}>Supported Integrations</h1>
    <section style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center',padding:'2rem'}}>
      {integrations.map(i=><IntegrationCard key={i.title} {...i} />)}
    </section>
    <Footer />
  </>;
}
