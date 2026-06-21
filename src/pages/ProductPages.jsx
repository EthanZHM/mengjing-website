import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen, CircleCheck, FlaskConical, Info, Leaf, ListFilter, Package, ShieldCheck, Sparkles } from 'lucide-react';
import { articles, productSeries, products, sectionMeta } from '../data/siteData';
import { ContactBand, PageHero, SectionHeading, VisualPlaceholder } from '../components/PageBlocks';

const groupMeta = {
  pet: { eyebrow: 'PET CARE', title: '宠物清洁护理', text: '围绕宠物自身与高频用品，建立从日常护理到环境管理的细分产品体系。' },
  home: { eyebrow: 'HOME CARE', title: '家庭洁净生活', text: '回应人宠共居家庭在衣物、织物、餐具与空间方面的日常清洁需求。' },
};

const careLabels = ['日常护理', '局部清洁', '深度护理', '深度清洁', '环境管理'];

function BottleVisual({ product, large = false }) {
  const formClass = product?.form === '喷雾' ? 'is-spray' : product?.form === '泡沫' ? 'is-foam' : 'is-liquid';
  return <div className={`product-packshot ${formClass} ${large ? 'is-large' : ''}`} aria-label={`${product?.name || '萌净产品'}包装示意`}><div className="pack-cap" /><div className="pack-label"><small>{product?.brand || 'MENGJING'}</small><strong>萌净</strong><span>{product?.tag || '专业洁净'}</span></div></div>;
}

function ProductCard({ product }) {
  return <Link className="product-card product-card-pro" to={`/products/${product.series}/${product.slug}`}><div className="product-image"><div className="product-card-meta"><span>{product.tag}</span><small>{product.form}</small></div><BottleVisual product={product} /></div><div className="product-card-body"><div className="product-brand-line"><span>{product.brand}</span><small>{product.spec}</small></div><h3>{product.name}</h3><p>{product.scenario}</p><div className="product-benefit-tags">{product.benefits.slice(0, 3).map((benefit) => <span key={benefit}>{benefit}</span>)}</div><span className="text-link">查看产品详情 <ArrowUpRight size={15} /></span></div></Link>;
}

function SeriesLinks({ current }) {
  return <nav className="series-switcher" aria-label="产品系列切换">{productSeries.map((item) => <Link className={item.path.endsWith(current) ? 'active' : ''} to={item.path} key={item.path}><span>{item.number}</span>{item.title}</Link>)}</nav>;
}

function ProductRelations({ compact = false }) {
  return <section className={`product-relations ${compact ? 'is-compact' : ''}`}><div className="container"><SectionHeading eyebrow="EXPLORE MORE" title="从产品，继续了解品牌与健康生活" text="通过品牌定位和专业内容，更完整地理解产品所服务的人群、场景与使用方式。" /><div className="relation-grid"><Link className="relation-card relation-brand" to="/brands"><span>BRAND FAMILY</span><h3>了解产品背后的品牌家族</h3><p>探索萌净宠护、净爪星球、悠宠生活与净家优选的不同定位。</p><strong>探索品牌家族 <ArrowRight size={16} /></strong></Link><Link className="relation-card relation-knowledge" to="/pet-life"><BookOpen size={25} /><span>PET WELLNESS</span><h3>获取科学的清洁护理知识</h3><p>从洗护频率到家庭清洁方案，让产品使用建立在清晰方法之上。</p><strong>进入健康生活 <ArrowRight size={16} /></strong></Link></div></div></section>;
}

