// ➕ src/pages/integrations.jsx ：集成工具页面
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import IntegrationCard from '../components/IntegrationCard';
import integrations from '../content/integrations';

export default function Integrations() {
  return (
    <>
      <NavBar />
      <main style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center' }}>Supported Integrations</h1>
        <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {integrations.map((i) => (
            <IntegrationCard key={i.title} title={i.title} description={i.meta_description} icon={i.icon} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

