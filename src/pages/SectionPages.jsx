import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FlaskConical, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { navigation, sectionMeta, findNavItem } from '../data/siteData';
import { ContactBand, DetailBody, PageHero, SectionHeading, VisualPlaceholder } from '../components/PageBlocks';

const iconMap = [Sparkles, Leaf, FlaskConical, ShieldCheck];

export function SectionLanding({ section }) {
  const meta = sectionMeta[section];
  const nav = navigation.find((item) => item.path === `/${section}`);
  const tone = section === 'responsibility' ? 'forest' : section === 'careers' ? 'sand' : section === 'development' ? 'blue' : 'green';
  return <><PageHero {...meta} tone={tone} /><section className="section-space"><div className="container"><SectionHeading eyebrow="DISCOVER MORE" title={meta.statement} text={`围绕${meta.title}的核心议题，系统呈现萌净的理念、能力建设与长期行动。`} /><div className="section-card-grid">{nav.children.map(([label, path], index) => { const Icon = iconMap[index % iconMap.length]; return <Link className="section-card" to={path} key={path}><span>0{index + 1}</span><Icon size={25} /><h3>{label}</h3><p>了解萌净在{label}领域的理念、能力、实践与长期方向。</p><div>探索更多 <ArrowUpRight size={16} /></div></Link>; })}</div></div></section><section className="feature-story"><div className="container split-layout"><VisualPlaceholder label={`${meta.title}主题影像`} variant={section === 'responsibility' ? 'green' : 'research'} tall /><div><span className="eyebrow">OUR APPROACH</span><h2>从理念出发，<br />以行动建立长期价值</h2><p>萌净重视长期能力建设，以清晰目标、专业协作和阶段复盘推动每一项工作落地。</p><Link className="text-link" to={nav.children[0][1]}>了解重点内容 <ArrowRight size={17} /></Link></div></div></section><ContactBand /></>;
}

export function GenericDetail({ section }) {
  const location = useLocation();
  const found = findNavItem(location.pathname);
  const meta = sectionMeta[section];
  const title = found?.label || '内容详情';
  return <><PageHero eyebrow={meta.eyebrow} title={title} intro={`了解萌净在${title}领域的理念、实践与长期投入。`} tone={section === 'development' ? 'blue' : section === 'responsibility' ? 'forest' : 'green'} crumbs={[{ label: meta.title, path: `/${section}` }]} /><DetailBody title={title} lead={`萌净将${title}视为集团长期发展的重要组成部分，以专业体系连接真实需求，并通过持续行动创造可验证的价值。`} type={title.includes('绿色') || section === 'responsibility' ? 'green' : 'standard'} /><ContactBand /></>;
}

export function CooperationPage() {
  return <><PageHero eyebrow="BUSINESS COOPERATION" title="商务合作" intro="连接渠道、品牌、供应链与技术伙伴，共同拓展洁净生活的更多可能。" tone="blue" /><section className="section-space"><div className="container"><SectionHeading eyebrow="COOPERATION" title="选择合作方向" text="请选择与需求最接近的合作类型，并通过联系页面提交机构信息与合作设想。" /><div className="cooperation-grid">{['渠道与经销合作','品牌与市场合作','供应链与技术合作','公益与机构合作'].map((item, index) => <div className="cooperation-card" key={item}><span>0{index + 1}</span><h3>{item}</h3><p>请简要介绍您的机构与合作需求，我们会将信息转交对应团队。</p></div>)}</div><Link className="button button-primary" to="/contact">提交合作需求 <ArrowUpRight size={17} /></Link></div></section></>;
}
