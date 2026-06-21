import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, FileText, Info, Share2, Tag } from 'lucide-react';
import { articles, newsItems, sectionMeta } from '../data/siteData';
import { ContactBand, PageHero, SectionHeading, VisualPlaceholder } from '../components/PageBlocks';

const lifeCategories = [['全部内容', '/pet-life'], ['宠物洗护知识', '/pet-life/care'], ['养宠清洁指南', '/pet-life/cleaning-guide'], ['家庭清洁方案', '/pet-life/home-solutions'], ['常见问题', '/pet-life/faq']];
const newsCategories = [['全部资讯', '/news'], ['集团新闻', '/news/group'], ['品牌动态', '/news/brands'], ['新品发布', '/news/products'], ['行业资讯', '/news/industry']];

function CategoryTabs({ items, current }) { return <nav className="category-tabs" aria-label="内容分类">{items.map(([label, path]) => <Link className={path === current ? 'active' : ''} to={path} key={path}>{label}</Link>)}</nav>; }

function ShareButton() {
  const [status, setStatus] = useState('分享');
  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: window.location.href });
        setStatus('已分享');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setStatus('链接已复制');
      }
    } catch {
      setStatus('分享未完成');
    }
    window.setTimeout(() => setStatus('分享'), 1800);
  };
  return <button type="button" onClick={share} aria-live="polite"><Share2 size={15} />{status}</button>;
}

function ArticleCards({ items }) { return <div className="knowledge-card-grid">{items.map((article, index) => <Link className="knowledge-card" to={`/pet-life/${article.category}/${article.slug}`} key={article.slug}><VisualPlaceholder label={`${article.topic}内容影像`} variant={index % 2 ? 'green' : 'pet'} /><div><div className="knowledge-card-meta"><span>{article.type}</span><small>{article.read}</small></div><h3>{article.title}</h3><p>{article.summary}</p><div className="knowledge-tags"><span>{article.petType}</span><span>{article.scenario}</span></div><footer><time dateTime={article.date.replaceAll('.', '-')}>{article.date}</time><ArrowUpRight size={16} /></footer></div></Link>)}</div>; }

export function PetLifeLanding() {
  const featured = articles[2];
  return <><PageHero {...sectionMeta['pet-life']} /><section className="knowledge-intro"><div className="container"><div><span className="eyebrow">KNOWLEDGE & SOLUTIONS</span><h2>从问题出发，找到可执行的护理方法</h2><p>内容按宠物自身护理、家庭清洁任务与完整解决方案组织，并标注适用对象、阅读时间和审核信息。</p></div><div className="knowledge-entry-list"><Link to="/pet-life/care"><span>01</span><strong>我想了解宠物洗护</strong><ArrowRight size={17} /></Link><Link to="/pet-life/cleaning-guide"><span>02</span><strong>我遇到家庭清洁问题</strong><ArrowRight size={17} /></Link><Link to="/pet-life/home-solutions"><span>03</span><strong>我需要完整清洁方案</strong><ArrowRight size={17} /></Link><Link to="/pet-life/faq"><span>04</span><strong>我有一个具体问题</strong><ArrowRight size={17} /></Link></div></div></section><section className="section-space knowledge-center"><div className="container"><CategoryTabs items={lifeCategories} current="/pet-life" /><SectionHeading eyebrow="FEATURED SOLUTION" title="本期家庭清洁方案" text="将零散清洁任务组织成更容易坚持的日常计划。" /><Link className="solution-feature" to={`/pet-life/${featured.category}/${featured.slug}`}><VisualPlaceholder label="人宠共居家庭清洁方案示意" variant="pet" tall /><div><span>{featured.type}</span><h2>{featured.title}</h2><p>{featured.summary}</p><dl><div><dt>适用场景</dt><dd>{featured.scenario}</dd></div><div><dt>适用对象</dt><dd>{featured.petType}</dd></div><div><dt>阅读时间</dt><dd>{featured.read}</dd></div></dl><strong>查看完整方案 <ArrowUpRight size={16} /></strong></div></Link><SectionHeading eyebrow="LATEST GUIDES" title="最新知识与指南" text="所有内容均预留专业审核、更新时间与注意事项字段。" /><ArticleCards items={articles} /></div></section><section className="knowledge-standard"><div className="container"><div><CheckCircle2 size={28} /><span><small>CONTENT STANDARD</small><h2>清楚说明适用范围，不用通用建议替代专业判断</h2></span></div><p>知识内容服务于日常护理与家庭清洁。涉及持续不适、疾病或异常表现时，应及时咨询专业兽医。</p></div></section><ContactBand title="没有找到想了解的问题？" text="告诉我们您关心的宠物护理与家庭清洁问题。" /></>;
}

