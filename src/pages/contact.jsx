// ➕ 联系表单页
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Contact(){
  return (
    <>
      <NavBar />
      <main style={{padding:'2rem',maxWidth:'600px',margin:'0 auto'}}>
        <h1>Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label>Your Name:<br/><input name="name" required /></label><br/>
          <label>Email:<br/><input type="email" name="email" required /></label><br/>
          <label>Message:<br/><textarea name="message" rows="5" required /></label><br/>
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
