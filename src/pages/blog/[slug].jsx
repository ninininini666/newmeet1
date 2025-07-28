// ➕ src/pages/blog/[slug].jsx
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import BlogPost from '../../components/BlogPost';
export default function BlogSlug(){
  return <>
    <NavBar />
    <BlogPost />
    <Footer />
  </>;
}
// blog详情页