export function ArticleListPage() {
  const { category } = useParams(); const items = articles.filter((item) => item.category === category); const label = lifeCategories.find(([, path]) => path.endsWith(category))?.[0] || '健康生活内容'; const list = items.length ? items : articles;
  return <><PageHero eyebrow="PET WELLNESS" title={label} intro="围绕具体问题整理方法、步骤与注意事项。" crumbs={[{ label: '宠物健康生活', path: '/pet-life' }]} /><section className="section-space knowledge-list-page"><div className="container"><CategoryTabs items={lifeCategories} current={`/pet-life/${category}`} /><div className="content-list-head"><div><span className="eyebrow">CONTENT LIBRARY</span><h2>{label}</h2></div><span>共 {list.length} 篇内容</span></div><ArticleCards items={list} /></div></section></>;
}

export function ArticleDetailPage() {
  const { article } = useParams(); const item = articles.find((entry) => entry.slug === article) || articles[0];
  return <><article className="editorial-detail knowledge-detail"><div className="container article-narrow"><div className="breadcrumb"><Link to="/">首页</Link><b>/</b><Link to="/pet-life">宠物健康生活</Link><b>/</b><span>{item.type}</span></div><div className="article-labels"><span>{item.type}</span><span>{item.petType}</span><span>{item.scenario}</span></div><h1>{item.title}</h1><p className="article-deck">{item.summary}</p><div className="article-meta"><span>{item.date}</span><span><Clock size={15} />{item.read}</span><span><CheckCircle2 size={15} />审核：{item.reviewer}</span><ShareButton /></div><VisualPlaceholder label={`${item.topic}文章主题影像`} variant="pet" tall /><div className="knowledge-article-layout"><aside><strong>本文内容</strong><a href="#understand">先判断实际情况</a><a href="#method">建立处理方法</a><a href="#attention">需要留意的情况</a><div><Info size={17} /><span>更新于<br />{item.updated}</span></div></aside><div className="rich-text"><section id="understand"><h2>先判断实际情况</h2><p>开始处理前，先确认宠物类型、当前状态、生活环境和问题出现的频率。相同表象可能来自不同原因，不建议直接套用单一清洁频率。</p></section><section id="method"><h2>建立稳定、温和的方法</h2><p>把任务拆分为日常观察、按需处理和周期清洁。选择产品时，应核对适用对象、使用方法和注意事项，并严格按照正式标签操作。</p><blockquote>清洁的目标不是追求更高频率，而是让宠物与家庭环境保持舒适、稳定的平衡。</blockquote></section><section id="attention"><h2>需要留意的情况</h2><p>如果宠物出现持续不适、皮肤异常或行为变化，应停止自行处理并及时咨询专业兽医。本文用于日常生活参考，不替代诊疗意见。</p></section><div className="article-review-note"><CheckCircle2 size={20} /><div><strong>内容审核说明</strong><p>本文由{item.reviewer}整理，最近更新于 {item.updated}。参考资料与审核信息将随内容更新同步维护。</p></div></div></div></div></div></article><section className="article-related"><div className="container"><div><span className="eyebrow">RELATED</span><h2>继续解决相关问题</h2></div><div>{articles.filter((entry) => entry.slug !== item.slug).slice(0, 3).map((entry) => <Link to={`/pet-life/${entry.category}/${entry.slug}`} key={entry.slug}><span>{entry.type}</span><h3>{entry.title}</h3><small>{entry.read}</small><ArrowUpRight size={16} /></Link>)}</div></div></section><ContactBand title="继续探索宠物健康生活" /></>;
}

function NewsRows({ items }) { return <div className="newsroom-rows">{items.map((news) => <Link to={`/news/${news.category}/${news.slug}`} key={news.slug}><time dateTime={news.date.replaceAll('.', '-')}><strong>{news.date.slice(5).replace('.', '/')}</strong><small>{news.date.slice(0, 4)}</small></time><div><span>{news.type}</span><h3>{news.title}</h3><p>{news.summary}</p><small>来源：{news.source} · {news.location}</small></div><ArrowUpRight /></Link>)}</div>; }

