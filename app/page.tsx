import {
  ArrowRight,
  BookOpenText,
  FileText,
  Landmark,
  Mail,
  Scale,
  Search,
  ShieldCheck,
  UserRoundCheck
} from "lucide-react";
import Link from "next/link";
import { articles as researchArticles } from "./articles-data";

const topics = [
  {
    title: "税务稽查与争议解决",
    desc: "自查通知、税务约谈、行政处罚、复议与诉讼的风险识别和应对。",
    tags: ["自查通知", "税务约谈", "复议诉讼"]
  },
  {
    title: "虚开、异常凭证与发票风险",
    desc: "围绕交易真实性、资金流、货物流、服务流与刑行衔接进行实务判断。",
    tags: ["虚开风险", "异常凭证", "刑行衔接"]
  },
  {
    title: "平台经济与灵活用工",
    desc: "平台涉税信息报送、灵活用工合规、经营者收入申报与历史风险处置。",
    tags: ["平台报送", "灵活用工", "合规整改"]
  },
  {
    title: "股权交易与企业主税务",
    desc: "股权转让定价、个人账户流水、企业主财富安排与高净值税务风险。",
    tags: ["股权转让", "公转私", "高净值"]
  },
  {
    title: "数智化征管与税收新规",
    desc: "关注金税四期、数据报送、税收征管数字化转型及新规落地影响。",
    tags: ["金税四期", "数据治理", "新规解读"]
  },
  {
    title: "增值税、所得税与跨境服务",
    desc: "围绕增值税境内消费规则、企业所得税调整和跨境服务税务判断。",
    tags: ["增值税法", "企业所得税", "跨境服务"]
  }
];

const services = [
  "收到税务自查通知、协查函、风险提示或税务约谈",
  "企业被稽查，涉及补税、滞纳金、罚款或移送风险",
  "被认定取得异常凭证、涉嫌虚开或交易真实性存疑",
  "平台经济、灵活用工、电商直播等业务需要税务合规评估",
  "股权转让、企业重组、老板个人账户流水存在税务风险",
  "准备申请行政复议、提起行政诉讼或进行争议沟通"
];

