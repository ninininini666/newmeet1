// BlogPost.jsx：渲染单篇文章详情
// // ➕ src/components/BlogPost.jsx
import { useParams } from 'react-router-dom';
import posts from '../content/blog';
import ReactMarkdown from 'react-markdown';
export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p=>p.slug===slug);
  if (!post) return <div>Post not found</div>;
  return (
    <article style={{maxWidth:'720px',margin:'2rem auto',padding:'0 1rem'}}>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
