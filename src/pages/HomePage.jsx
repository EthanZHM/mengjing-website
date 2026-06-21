import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, FlaskConical, Handshake, Headphones, Leaf, PackageSearch, ShieldCheck, Sparkles } from 'lucide-react';
import { articles, brands, newsItems, productSeries } from '../data/siteData';
import { SectionHeading, VisualPlaceholder } from '../components/PageBlocks';

const capabilities = [
  { icon: Sparkles, no: '01', title: '发展战略', text: '以长期主义构建多品牌、多品类协同发展的业务布局。', path: '/development/strategy' },
  { icon: Leaf, no: '02', title: '绿色环保', text: '从原料、生产到包装，持续减少对环境的影响。', path: '/development/green' },
  { icon: FlaskConical, no: '03', title: '科技研发', text: '围绕真实护理需求，建立专业配方与检测能力。', path: '/development/research' },
  { icon: ShieldCheck, no: '04', title: '品质保障', text: '让严格标准贯穿产品全生命周期。', path: '/development/quality' },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid" /><div className="hero-glow" />
        <div className="container home-hero-inner">
          <div className="home-hero-copy">
            <span className="hero-positioning">宠物护理 · 家居清洁 · 绿色生活</span>
            <span className="eyebrow">MENGJING GROUP · 萌净集团</span>
            <h1>洁净每一次<br /><em>陪伴</em></h1>
            <p>萌净是一家围绕宠物清洁、健康生活与绿色家居打造的集团型品牌企业。以专业研发和可信品质，守护人与宠物共同生活的每一处空间。</p>
            <div className="hero-actions"><Link className="button button-primary" to="/about">了解萌净 <ArrowUpRight size={17} /></Link><Link className="button button-secondary" to="/products">探索产品</Link><Link className="hero-business-link" to="/cooperation">商务合作 <ArrowRight size={16} /></Link></div>
            <div className="hero-scope" aria-label="集团业务范围"><span>01 <b>宠物清洁护理</b></span><span>02 <b>健康生活内容</b></span><span>03 <b>绿色家居方案</b></span></div>
          </div>
          <div className="hero-scene" aria-label="人与宠物洁净生活视觉示意">
            <div className="scene-caption"><span>GROUP VISION</span><p>人与宠物<br />友好共生</p></div>
            <div className="scene-orbit"><i /><i /><i /></div>
            <div className="pet-shape"><span /><span /></div>
            <div className="plant-shape"><i /><i /><i /></div>
            <div className="scene-proof"><small>OUR APPROACH</small><strong>温和护理 × 绿色科技</strong><span>专业研发与全链路品质管理</span></div>
          </div>
          <a className="scroll-cue" href="#intro"><ArrowDown size={16} />向下探索</a>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><small>BRANDS</small><strong>4</strong><span>多元品牌协同发展</span></div><div><small>PRODUCT LINES</small><strong>7</strong><span>专业产品系列布局</span></div><div><small>QUALITY</small><strong>全链路</strong><span>研发与品质管理</span></div><div><small>RESPONSIBILITY</small><strong>长期</strong><span>绿色责任持续投入</span></div>
        </div>
      </section>

      <section className="section-space intro-section" id="intro">
        <div className="container split-layout">
          <div className="intro-copy"><SectionHeading eyebrow="ABOUT MENGJING" title={<>围绕宠物与家庭，<br />创造更健康的洁净生活</>} text="萌净以宠物清洁护理为起点，持续拓展家居清洁、绿色生产与健康生活服务，构建人与宠物友好共生的集团品牌体系。" /><div className="intro-business-grid"><div><Building2 size={19} /><span>集团化发展</span><p>多品牌协同与长期业务布局</p></div><div><FlaskConical size={19} /><span>专业化能力</span><p>研发、生产与品质体系支撑</p></div><div><Leaf size={19} /><span>可持续价值</span><p>绿色生产与社会责任实践</p></div></div><Link className="text-link" to="/about">走进萌净 <ArrowRight size={17} /></Link></div>
          <div className="intro-visual-wrap"><VisualPlaceholder label="集团与宠物生活场景示意" variant="pet" tall /><div className="floating-note"><span>OUR BELIEF</span><strong>专业 · 温和<br />自然 · 可信</strong></div><div className="intro-index"><span>GROUP PROFILE</span><b>从产品出发<br />向生活方式延伸</b></div></div>
        </div>
      </section>

      <section className="section-space capability-section">
        <div className="container">
          <SectionHeading eyebrow="OUR CAPABILITIES" title="长期投入，沉淀可靠能力" text="从战略布局到研发创新，从绿色生产到品质管理，建立贯穿产品全生命周期的发展体系。" action={{ label: '了解企业发展', path: '/development' }} />
          <div className="capability-focus-grid">
            <Link className="capability-feature" to={capabilities[2].path}><div><span>CORE CAPABILITY · 03</span><FlaskConical size={30} /></div><div><small>科技研发</small><h3>让每一项创新，<br />回应真实生活需求</h3><p>{capabilities[2].text} 通过专业配方、场景研究与规范检测，将温和体验和清洁效率落实到产品。</p><strong>了解研发体系 <ArrowUpRight size={18} /></strong></div><div className="research-graphic"><i /><i /><i /></div></Link>
            <div className="capability-stack">{capabilities.filter((_, index) => index !== 2).map(({ icon: Icon, ...item }) => <Link to={item.path} key={item.title}><span>{item.no}</span><Icon size={23} /><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight size={18} /></Link>)}</div>
          </div>
        </div>
      </section>

      <section className="section-space products-section">
        <div className="container"><SectionHeading eyebrow="PRODUCT MATRIX" title="覆盖宠物与家庭的洁净产品矩阵" text="以不同使用场景为线索，让专业产品回应每一种具体生活需求。" action={{ label: '查看全部产品', path: '/products' }} />
          <div className="product-showcase">
            <div className="product-stage"><span className="eyebrow">PET CARE SOLUTIONS</span><h3>从宠物护理到家庭洁净</h3><p>围绕洗护、除味、消毒清洁与用品清洗，构建覆盖人宠共居空间的专业产品体系。</p><div className="product-stage-tags"><span>宠物护理 4 类</span><span>家居清洁 3 类</span></div><div className="bottle bottle-one"><i /></div><div className="bottle bottle-two"><i /></div><div className="stage-leaf" /><Link to="/contact" className="stage-consult">产品与渠道咨询 <ArrowUpRight size={16} /></Link></div>
            <div className="product-series-panel"><div className="product-series-head"><div><small>BROWSE BY SERIES</small><strong>按产品系列浏览</strong></div><span>7 个专业系列</span></div><div className="product-series-list">{productSeries.map((series) => <Link to={series.path} key={series.path}><span>{series.number}</span><div><h3>{series.title}</h3><p>{series.summary}</p></div><ArrowUpRight size={19} /></Link>)}</div></div>
          </div>
        </div>
      </section>

      <section className="section-space brands-section">
        <div className="container"><SectionHeading eyebrow="BRAND FAMILY" title="多元品牌，共同服务美好生活" text="面向不同人群与清洁场景，构建各具定位、协同发展的品牌家族。" />
          <div className="brand-grid">{brands.map((brand, index) => <Link className={`brand-card brand-${brand.color} ${index === 0 ? 'brand-featured' : ''}`} to={`/brands/${brand.slug}`} key={brand.slug}><span>0{index + 1}</span><div className="brand-monogram">{brand.name.slice(0, 1)}</div><div><small>{brand.en}</small><h3>{brand.name}</h3><p>{brand.positioning}</p>{index === 0 && <b>集团核心宠护品牌</b>}</div><ArrowUpRight size={20} /></Link>)}</div>
        </div>
      </section>

      <section className="section-space knowledge-section">
        <div className="container"><SectionHeading eyebrow="PET WELLNESS" title="懂清洁，也更懂宠物生活" text="分享科学、易懂、可实践的宠物洗护知识和家庭清洁方法。" action={{ label: '探索健康生活', path: '/pet-life' }} />
          <div className="knowledge-grid"><Link className="featured-article" to={`/pet-life/${articles[0].category}/${articles[0].slug}`}><VisualPlaceholder label="宠物洗护知识图片示意" variant="pet" /><div><span>{articles[0].type} · {articles[0].read}</span><h3>{articles[0].title}</h3><p>从宠物类型、生活环境和季节变化出发，找到更合适的洗护节奏。</p></div></Link><div className="article-list">{articles.slice(1).map((article) => <Link to={`/pet-life/${article.category}/${article.slug}`} key={article.slug}><span>{article.type}</span><h3>{article.title}</h3><div>{article.date}<ArrowUpRight size={17} /></div></Link>)}</div></div>
        </div>
      </section>

      <section className="responsibility-home">
        <div className="container responsibility-inner"><div><span className="eyebrow light">OUR RESPONSIBILITY</span><h2>为每一个生命，<br />也为共同生活的环境</h2><p>持续关注流浪动物关爱、公益救助、绿色生产与环保包装，让洁净生活拥有更长远的价值。</p><div className="responsibility-commitment"><Leaf size={22} /><span><small>LONG-TERM COMMITMENT</small><b>把环保理念落实到产品全生命周期</b></span></div><Link className="button button-white" to="/responsibility">了解社会责任 <ArrowUpRight size={17} /></Link></div><div className="responsibility-points"><Link to="/responsibility/animal-care"><span>01</span><div><strong>流浪动物关爱</strong><small>关注生命处境，支持持续救助与科学养护</small></div><ArrowUpRight /></Link><Link to="/responsibility/green-production"><span>02</span><div><strong>绿色生产</strong><small>从原料、能源与流程中减少环境负担</small></div><ArrowUpRight /></Link><Link to="/responsibility/eco-packaging"><span>03</span><div><strong>环保包装</strong><small>探索减量、可回收与更友好的包装方案</small></div><ArrowUpRight /></Link></div></div>
      </section>

      <section className="section-space news-section"><div className="container"><SectionHeading eyebrow="LATEST NEWS" title="萌净新动态" text="了解集团发展、品牌行动、产品创新与行业观察。" action={{ label: '查看全部资讯', path: '/news' }} /><div className="home-news-layout"><Link className="home-news-lead" to={`/news/${newsItems[0].category}/${newsItems[0].slug}`}><VisualPlaceholder label="绿色生产新闻影像" variant="green" /><div><span>{newsItems[0].type} · {newsItems[0].date}</span><h3>{newsItems[0].title}</h3><p>{newsItems[0].summary}</p><strong>阅读新闻 <ArrowRight size={16} /></strong></div></Link><div className="home-news-list">{newsItems.slice(1).map((news) => <Link to={`/news/${news.category}/${news.slug}`} key={news.slug}><div><span>{news.type}</span><time dateTime={news.date.replaceAll('.', '-')}>{news.date}</time></div><h3>{news.title}</h3><p>{news.summary}</p><ArrowUpRight size={18} /></Link>)}</div></div></div></section>

      <section className="join-strip"><div className="container"><div><span className="eyebrow">JOIN MENGJING</span><h2>和我们一起，让陪伴更洁净美好</h2></div><p>在萌净，与热爱宠物、关注健康生活的人共同成长。</p><Link className="button button-secondary" to="/careers/jobs">查看招聘岗位 <ArrowUpRight size={17} /></Link></div></section>
      <section className="home-contact"><div className="container"><div className="home-contact-intro"><span className="eyebrow light">LET'S CONNECT</span><h2>让一次联系，<br />成为长期合作的开始</h2><p>无论是产品与渠道、品牌与市场，还是人才加入，我们都为您提供清晰的沟通入口。</p><Link className="button button-white" to="/contact">联系我们 <ArrowUpRight size={17} /></Link></div><div className="home-contact-options"><Link to="/cooperation"><Handshake size={24} /><span>BUSINESS</span><h3>商务合作</h3><p>渠道、品牌、供应链与技术合作</p><ArrowUpRight /></Link><Link to="/products"><PackageSearch size={24} /><span>PRODUCTS</span><h3>产品咨询</h3><p>产品资料、应用场景与合作政策</p><ArrowUpRight /></Link><Link to="/careers/jobs"><Headphones size={24} /><span>CAREERS</span><h3>加入萌净</h3><p>开放岗位、人才理念与招聘咨询</p><ArrowUpRight /></Link></div></div></section>
    </>
  );
}
