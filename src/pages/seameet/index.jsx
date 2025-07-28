// SeaMeet 产品页（src/pages/seameet/index.jsx）
// ➕ src/pages/seameet/index.jsx
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import FeatureCard from '../../components/FeatureCard';
import integrations from '../../content/integrations';
export default function SeaMeetPage(){
  return <>
    <NavBar />
    <header style={{padding:'2rem',textAlign:'center'}}><h1>SeaMeet – AI Meeting Copilot</h1></header>
    <section style={{padding:'2rem',display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center'}}>
      {/* reuse features */}
    </section>
    <h2 style={{textAlign:'center'}}>Integrations</h2>
    <section style={{padding:'2rem',display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center'}}>
      {integrations.map(i=><IntegrationCard key={i.title} {...i} />)}
    </section>
    <Footer />
  </>;
}
