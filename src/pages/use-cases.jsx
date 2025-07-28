// ➕ src/pages/use-cases.jsx
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import UseCaseCard from '../components/UseCaseCard';
import usecases from '../content/use-cases';
export default function UseCases(){
  return <>
    <NavBar />
    <h1 style={{padding:'2rem',textAlign:'center'}}>Use Cases</h1>
    <section style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center',padding:'2rem'}}>
      {usecases.map(u=><UseCaseCard key={u.title} {...u} />)}
    </section>
    <Footer />
  </>;
}
// 场景案例页面