const questions = [
  "公司被税务稽查，老板个人账户流水会被查吗？",
  "灵活用工平台开票，什么情况下可能被认定为虚开？",
  "股权转让价格偏低，税务机关通常如何核定？",
  "收到税务自查通知后，企业应先做哪三件事？"
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="商税法研究首页">
          <span className="brand-mark">商</span>
          <span>
            <strong>商税法研究</strong>
            <small>Commerce Tax Law</small>
          </span>
        </a>
        <nav aria-label="主要导航">
          <a href="#topics">研究专题</a>
          <Link href="/articles">文章库</Link>
          <a href="#services">法律服务</a>
          <a href="#contact">联系咨询</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Tax Law Research & Dispute Resolution</p>
          <h1>商税法研究</h1>
          <p className="hero-subtitle">Commerce Tax Law</p>
          <p className="hero-lede">
            朱海峰律师创立的税法研究与涉税争议解决平台，关注税务稽查、虚开风险、平台经济税务合规、股权交易税务与数智化税收征管。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#articles">
              阅读税法研究
              <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#contact">
              预约涉税咨询
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="税法研究视觉图">
          <div className="paper-stack">
            <div className="document-card front">
              <div className="doc-topline">
                <Scale size={20} />
                <span>Commerce Tax Law</span>
              </div>
              <h2>税务风险事实框架</h2>
              <ul>
                <li>交易真实性</li>
                <li>资金与凭证链条</li>
                <li>行政与刑事边界</li>
              </ul>
            </div>
            <div className="document-card back-one" />
            <div className="document-card back-two" />
          </div>
          <div className="stat-panel">
            <strong>100+</strong>
            <span>篇原创税法研究文章</span>
          </div>
        </div>
      </section>

      <section className="identity band">
        <div className="section-heading narrow">
          <p className="eyebrow">Positioning</p>
          <h2>研究型税务律师的公开知识库</h2>
        </div>
        <div className="identity-grid">
          <article>
            <UserRoundCheck />
            <h3>明确身份</h3>
            <p>朱海峰，税务律师，“商税法研究 Commerce Tax Law”创始人。网站内容用于呈现公开研究、业务领域与咨询路径。</p>
          </article>
          <article>
            <BookOpenText />
            <h3>结构化沉淀</h3>
            <p>将公众号原创文章整理为专题、问答和实务清单，让客户、同行与 AI 搜索都能识别专业脉络。</p>
          </article>
          <article>
            <ShieldCheck />
            <h3>合规表达</h3>
            <p>坚持真实、审慎、可验证的律师业务介绍，不承诺结果，不使用夸大宣传，以专业判断建立信任。</p>
          </article>
        </div>
      </section>

      <section className="topics" id="topics">
        <div className="section-heading">
          <p className="eyebrow">Research Topics</p>
          <h2>研究专题</h2>
          <p>先把 100 篇原创文章纳入六个稳定专题，再逐步扩展为可检索的税法知识库。</p>
        </div>
        <div className="topic-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.title}>
              <div className="topic-icon">
                <FileText size={22} />
              </div>
              <h3>{topic.title}</h3>
              <p>{topic.desc}</p>
              <div className="tag-row">
                {topic.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="article-band" id="articles">
        <div className="section-heading">
          <p className="eyebrow">Article Library</p>
          <h2>文章库样板</h2>
          <p>第一批已迁移 8 篇公众号原创文章。后续可以继续按专题扩展为可检索、可引用的税法知识库。</p>
        </div>
        <div className="article-layout">
          <div className="article-list">
            {researchArticles.slice(0, 3).map((article) => (
              <Link className="article-card" href={`/articles/${article.slug}`} key={article.title}>
                <div>
                  <span className="category">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                </div>
                <span className="meta">{article.date}</span>
              </Link>
            ))}
            <Link className="article-more" href="/articles">
              查看全部文章
              <ArrowRight size={18} />
            </Link>
          </div>
          <aside className="query-panel">
            <Search size={24} />
            <h3>高意向问题矩阵</h3>
            <p>围绕客户真实搜索问题持续写作，比单纯发布新规解读更容易带来有效咨询。</p>
            <ul>
              {questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="eyebrow">Legal Services</p>
          <h2>适合咨询的涉税场景</h2>
          <p>网站不以夸张承诺吸引客户，而是帮助当事人判断何时需要专业税务律师介入。</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <div className="service-item" key={service}>
              <Landmark size={20} />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="process band">
        <div className="section-heading">
          <p className="eyebrow">Consultation Process</p>
          <h2>咨询流程</h2>
        </div>
        <div className="process-grid">
          <article>
            <span>01</span>
            <h3>初步沟通</h3>
            <p>确认案件类型、争议阶段、是否存在利益冲突以及是否适合进入正式咨询。</p>
          </article>
          <article>
            <span>02</span>
            <h3>材料审查</h3>
            <p>围绕通知书、处罚文书、合同、发票、流水、业务资料建立事实和证据目录。</p>
          </article>
          <article>
            <span>03</span>
            <h3>风险评估</h3>
            <p>区分补税、处罚、复议诉讼、刑事移送等不同风险层级，形成应对方案。</p>
          </article>
          <article>
            <span>04</span>
            <h3>代理或顾问</h3>
            <p>根据具体需要提供沟通、申辩、复议、诉讼、合规整改或专项顾问服务。</p>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>联系朱海峰律师</h2>
            <p>
              正式上线前，可在这里放置微信、电话、邮箱或预约表单。建议同时列明咨询前需要准备的材料，以提高沟通效率。
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:contact@example.com">
              邮件咨询
              <Mail size={18} />
            </a>
            <a className="button secondary" href="#articles">
              查看文章库
              <BookOpenText size={18} />
            </a>
          </div>
        </div>
        <p className="disclaimer">
          本网站内容仅供一般性研究与信息参考，不构成针对具体案件的法律意见。具体事项应结合事实、证据、地区口径及现行法律法规进行判断。
        </p>
      </section>

      <footer>
        <div>
          <strong>商税法研究 Commerce Tax Law</strong>
          <span>朱海峰律师创立的税法研究与涉税争议解决平台</span>
        </div>
        <span>© 2026 Commerce Tax Law</span>
      </footer>
    </main>
  );
}
