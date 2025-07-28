// ➕ src/seo.js
export function setMeta({ title, description, image, url }) {
  document.title = title;
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content = description;
  if (image) document.querySelector('meta[property="og:image"]').content = image;
  // etc.
}
// SEO 元标签管理