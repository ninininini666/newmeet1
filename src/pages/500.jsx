// ➕ 500错误页
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function ServerError(){
  return (
    <>
      <NavBar />
      <main style={{textAlign:'center',padding:'4rem'}}>
        <h1>500 – Something went wrong</h1>
        <p>Sorry! We're working to fix the issue.</p>
      </main>
      <Footer />
    </>
  );
}