export function NewsLanding() {
  const featured = newsItems[0];
  return <><PageHero {...sectionMeta.news} tone="blue" /><section className="newsroom-intro"><div className="container"><div><span className="eyebrow">NEWSROOM</span><h2>及时、准确地记录萌净动态</h2></div><div><p>新闻中心集中发布集团经营、品牌行动、产品信息与行业观察，并明确发布日期、信息来源和关联业务。</p><Link to="/contact">媒体联系 <ArrowUpRight size={15} /></Link></div></div></section><section className="section-space newsroom-page"><div className="container"><CategoryTabs items={newsCategories} current="/news" /><div className="newsroom-feature"><Link to={`/news/${featured.category}/${featured.slug}`}><VisualPlaceholder label="集团重点新闻图片示意" variant="research" tall /><div><div><span>{featured.type}</span><time>{featured.date}</time></div><h2>{featured.title}</h2><p>{featured.summary}</p><small>来源：{featured.source} · {featured.location}</small><strong>阅读全文 <ArrowRight size={16} /></strong></div></Link></div><div className="newsroom-section-head"><div><span className="eyebrow">LATEST RELEASES</span><h2>最新发布</h2></div><span>2026</span></div><NewsRows items={newsItems.slice(1)} /></div></section><section className="media-contact"><div className="container"><FileText size={27} /><div><span>MEDIA CONTACT</span><h2>媒体与品牌资料</h2><p>采访、新闻资料与品牌素材申请，请通过官方联系渠道提交。</p></div><Link className="button button-secondary" to="/contact">媒体咨询 <ArrowUpRight size={16} /></Link></div></section></>;
}

export function NewsListPage() { const { category } = useParams(); const items = newsItems.filter((item) => item.category === category); const label = newsCategories.find(([, path]) => path.endsWith(category))?.[0] || '资讯动态'; const list = items.length ? items : newsItems; return <><PageHero eyebrow="MENGJING NEWS" title={label} intro="发布经过确认的集团、品牌与产品信息。" tone="blue" crumbs={[{ label: '资讯动态', path: '/news' }]} /><section className="section-space newsroom-list-page"><div className="container"><CategoryTabs items={newsCategories} current={`/news/${category}`} /><div className="newsroom-section-head"><div><span className="eyebrow">NEWS ARCHIVE</span><h2>{label}</h2></div><span>{list.length} 条资讯</span></div><NewsRows items={list} /></div></section></>; }

export function NewsDetailPage() { const { news } = useParams(); const item = newsItems.find((entry) => entry.slug === news) || newsItems[0]; return <><article className="editorial-detail news-detail-pro"><div className="container article-narrow"><div className="breadcrumb"><Link to="/">首页</Link><b>/</b><Link to="/news">资讯动态</Link><b>/</b><span>{item.type}</span></div><span className="eyebrow">{item.type}</span><h1>{item.title}</h1><p className="article-deck">{item.summary}</p><div className="article-meta"><span>{item.date}</span><span>来源：{item.source}</span><span>地点：{item.location}</span><ShareButton /></div><VisualPlaceholder label="新闻现场与项目影像" variant="research" tall /><div className="news-body-layout"><aside><Tag size={17} /><span>关联主题</span><strong>{item.related}</strong><Link to="/contact">媒体联系 <ArrowUpRight size={14} /></Link></aside><div className="rich-text"><p className="lead">{item.summary}</p><h2>项目背景</h2><p>本项目围绕{item.related}展开，相关工作与萌净的长期业务建设和企业责任方向保持一致。</p><h2>具体行动</h2><p>萌净将围绕相关业务持续推进具体工作，并通过集团官方渠道更新阶段进展。涉及合作伙伴与数据时，将明确出处和统计口径。</p><h2>后续计划</h2><p>后续进展将在确认后通过官方渠道发布，并根据实际情况关联品牌、产品、责任项目和媒体资料。</p><div className="news-source-note"><Info size={18} /><span><strong>信息说明</strong>本文由{item.source}发布，发布日期为 {item.date}。</span></div></div></div></div></article><ContactBand title="了解更多萌净动态" /></>; }