export function ProductsLanding() {
  return <><PageHero {...sectionMeta.products} /><section className="product-overview"><div className="container product-overview-grid"><div><span className="eyebrow">PRODUCT ARCHITECTURE</span><h2>以使用场景为线索，<br />构建专业产品矩阵</h2></div><div><p>萌净的产品体系不以单品销售为中心，而是从宠物护理与家庭洁净的实际需求出发，将七个专业系列组织成清晰、可持续扩展的解决方案。</p><div><span><b>4</b> 宠物护理系列</span><span><b>3</b> 家庭洁净系列</span><span><b>7</b> 专业产品方向</span></div></div></div></section><section className="section-space product-matrix"><div className="container">{Object.entries(groupMeta).map(([group, meta]) => <div className="matrix-group" key={group}><div className="matrix-group-head"><div><span>{meta.eyebrow}</span><h2>{meta.title}</h2></div><p>{meta.text}</p></div><div className={`matrix-series-grid matrix-${group}`}>{productSeries.filter((item) => item.group === group).map((series) => <Link to={series.path} className="matrix-series-card" key={series.path}><div className="matrix-card-top"><span>{series.number}</span><small>{series.en}</small><ArrowUpRight size={18} /></div><div className="series-graphic"><i /><i /></div><h3>{series.title}</h3><p>{series.summary}</p><div className="matrix-scene"><span>适用场景</span><strong>{series.scene}</strong></div></Link>)}</div></div>)}</div></section><section className="product-quality"><div className="container"><div className="quality-intro"><span className="eyebrow light">QUALITY PRINCIPLES</span><h2>以专业标准，建立产品信任</h2><p>从场景研究、配方设计到使用说明，让每一项产品信息清晰、可理解、可验证。</p></div><div className="quality-points">{[[FlaskConical, '场景研发', '从真实的人宠共居需求出发'], [ShieldCheck, '品质管理', '贯穿产品开发与生产过程'], [Info, '信息透明', '清楚呈现参数与使用方法'], [Leaf, '绿色思考', '关注包装与产品生命周期']].map(([Icon, title, text], index) => <div key={title}><span>0{index + 1}</span><Icon size={23} /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section><ProductRelations /><ContactBand title="寻找产品与渠道合作机会？" text="获取产品资料、合作政策与适用场景建议。" /></>;
}

export function ProductSeriesPage() {
  const { series } = useParams();
  const info = productSeries.find((item) => item.path.endsWith(series)) || productSeries[0];
  const baseProducts = useMemo(() => products.filter((item) => item.series === series), [series]);
  const filters = useMemo(() => ['全部', ...careLabels.filter((label) => baseProducts.some((item) => item.careType === label))], [baseProducts]);
  const [activeFilter, setActiveFilter] = useState('全部');
  useEffect(() => setActiveFilter('全部'), [series]);
  const list = activeFilter === '全部' ? baseProducts : baseProducts.filter((item) => item.careType === activeFilter);

  return <><PageHero eyebrow={info.en} title={info.title} intro={info.summary} crumbs={[{ label: '产品中心', path: '/products' }]} /><section className="series-overview"><div className="container"><SeriesLinks current={series} /><div className="series-overview-grid"><div><span className="eyebrow">SERIES OVERVIEW</span><h2>针对具体场景，提供清晰产品选择</h2><p>{info.summary} 产品信息按照功效、形态、适用对象与使用场景进行组织，便于快速比较和理解。</p></div><div className="series-facts"><div><span>系列定位</span><strong>{info.scene}</strong></div><div><span>系列产品</span><strong>{baseProducts.length} 款</strong></div><div><span>产品原则</span><strong>专业 · 清晰 · 可信</strong></div></div></div></div></section><section className="section-space series-products"><div className="container"><div className="product-filter-pro"><div><ListFilter size={18} /><strong>按护理需求筛选</strong></div><div className="filter-options">{filters.map((filter) => <button type="button" className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)} key={filter}>{filter}</button>)}</div><span>显示 {list.length} 款产品</span></div><div className="product-grid">{list.map((product) => <ProductCard product={product} key={product.slug} />)}</div></div></section><section className="series-assurance"><div className="container"><div><ShieldCheck size={29} /><span><small>PRODUCT INFORMATION</small><strong>参数、功效与使用说明清晰呈现</strong></span></div><p>产品规格、适用范围和注意事项以正式包装标签及经审核的产品资料为准。</p></div></section><ProductRelations compact /><ContactBand title="了解本系列产品资料与合作政策" /></>;
}

