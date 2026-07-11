import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { articles } from "../articles-data";

const categories = Array.from(new Set(articles.map((article) => article.category)));

export const metadata = {
  title: "文章库 | 商税法研究 Commerce Tax Law",
  description: "商税法研究 Commerce Tax Law 文章库，收录朱海峰律师关于税务稽查、虚开风险、涉税争议、企业税务合规等原创研究。"
};

export default function ArticlesPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="返回商税法研究首页">
          <span className="brand-mark">商</span>
          <span>
            <strong>商税法研究</strong>
            <small>Commerce Tax Law</small>
          </span>
        </Link>
        <nav aria-label="文章库导航">
          <Link href="/">首页</Link>
          <Link href="/articles">文章库</Link>
          <Link href="/#topics">研究专题</Link>
          <Link href="/#contact">联系咨询</Link>
        </nav>
      </header>

      <section className="library-hero">
        <Link className="back-link" href="/">
          <ArrowLeft size={18} />
          返回首页
        </Link>
        <p className="eyebrow">Article Library</p>
        <h1>税法研究文章库</h1>
        <p>
          第一批迁移 8 篇“商税法研究 Commerce Tax Law”公众号原创文章，后续可继续扩展为按专题、案由、问题场景检索的税法知识库。
        </p>
        <div className="library-stats">
          <span>{articles.length} 篇文章</span>
          <span>{categories.length} 个专题</span>
          <span>持续迁移中</span>
        </div>
      </section>

      <section className="library-content">
        <aside className="library-sidebar">
          <Search size={22} />
          <h2>专题索引</h2>
          <div className="category-list">
            {categories.map((category) => (
              <a href={`#${category}`} key={category}>{category}</a>
            ))}
          </div>
        </aside>

        <div className="library-list">
          {categories.map((category) => (
            <section className="library-group" id={category} key={category}>
              <div className="library-group-heading">
                <p className="eyebrow">Topic</p>
                <h2>{category}</h2>
              </div>
              {articles.filter((article) => article.category === category).map((article) => (
                <Link className="library-card" href={`/articles/${article.slug}`} key={article.slug}>
                  <div>
                    <span>{article.date} · {article.author}</span>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                  </div>
                  <ArrowRight size={20} />
                </Link>
              ))}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
