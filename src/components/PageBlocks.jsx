import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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

export function ContactBand({ title = '携手伙伴，共建绿色日化产业生态', text = '围绕渠道、产品、供应链与产业资源，持续拓展开放协同的合作空间。' }) {
  return <section className="contact-band"><div className="container contact-band-inner"><div><span className="eyebrow light">LET'S CONNECT</span><h2>{title}</h2><p>{text}</p></div><div className="contact-band-actions"><Link className="button button-white" to="/contact">合作联系 <ArrowUpRight size={17} /></Link><Link className="button button-ghost-light" to="/cooperation">合作方向</Link></div></div></section>;
}