export function ProductDetailPage() {
  const { series, product } = useParams();
  const item = products.find((entry) => entry.slug === product) || products.find((entry) => entry.series === series) || products[0];
  const seriesInfo = productSeries.find((entry) => entry.path.endsWith(item.series)) || productSeries[0];
  const relatedProducts = products.filter((entry) => entry.series === item.series && entry.slug !== item.slug).slice(0, 3);
  const relatedArticles = articles.slice(0, 3);
  const parameters = [['产品名称', item.name], ['产品规格', item.spec], ['产品形态', item.form], ['适用对象', item.audience], ['适用场景', item.scenario], ['所属系列', seriesInfo.title], ['所属品牌', item.brand], ['产品资料', '以正式包装信息为准']];

  return <><section className="product-detail-hero product-detail-pro"><div className="container"><div className="breadcrumb"><Link to="/">首页</Link><b>/</b><Link to="/products">产品中心</Link><b>/</b><Link to={`/products/${item.series}`}>{seriesInfo.title}</Link><b>/</b><span>{item.name}</span></div><div className="product-detail-grid"><div className="detail-product-visual"><div className="visual-note"><span>{seriesInfo.en}</span><small>产品包装展示</small></div><BottleVisual product={item} large /><div className="visual-quality-mark"><ShieldCheck size={17} /> 品质信息</div></div><div className="product-detail-copy"><span className="eyebrow">{item.tag} · {item.form}</span><h1>{item.name}</h1><p>{item.scenario}。关注日常使用体验，以清晰的产品信息和专业标准带来安心洁净选择。</p><div className="detail-benefit-list">{item.benefits.map((benefit) => <span key={benefit}><CircleCheck size={16} />{benefit}</span>)}</div><dl><div><dt>产品规格</dt><dd>{item.spec}</dd></div><div><dt>适用对象</dt><dd>{item.audience}</dd></div><div><dt>所属品牌</dt><dd><Link to={`/brands/${item.brandSlug}`}>{item.brand} <ArrowUpRight size={13} /></Link></dd></div></dl><div className="detail-actions"><Link className="button button-primary" to="/contact">产品资料咨询 <ArrowUpRight size={17} /></Link><Link className="button button-secondary" to={`/products/${item.series}`}>返回系列</Link></div><small className="detail-disclaimer">产品信息以正式包装标签及经审核的说明资料为准。</small></div></div></div></section>

  <section className="section-space product-benefits-pro"><div className="container"><SectionHeading eyebrow="PRODUCT BENEFITS" title="为真实护理需求而设计" text="功效表达保持克制、清晰，并为正式检测依据与产品资料预留位置。" /><div className="benefit-grid-pro">{item.benefits.map((benefit, index) => <div key={benefit}><span>0{index + 1}</span><Sparkles size={22} /><h3>{benefit}</h3><p>围绕“{item.scenario}”的具体需求进行产品设计，相关功效以正式产品资料为准。</p></div>)}</div></div></section>

  <section className="product-usage"><div className="container product-usage-grid"><div><span className="eyebrow">HOW TO USE</span><h2>使用方法</h2><ol><li><span>01</span><div><strong>使用前确认</strong><p>阅读产品标签，确认适用对象、适用材质和建议用量。</p></div></li><li><span>02</span><div><strong>按场景使用</strong><p>根据产品形态与护理场景取适量使用，避免不必要的过量。</p></div></li><li><span>03</span><div><strong>完成后检查</strong><p>按说明进行冲洗、擦拭或自然干燥，并观察实际使用情况。</p></div></li></ol></div><div className="usage-visual"><VisualPlaceholder label="产品使用场景与方法示意" variant="pet" /><div><Package size={21} /><span><small>RECOMMENDED SCENE</small><strong>{item.scenario}</strong></span></div></div></div></section>

  <section className="section-space product-specs"><div className="container product-specs-grid"><div><span className="eyebrow">PRODUCT DETAILS</span><h2>产品参数</h2><p>结构化字段方便后续对接产品资料库或内容管理系统。</p><div className="spec-table">{parameters.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div><aside><Info size={24} /><h3>注意事项</h3><ul><li>请严格按照正式包装标签和使用说明操作。</li><li>请置于儿童和宠物无法直接接触的位置。</li><li>避免接触眼睛，如有不适请停止使用并寻求专业建议。</li><li>不同材质首次使用前，建议先在不显眼处进行测试。</li></ul><small>具体注意事项将根据真实产品类型和法规要求更新。</small></aside></div></section>

  <section className="product-quality-detail"><div className="container"><div><FlaskConical size={29} /><span><small>QUALITY & RESEARCH</small><h2>从研发到品质，建立可信产品信息</h2></span></div><p>正式页面可补充配方理念、检测项目、质量标准、认证资料与可持续包装信息，并为相关文件提供下载入口。</p><Link className="button button-white" to="/development/quality">了解品质保障 <ArrowUpRight size={17} /></Link></div></section>

  <section className="section-space product-related"><div className="container"><SectionHeading eyebrow="RELATED CONTENT" title="相关产品与专业内容" text="将产品、品牌与健康生活知识连接起来，帮助用户获得完整信息。" /><div className="related-content-grid"><div><div className="related-block-head"><h3>同系列产品</h3><Link to={`/products/${item.series}`}>查看系列 <ArrowRight size={15} /></Link></div><div className="related-product-list">{relatedProducts.length ? relatedProducts.map((related) => <Link to={`/products/${related.series}/${related.slug}`} key={related.slug}><BottleVisual product={related} /><div><span>{related.tag}</span><h4>{related.name}</h4><small>{related.spec}</small></div><ArrowUpRight size={16} /></Link>) : <p>更多同系列产品将在资料确认后上线。</p>}</div></div><div><div className="related-block-head"><h3>宠物健康生活</h3><Link to="/pet-life">查看全部 <ArrowRight size={15} /></Link></div><div className="related-article-list">{relatedArticles.map((article) => <Link to={`/pet-life/${article.category}/${article.slug}`} key={article.slug}><span>{article.type}</span><h4>{article.title}</h4><small>{article.read}</small><BookOpen size={17} /></Link>)}</div></div></div></div></section><ContactBand title="需要获取完整产品资料？" text="联系我们，了解产品参数、合作方式与适用场景。" /></>;
}
