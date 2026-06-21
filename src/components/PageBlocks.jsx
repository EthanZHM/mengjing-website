import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, FlaskConical, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

export function Breadcrumb({ items = [], current }) {
  return <nav className="breadcrumb" aria-label="面包屑"><Link to="/">首页</Link>{items.map((item) => <span key={item.path}><b>/</b><Link to={item.path}>{item.label}</Link></span>)}<span aria-current="page"><b>/</b>{current}</span></nav>;
}

export function PageHero({ eyebrow, title, intro, tone = 'green', crumbs = [] }) {
  return (
    <section className={`page-hero tone-${tone}`}>
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="container page-hero-inner">
        <Breadcrumb items={crumbs} current={title} />
        <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div>
        <div className="hero-mark" aria-hidden="true"><i /><i /><i /></div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, action, align = 'left' }) {
  return <div className={`section-heading align-${align}`}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <Link className="text-link" to={action.path}>{action.label}<ArrowRight size={17} /></Link>}</div>;
}

export function VisualPlaceholder({ label = '萌净品牌视觉', variant = 'pet', tall = false }) {
  return <div className={`visual-placeholder visual-${variant} ${tall ? 'tall' : ''}`} role="img" aria-label={label}><span aria-hidden="true">MENGJING IMAGE</span><div className="visual-ring" /><div className="visual-drop" /><div className="visual-leaf" /></div>;
}

export function ContactBand({ title = '期待与您，共创更洁净的生活方式', text = '无论是渠道合作、品牌合作、产品咨询还是公益行动，我们都期待听到您的声音。' }) {
  return <section className="contact-band"><div className="container contact-band-inner"><div><span className="eyebrow">LET'S CONNECT</span><h2>{title}</h2><p>{text}</p></div><div className="contact-band-actions"><Link className="button button-white" to="/contact">联系我们 <ArrowUpRight size={17} /></Link><Link className="button button-ghost-light" to="/cooperation">商务合作</Link></div></div></section>;
}

export const capabilityIcons = { strategy: Sparkles, green: Leaf, research: FlaskConical, quality: ShieldCheck };

export function FeatureList({ items }) {
  return <ul className="feature-list">{items.map((item) => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul>;
}

export function DetailBody({ title, lead, type = 'standard' }) {
  return (
    <div className="detail-layout container section-space">
      <aside className="detail-aside"><span className="eyebrow">ON THIS PAGE</span><a href="#overview">内容概览</a><a href="#practice">我们的实践</a><a href="#future">长期方向</a><Link to="/contact">相关咨询 <ArrowUpRight size={15} /></Link></aside>
      <article className="detail-article">
        <div className="article-lead" id="overview"><span className="eyebrow">OVERVIEW</span><h2>{title}</h2><p>{lead}</p></div>
        <VisualPlaceholder label={`${title}相关内容影像`} variant={type === 'green' ? 'green' : 'research'} />
        <section id="practice"><h3>从真实需求出发，建立可持续的行动体系</h3><p>萌净围绕业务目标建立职责清晰、过程可追踪的工作机制，并通过阶段复盘持续调整行动重点。</p><p>我们坚持从宠物与家庭共同生活的实际场景出发，将专业标准落实到产品、研发、生产和服务过程。每一项实践都应具备明确目标、执行过程与可验证成果。</p></section>
        <div className="quote-block">“让专业标准被看见，让长期行动产生真实价值。”</div>
        <section id="future"><h3>面向未来的持续投入</h3><p>萌净将根据业务进展持续公开阶段成果、下一步计划与长期承诺，并确保关键数字、合作信息和相关文件经过确认。</p></section>
      </article>
    </div>
  );
}
