import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main style={{ textAlign: 'center', padding: '4rem' }}>
        <h1>404 – Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn’t exist.</p>
        <p><a href="/" style={{ color: '#2563eb' }}>Return to home</a></p>
      </main>
      <Footer />
    </>
  );
}
