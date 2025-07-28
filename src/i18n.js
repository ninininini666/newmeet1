// ➕ 基础语言切换支持
const translations = {
  en: {
    trySeaMeet: "Try SeaMeet",
    contact: "Contact",
    useCases: "Use Cases",
    integrations: "Integrations",
    blog: "Blog",
    product: "Product",
  },
  zh: {
    trySeaMeet: "试用 SeaMeet",
    contact: "联系",
    useCases: "使用场景",
    integrations: "集成",
    blog: "博客",
    product: "产品",
  },
};

let currentLang = "en";

export function t(key) {
  return translations[currentLang][key] || key;
}

export function setLang(lang) {
  currentLang = lang;
}
