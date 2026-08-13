#!/usr/bin/env node
// 从 content/articles/*.md 生成 app/articles-data.ts
// 每次发文章只需：往 content/articles/ 里放一个 .md 文件，然后运行本脚本（publish.command 会自动调用）。
//
// Markdown 文件格式：
//   ---
//   title: "文章标题"
//   date: "2026-08-14"
//   category: "税务稽查与争议解决"
//   author: "朱海峰"
//   summary: "一句话摘要，显示在列表和搜索结果里"
//   sourceUrl: "https://mp.weixin.qq.com/s/..."   ← 可选，公众号原文链接
//   featured: true                                 ← true 或 false
//   ---
//   正文第一段……
//
//   ## 二级标题
//
//   正文第二段……
//
// 注意：文件名就是文章网址，用英文小写+横线，例如 platform-tax-filing.md

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(projectRoot, "content", "articles");
const outFile = join(projectRoot, "app", "articles-data.ts");

function parseFrontmatter(raw, file) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${file}: 缺少 --- 元信息块`);
  const meta = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim();
    if (key === "featured") {
      meta[key] = value === "true";
    } else {
      try {
        meta[key] = JSON.parse(value);
      } catch {
        throw new Error(`${file}: 元信息 ${key} 的值需要用英文双引号包起来，当前是：${value}`);
      }
    }
  }
  return { meta, body: match[2].trim() };
}

function parseBlocks(body) {
  return body
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) =>
      chunk.startsWith("## ")
        ? { type: "heading", text: chunk.slice(3).trim() }
        : { type: "paragraph", text: chunk.replace(/\n/g, " ") }
    );
}

const files = readdirSync(contentDir).filter((f) => f.endsWith(".md"));
if (files.length === 0) throw new Error("content/articles/ 里没有 .md 文件");

const required = ["title", "date", "category", "author", "summary"];
const articles = files.map((file) => {
  const { meta, body } = parseFrontmatter(readFileSync(join(contentDir, file), "utf8"), file);
  for (const key of required) {
    if (!meta[key]) throw new Error(`${file}: 元信息缺少 ${key}`);
  }
  return {
    slug: file.replace(/\.md$/, ""),
    title: meta.title,
    author: meta.author,
    date: meta.date,
    category: meta.category,
    ...(meta.description ? { description: meta.description } : {}),
    summary: meta.summary,
    ...(meta.sourceUrl ? { sourceUrl: meta.sourceUrl } : {}),
    featured: meta.featured === true,
    blocks: parseBlocks(body)
  };
});

// 按日期从新到旧排序，首页和文章库都显示最新文章在前
articles.sort((a, b) => (a.date < b.date ? 1 : -1));

const header = `// ⚠️ 本文件由 scripts/build-articles.mjs 自动生成，请勿手工编辑。
// 要增删改文章，请编辑 content/articles/ 里的 .md 文件，然后重新运行 publish.command。

export type ArticleBlock = { type: "heading" | "paragraph"; text: string };

export type Article = {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  description?: string;
  summary: string;
  sourceUrl?: string;
  featured: boolean;
  blocks: ArticleBlock[];
};

export const articles: Article[] = `;

const footer = `;

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
`;

writeFileSync(outFile, header + JSON.stringify(articles, null, 2) + footer);
console.log(`✅ 已生成 app/articles-data.ts（共 ${articles.length} 篇文章，按日期从新到旧排序）`);
