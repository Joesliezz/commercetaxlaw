import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { articles, getArticle } from "../../articles-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "文章未找到 | 商税法研究"
    };
  }

  return {
    title: `${article.title} | 商税法研究`,
    description: article.summary
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const related = articles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 3);

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
        <nav aria-label="文章导航">
          <Link href="/">首页</Link>
          <Link href="/articles">文章库</Link>
          <Link href="/#topics">研究专题</Link>
          <Link href="/#contact">联系咨询</Link>
        </nav>
      </header>

      <article className="article-detail">
        <Link className="back-link" href="/articles">
          <ArrowLeft size={18} />
          返回文章库
        </Link>
        <div className="article-kicker">
          <span>{article.category}</span>
          <span>{article.date}</span>
          <span>{article.author}</span>
        </div>
        <h1>{article.title}</h1>
        <p className="article-summary">{article.summary}</p>
        <a className="source-link" href={article.sourceUrl} target="_blank" rel="noreferrer">
          查看公众号原文
          <ExternalLink size={17} />
        </a>

        <div className="article-body">
          {article.blocks.map((block, index) => (
            block.type === "heading"
              ? <h2 key={`${block.text}-${index}`}>{block.text}</h2>
              : <p key={`${block.text}-${index}`}>{block.text}</p>
          ))}
        </div>

        <footer className="article-footer">
          <p>
            本文由“商税法研究 Commerce Tax Law”公众号文章迁移整理。本站内容仅供一般性研究与信息参考，不构成针对具体案件的法律意见。
          </p>
        </footer>
      </article>

      {related.length > 0 && (
        <section className="related-articles">
          <p className="eyebrow">Related</p>
          <h2>同专题文章</h2>
          <div className="related-grid">
            {related.map((item) => (
              <Link className="related-card" href={`/articles/${item.slug}`} key={item.slug}>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
