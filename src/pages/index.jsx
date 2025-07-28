// index.jsx 首页结构
// ➕ src/pages/index.jsx
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import features from '../content/website_copy/features'; 
export default function Home(){
  return <>
    <NavBar />
    <Hero />
    <section style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center',padding:'2rem'}}>
      {features.map(f=>(
        <FeatureCard key={f.title} title={f.title} description={f.meta_description} icon={f.image}/>
      ))}
    </section>
    <BlogList limit={3} />
    <Footer />
  </>;
}


/*
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import features from '../content/website_copy/features'; // 可改为 loader

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="features">
        {features.map(f => <FeatureCard key={f.slug} {...f} />)}
      </section>
      <BlogList limit={3} />
      <Footer />
    </>
  );
}
*/