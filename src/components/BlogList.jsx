// BlogList.jsx：显示文章预览列表
// // ➕ src/components/BlogList.jsx
import { Link } from 'react-router-dom';
import posts from '../content/blog'; // assumed loader
export default function BlogList({ limit = 3 }) {
  return (
    <section style={{padding:'2rem'}}>
      <h2>Latest Articles</h2>
      <ul style={{listStyle:'none',padding:0}}>
        {posts.slice(0,limit).map(p=>(
          <li key={p.slug} style={{marginBottom:'1rem'}}>
            <Link to={`/blog/${p.slug}`} style={{fontSize:'1.2rem',color:'#2563eb'}}>{p.title}</Link>
            <p>{p.meta_description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
