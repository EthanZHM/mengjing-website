import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Database,
  FlaskConical,
  Globe2,
  Handshake,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  cooperationTypes,
  detailPages,
  heroStats,
  honors,
  milestones,
  navigation,
  newsItems,
  productCategories,
  qualityFlow,
  roadmap,
  sectionMeta,
  values,
} from '../data/siteData';
import { ContactBand, PageHero, SectionHeading } from '../components/PageBlocks';
import { assetUrl, siteImages } from '../data/imageAssets';

function scrollToFragment(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

function PhotoSlot({ title = '企业影像', type = '品牌与产业现场', dark = false, image, eyebrow = 'XIDELIANG IMAGE' }) {
  return (
    <figure className={`corporate-photo-slot ${dark ? 'is-dark' : ''} ${image ? 'has-image' : ''}`}>
      {image && <img src={image.src} alt={image.alt} loading={dark ? 'eager' : 'lazy'} fetchPriority={dark ? 'high' : 'auto'} />}
      <figcaption>
        <span>{eyebrow}</span><strong>{title}</strong><small>{type}</small>
        {image?.credit && <em>{image.credit}</em>}
      </figcaption>
    </figure>
  );
}

function documentImage(number, alt) {
  return { src: assetUrl(`/content-images/image${number}.png`), alt, source: '用户提供文档《企业文化.docx》' };
}

function editorialImage(filename, alt) {
  return { src: assetUrl(`/editorial-images/${filename}`), alt };
}

const detailVisuals = {
  'about/profile': { image: editorialImage('office-collaboration.jpg', '中国现代企业办公空间与日常协作'), title: '从组织能力出发，建设长期品牌价值', type: '专业组织 · 协同经营 · 长期发展' },
  'about/mozi-culture': { image: siteImages.zaozhuangCity, title: '从枣庄文脉中提炼守信与实干', type: '墨子文化 · 尚贤理念 · 长期主义' },
  'about/five-values': { image: documentImage(13, '洗得亮清洁产品组合'), title: '让价值观落实到每一项产品与决策', type: '守信 · 守正 · 守质 · 守真 · 守新' },
  'about/listing-plan': { image: editorialImage('factory-electrical-line.jpg', '规范有序的现代自动化生产线'), title: '以清晰路线图走向规范化发展', type: '筑基固本 · 规模扩张 · 生态协同' },
  'about/party-talent': { image: editorialImage('chinese-dailychemical-team.png', '中国日化企业团队开展协作与人才交流'), title: '让人才成为企业长期成长的底座', type: '党建引领 · 专业人才 · 组织关怀' },
  'rnd/strategy': { image: editorialImage('chinese-green-strategy.png', '中国团队开展绿色战略规划与研讨'), title: '一个核心，两大引擎', type: '品牌引领 · 智能经营 · 绿色健康' },
  'rnd/pomegranate-bio': { image: siteImages.pomegranateFruit, title: '一颗石榴，连接区域资源与植物科技', type: '枣庄石榴产业资源 · 植物活性研究' },
  'rnd/production-bases': { image: editorialImage('factory-automation.jpg', '蓝色调现代自动化生产设备与产线'), title: '分期建设绿色日化生产能力', type: '自动化产线 · 柔性制造 · 稳定交付' },
  'rnd/green-manufacturing': { image: editorialImage('solar-factory.jpg', '铺设光伏设施的现代工厂建筑群'), title: '让绿色理念贯穿制造全流程', type: '清洁能源 · 节水低碳 · 绿色包装' },
  'rnd/supply-chain': { image: editorialImage('warehouse-racks.jpg', '规范整洁的现代仓储货架与物流通道'), title: '连接专业伙伴，建设韧性供应链', type: '绿色原料 · 仓储管理 · 稳定交付' },
  'quality/cnas-system': { image: siteImages.labScientist, title: '以检测能力支撑品质信任', type: '标准管理 · 检测验证 · 持续改进' },
  'quality/five-stage-qc': { image: editorialImage('lab-equipment-bench.jpg', '规范实验室中的检测仪器、试剂与样品工作台'), title: '五道关口，贯穿产品全生命周期', type: '研发 · 原料 · 生产 · 出厂 · 售后' },
  'quality/traceability': { image: editorialImage('lab-cold-storage.jpg', '实验人员规范取用留样与批次样品'), title: '让每一批产品有迹可循', type: '留样管理 · 批次追溯 · 快速定位' },
  'quality/compliance': { image: siteImages.labPipette, title: '以合规边界守护品牌信誉', type: '资质文件 · 执行标准 · 信息审核' },
  'quality/esg': { image: editorialImage('green-plant.jpg', '自然光下生长的绿色植物'), title: '把可持续理念落实到长期行动', type: '环境责任 · 员工成长 · 透明治理' },
};

function getDetailVisual(section, slug) {
  return detailVisuals[`${section}/${slug}`] || { image: documentImage(28, '洗得亮品牌资料形象'), title: '扎根枣庄，面向绿色产业未来', type: '区域产业与企业长期战略' };
}

// 各栏目子页对应的主题配图(用于首页/栏目页的卡片,与详情页大图保持一致的语义)
const pillarImages = {
  'about/profile': editorialImage('office-collaboration.jpg', '企业组织与团队协作'),
  'about/mozi-culture': editorialImage('zaozhuang-city.jpg', '枣庄城市与墨子文化根脉'),
  'about/five-values': editorialImage('chinese-dailychemical-team.png', '团队以五守价值观协同'),
  'about/listing-plan': editorialImage('factory-electrical-line.jpg', '现代化产线与十年规划'),
  'about/party-talent': editorialImage('chinese-dailychemical-team.png', '中国日化企业团队协作与人才交流'),
  'rnd/strategy': editorialImage('chinese-green-strategy.png', '中国团队开展绿色战略规划与研讨'),
  'rnd/pomegranate-bio': editorialImage('lab-glassware.jpg', '植物原料配方研发'),
  'rnd/production-bases': editorialImage('factory-automation.jpg', '自动化生产基地'),
  'rnd/green-manufacturing': editorialImage('solar-factory.jpg', '绿色智造与清洁能源'),
  'rnd/supply-chain': editorialImage('warehouse-racks.jpg', '仓储与供应链协同'),
  'quality/cnas-system': editorialImage('chinese-dailychemical-lab.png', '中国实验室团队开展品质检测'),
  'quality/five-stage-qc': editorialImage('lab-equipment-bench.jpg', '实验室五道分段质检'),
  'quality/traceability': editorialImage('lab-cold-storage.jpg', '留样与批次追溯'),
  'quality/compliance': editorialImage('laboratory-quality.jpg', '实验室合规检测'),
  'quality/esg': editorialImage('green-plant.jpg', '绿色可持续发展'),
};

function imageForPath(path) {
  const parts = String(path).split('/').filter(Boolean);
  return pillarImages[`${parts[0]}/${parts[1]}`];
}

// 详情页布局分配:打破“导语+三张卡+一张大图”的单一模板
const detailLayouts = {
  'about/mozi-culture': 'image-first',
  'about/five-values': 'values',
  'about/listing-plan': 'timeline',
  'about/party-talent': 'image-first',
  'rnd/strategy': 'image-first',
  'rnd/pomegranate-bio': 'image-first',
  'rnd/production-bases': 'timeline',
  'quality/five-stage-qc': 'flow',
  'quality/traceability': 'flow',
  'quality/esg': 'image-first',
};

function DetailBody({ layout, item, visual }) {
  if (layout === 'values') {
    return (
      <section id="system" className="five-values-block">
        <div className="five-values-row">
          {item.points.map(([title, text], index) => (
            <div key={title}><span className="five-value-no">{String(index + 1).padStart(2, '0')}</span><strong>{title}</strong><p>{text}</p></div>
          ))}
        </div>
      </section>
    );
  }
  if (layout === 'timeline') {
    return (
      <>
        <PhotoSlot image={visual.image} title={visual.title} type={visual.type} eyebrow={item.eyebrow} />
        <section id="system" className="detail-timeline">
          {item.points.map(([title, text], index) => (
            <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></div>
          ))}
        </section>
      </>
    );
  }
  if (layout === 'flow') {
    return (
      <>
        <section id="system" className="detail-flow">
          {qualityFlow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></div>)}
        </section>
        <PhotoSlot image={visual.image} title={visual.title} type={visual.type} eyebrow={item.eyebrow} />
      </>
    );
  }
  if (layout === 'image-first') {
    return (
      <>
        <PhotoSlot image={visual.image} title={visual.title} type={visual.type} eyebrow={item.eyebrow} />
        <section id="system" className="corp-detail-points">
          {item.points.map(([title, text], index) => <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></div>)}
        </section>
      </>
    );
  }
  return (
    <>
      <section id="system" className="corp-detail-points">
        {item.points.map(([title, text], index) => <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></div>)}
      </section>
      <PhotoSlot image={visual.image} title={visual.title} type={visual.type} eyebrow={item.eyebrow} />
    </>
  );
}

const productVisuals = {
  'fabric-care': documentImage(16, '洗得亮家用织物洗护产品'),
  'kitchen-bath': documentImage(17, '洗得亮厨卫清洁产品'),
  'personal-care': { ...siteImages.naturalHandwash, alt: '洗得亮个人护理与温和洁净场景' },
  'commercial-custom': editorialImage('warehouse-boxes.jpg', '洗得亮商用清洁产品仓储与交付'),
};

function ProductVisual({ category }) {
  return <PhotoSlot image={productVisuals[category.slug]} title={`${category.title} · 清洁护理产品方向`} type="绿色健康 · 场景细分 · 品质管理" eyebrow="PRODUCT PORTFOLIO" />;
}

const newsVisuals = {
  'green-project': editorialImage('warehouse-boxes.jpg', '现代绿色日化项目仓储与交付空间'),
  'strategy-2035': editorialImage('chinese-green-strategy.png', '中国企业团队研讨绿色产业长期发展战略'),
  'pomegranate-bio': editorialImage('lab-glassware.jpg', '实验室中的植物原料配方与烧杯样品'),
  'belt-road': documentImage(20, '洗得亮家居清洁产品'),
};

function PillarCard({ icon: Icon, title, text, path, image }) {
  return (
    <Link className="corp-pillar-card" to={path}>
      {image && <div className="pillar-card-media"><img src={image.src} alt={image.alt || title} loading="lazy" /></div>}
      <div className="pillar-card-body">
        <Icon size={24} />
        <h3>{title}</h3>
        <p>{text}</p>
        <span>查看详情 <ArrowUpRight size={15} /></span>
      </div>
    </Link>
  );
}

function productCover(slug) {
  return productVisuals[slug] || documentImage(28, '洗得亮产品');
}

function ProductTile({ item, active = false, showTags = false }) {
  const cover = productCover(item.slug);
  return (
    <Link className={`corp-product-card ${active ? 'active' : ''}`} to={`/products/${item.slug}`}>
      <div className="corp-product-media"><img src={cover.src} alt={cover.alt || item.title} loading="lazy" /></div>
      <div className="corp-product-body">
        <small>{item.en}</small>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        {showTags && <div className="corp-product-tags">{item.products.slice(0, 3).map((product) => <span key={product}>{product}</span>)}</div>}
        <div className="corp-product-foot"><strong>{item.scene}</strong><ArrowUpRight size={18} /></div>
      </div>
    </Link>
  );
}

export function CorporateHomePage() {
  return (
    <>
      <section className="corp-hero">
        <div className="corp-hero-bg" />
        <div className="container corp-hero-inner">
          <div>
            <span className="corp-kicker">山东洗得亮科技 · 绿色日化实业</span>
            <h1>以绿色科技<br />洗亮美好生活</h1>
            <p>山东洗得亮科技公司立足山东滕州，依托枣庄石榴植物原料，围绕家用织物洗护、厨卫清洁、个人护理与商用定制，持续推进产品创新、品质建设、绿色制造与数智经营。</p>
            <div className="corp-hero-actions">
              <Link className="button button-primary" to="/products">查看产品矩阵 <ArrowUpRight size={17} /></Link>
              <Link className="button button-secondary" to="/cooperation">合作招商</Link>
              <Link className="corp-text-action" to="/about/listing-plan">了解十年规划 <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="corp-hero-visual">
            <PhotoSlot image={siteImages.pomegranateOrchard} title="扎根枣庄，向绿色日化产业深处生长" type="冠世榴园所在的枣庄峄城区石榴产业带" eyebrow="ROOTED IN ZAOZHUANG" dark />
            <div className="corp-hero-proof">
              <span>BUSINESS POSITION</span>
              <strong>民族日化 · 绿色智造 · 数智经营</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="corp-stat-strip">
        <div className="container">
          {heroStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section-space corp-product-home">
        <div className="container">
          <SectionHeading eyebrow="PRODUCT MATRIX" title="家用与商用双场景产品矩阵" text="围绕石榴植物原料、绿色配方与国货科技差异化，构建可持续扩展的产品组合。" action={{ label: '进入产品中心', path: '/products' }} />
          <div className="corp-product-grid" data-reveal>
            {productCategories.map((item) => <ProductTile key={item.slug} item={item} />)}
          </div>
        </div>
      </section>

      <section className="pomegranate-story">
        <div className="container pomegranate-story-inner">
          <div className="pomegranate-visual" data-reveal>
            <PhotoSlot image={siteImages.pomegranateFruit} title="一颗石榴，连接区域资源与绿色洗护" type="石榴皮多酚 · 石榴籽油 · 护色抗氧化" eyebrow="POMEGRANATE BIO-TECH" />
          </div>
          <div className="pomegranate-copy" data-reveal>
            <span className="eyebrow">POMEGRANATE BIO-TECH</span>
            <h2>“石榴+”生物科技平台</h2>
            <p>依托枣庄石榴产业资源，联合枣庄学院共建“石榴活性物提取与应用联合实验室”，聚焦石榴皮多酚、石榴籽油在护色、抗氧化、抗菌等方向的应用研究，让区域特色原料成为国货日化的差异化科技。</p>
            <ul className="pomegranate-points">
              <li>石榴酵素洗衣液</li>
              <li>石榴多酚护色精华</li>
              <li>从果园到工厂的直供链路</li>
            </ul>
            <Link className="button button-primary" to="/rnd/pomegranate-bio">了解石榴生物技术 <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section-space corp-capability-home">
        <div className="container">
          <SectionHeading eyebrow="CORE CAPABILITY" title="研发智造与品质管控的双重保障" text="以植物原料与数智工厂驱动创新，以全链路质控守住每一批产品的品质底线。" />
          <div className="capability-duo" data-reveal>
            <Link className="capability-card" to="/rnd">
              <span className="capability-icon"><FlaskConical size={26} /></span>
              <h3>研发智造</h3>
              <p>以“1+2”战略为牵引，围绕石榴植物原料、绿色配方、自动化生产和供应链协同，持续构建国货日化的科技差异化。</p>
              <strong>了解研发智造 <ArrowUpRight size={15} /></strong>
            </Link>
            <Link className="capability-card" to="/quality">
              <span className="capability-icon"><ShieldCheck size={26} /></span>
              <h3>品质管控</h3>
              <p>五道分段质检与一物一码溯源，覆盖研发、原料、生产、出厂到售后闭环，让每一批产品有标准、可追溯。</p>
              <strong>了解品质管控 <ArrowUpRight size={15} /></strong>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space corp-values-home">
        <div className="container">
          <SectionHeading eyebrow="CORE VALUES" title="守信 · 守正 · 守质 · 守真 · 守新" text="以“五守”价值观为经营准则，落实到产品、管理与合作之中。" action={{ label: '了解五守价值观', path: '/about/five-values' }} />
          <div className="five-values-row" data-reveal>
            {values.map(([title, text], index) => (
              <div key={title}>
                <span className="five-value-no">{String(index + 1).padStart(2, '0')}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space corp-roadmap-home">
        <div className="container">
          <SectionHeading eyebrow="PRODUCTION ROADMAP" title="一至三期绿色智造基地规划" text="以新型高效洗衣液为一期标杆，逐步拓展厨卫家居、个人护理与 GMP 级生产能力。" action={{ label: '了解研发智造', path: '/rnd/production-bases' }} />
          <div className="corp-roadmap-grid" data-reveal>
            {roadmap.map(([phase, title, land, text]) => <div key={phase}><span>{phase}</span><h3>{title}</h3><p>{text}</p><small>规划用地：{land}</small></div>)}
          </div>
        </div>
      </section>

      <section className="corp-quality-band">
        <div className="container corp-two-col" data-reveal>
          <div>
            <span className="eyebrow light">QUALITY TRACEABILITY</span>
            <h2>全链路品质管控与一物一码溯源</h2>
            <p>从原料入厂、配方验证、生产过程、成品放行到流通售后，建立可查、可追、可改进的质量闭环。</p>
            <Link className="button button-white" to="/quality">了解品质管控 <ArrowUpRight size={17} /></Link>
          </div>
          <div className="corp-flow" data-reveal>
            {qualityFlow.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="LATEST NEWS" title="品牌动态与发展记录" text="记录企业战略、产品研发、产业建设与市场拓展中的重要进展。" action={{ label: '全部动态', path: '/news' }} />
          <NewsList compact />
        </div>
      </section>

      <ContactBand title="携手伙伴，共建绿色日化产业生态" text="面向经销加盟、商用定制、供应链协同与产业合作，持续拓展长期合作空间。" />
    </>
  );
}

export function SectionLanding({ section }) {
  const meta = sectionMeta[section] || sectionMeta.about;
  const nav = navigation.find((item) => item.path === `/${section}`);
  const iconMap = [Building2, Sparkles, FlaskConical, ShieldCheck, Database, Globe2];
  const landingIntro = {
    about: '从企业概况、墨子文化与五守价值观出发，理解洗得亮的组织根基与长期发展方向。',
    rnd: '围绕“1+2”战略、石榴生物技术、生产基地与供应链，理解研发智造如何支撑产品迭代与品牌成长。',
    quality: '从品质体系、分段质检、一物一码溯源、合规到 ESG，了解洗得亮如何把品质落到每一个环节。',
    cooperation: '面向经销商、商用客户、供应链伙伴与投资者，了解开放协同的合作方式。',
  }[section] || '以清晰、克制、可追溯的信息结构，呈现企业核心能力与长期行动。';
  return (
    <>
      <PageHero {...meta} tone={section === 'quality' ? 'forest' : section === 'cooperation' ? 'sand' : 'green'} />
      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow={meta.eyebrow} title={meta.statement} text={landingIntro} />
          <div className="corp-card-grid" data-reveal>
            {nav.children.map(([label, path], index) => {
              const Icon = iconMap[index % iconMap.length];
              return <PillarCard key={path} icon={Icon} title={label} text={`了解洗得亮在“${label}”方向的理念、体系与长期行动。`} path={path} image={imageForPath(path)} />;
            })}
          </div>
        </div>
      </section>
      {section === 'about' && (
        <section className="section-space corp-section-muted">
          <div className="container">
            <SectionHeading eyebrow="FIVE VALUES" title="守信 · 守正 · 守质 · 守真 · 守新" text="以“五守”价值观为经营准则，落实到产品、管理与合作之中。" />
            <div className="five-values-row" data-reveal>
              {values.map(([title, text], index) => (
                <div key={title}>
                  <span className="five-value-no">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <Link className="text-link five-values-more" to="/about/five-values">深入了解五守价值观 <ArrowRight size={16} /></Link>
          </div>
        </section>
      )}
      {section === 'about' && (
        <section className="section-space honor-section">
          <div className="container">
            <SectionHeading eyebrow="HONORS & CREDENTIALS" title="荣誉与资质" text="以诚信经营、品质管理与社会责任，持续获得多方认可。" />
            <div className="honor-strip" data-reveal>
              {honors.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </section>
      )}
      {section === 'rnd' && (
        <section className="section-space corp-section-muted">
          <div className="container">
            <SectionHeading eyebrow="PRODUCTION ROADMAP" title="一至三期绿色智造基地规划" text="以新型高效洗衣液为一期标杆，逐步拓展厨卫家居、个人护理与 GMP 级生产能力。" action={{ label: '查看研发智造', path: '/rnd/production-bases' }} />
            <div className="corp-roadmap-grid" data-reveal>
              {roadmap.map(([phase, title, land, text]) => <div key={phase}><span>{phase}</span><h3>{title}</h3><p>{text}</p><small>规划用地：{land}</small></div>)}
            </div>
          </div>
        </section>
      )}
      {section === 'quality' && (
        <section className="corp-quality-band">
          <div className="container corp-two-col" data-reveal>
            <div>
              <span className="eyebrow light">FIVE-STAGE QC</span>
              <h2>五道分段质检，贯穿产品全生命周期</h2>
              <p>从研发定型、原料入厂、生产过程、成品放行到市场反馈，建立可查、可追、可改进的质量闭环。</p>
              <Link className="button button-white" to="/quality/five-stage-qc">了解五道质检 <ArrowUpRight size={17} /></Link>
            </div>
            <div className="corp-flow" data-reveal>
              {qualityFlow.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</div>)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function DetailPage({ section }) {
  const { slug } = useParams();
  const item = detailPages[`${section}/${slug}`] || detailPages['about/profile'];
  const visual = getDetailVisual(section, slug);
  const layout = detailLayouts[`${section}/${slug}`] || 'standard';
  return (
    <>
      <PageHero eyebrow={item.eyebrow} title={item.title} intro={item.lead} tone={section === 'quality' ? 'forest' : 'green'} crumbs={[{ label: sectionMeta[section]?.title || '栏目', path: `/${section}` }]} />
      <section className="section-space">
        <div className="container corp-detail-layout">
          <aside>
            <span className="eyebrow">ON THIS PAGE</span>
            <a href="#overview" onClick={(event) => scrollToFragment(event, 'overview')}>内容概览</a>
            <a href="#system" onClick={(event) => scrollToFragment(event, 'system')}>核心体系</a>
            {section === 'about' && slug === 'profile' && <a href="#history" onClick={(event) => scrollToFragment(event, 'history')}>发展历程</a>}
            <Link to="/contact">合作联系 <ArrowUpRight size={14} /></Link>
          </aside>
          <article>
            <section id="overview" className="corp-detail-lead">
              <h2>{item.title}</h2>
              <p>{item.lead}</p>
            </section>
            <DetailBody layout={layout} item={item} visual={visual} />
            {section === 'about' && slug === 'profile' && (
              <section id="history" className="milestone-timeline">
                <span className="eyebrow">MILESTONES</span>
                <h3>发展历程</h3>
                <div className="milestone-list">
                  {milestones.map(([time, text]) => <div key={time}><strong>{time}</strong><p>{text}</p></div>)}
                </div>
              </section>
            )}
          </article>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function ProductsPage() {
  const { category } = useParams();
  const active = productCategories.find((item) => item.slug === category);
  return (
    <>
      <PageHero {...sectionMeta.products} />
      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="PRODUCT ARCHITECTURE" title="四大产品方向，覆盖家庭与商用清洁场景" text="从织物洗护到厨卫清洁、个人护理与商用定制，以使用场景组织清晰的产品矩阵。" />
          <div className="corp-product-grid" data-reveal>
            {productCategories.map((item) => <ProductTile key={item.slug} item={item} active={active?.slug === item.slug} showTags />)}
          </div>
        </div>
      </section>
      {active && (
        <section className="section-space corp-section-muted">
          <div className="container corp-two-col" data-reveal>
            <div>
              <span className="eyebrow">{active.en}</span>
              <h2>{active.title}</h2>
              <p>{active.summary}</p>
              <div className="corp-tag-list">{active.products.map((product) => <span key={product}>{product}</span>)}</div>
              <Link className="button button-primary" to="/cooperation">了解合作方式 <ArrowUpRight size={17} /></Link>
            </div>
            <ProductVisual category={active} />
          </div>
        </section>
      )}
    </>
  );
}

function NewsList({ compact = false }) {
  const list = newsItems;
  return (
    <div className={`corp-news-list ${compact ? 'is-compact' : ''}`} data-reveal>
      {list.map((item) => {
        const thumb = newsVisuals[item.slug];
        return (
          <Link to={`/news/${item.slug}`} key={item.slug}>
            <div className="news-thumb">{thumb && <img src={thumb.src} alt={thumb.alt || item.title} loading="lazy" />}</div>
            <div className="news-meta"><time>{item.date}</time><span>{item.category}</span></div>
            <div className="news-text"><h3>{item.title}</h3><p>{item.summary}</p></div>
            <ArrowUpRight className="news-arrow" size={18} />
          </Link>
        );
      })}
    </div>
  );
}

export function NewsPage() {
  const { slug } = useParams();
  const item = newsItems.find((entry) => entry.slug === slug);
  if (item) {
    return (
      <>
        <PageHero eyebrow={item.category || 'NEWS'} title={item.title} intro={item.summary} tone="blue" crumbs={[{ label: '品牌动态', path: '/news' }]} />
        <section className="section-space">
          <div className="container corp-detail-layout">
            <aside><span className="eyebrow">NEWS INFO</span><a href="#content" onClick={(event) => scrollToFragment(event, 'content')}>内容概览</a><a href="#direction" onClick={(event) => scrollToFragment(event, 'direction')}>发展方向</a><Link to="/news">返回动态 <ArrowUpRight size={14} /></Link></aside>
            <article>
              <section id="content" className="corp-detail-lead"><h2>{item.title}</h2><p>{item.summary}</p><div className="corp-caution"><CheckCircle2 size={18} />发布日期：{item.date}</div></section>
              <PhotoSlot image={newsVisuals[item.slug] || documentImage(24, '洗得亮企业新闻形象')} title="企业发展与产业动态" type="绿色健康 · 产品创新 · 长期发展" eyebrow="NEWSROOM" />
              <section id="direction" className="corp-template"><h3>发展方向</h3><p>{item.detail || item.summary}</p></section>
            </article>
          </div>
        </section>
        <section className="section-space corp-section-muted corp-news-related">
          <div className="container">
            <SectionHeading eyebrow="MORE NEWS" title="更多品牌动态" />
            <div className="news-related-list">
              {newsItems.filter((entry) => entry.slug !== slug).map((entry) => (
                <Link to={`/news/${entry.slug}`} key={entry.slug}>
                  <span>{entry.category}</span>
                  <strong>{entry.title}</strong>
                  <time>{entry.date}</time>
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <PageHero {...sectionMeta.news} tone="blue" />
      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="NEWSROOM" title="企业发展、产品创新与品牌动态" text="记录洗得亮在绿色日化、研发制造、品质建设与市场拓展中的长期行动。" />
          <NewsList />
        </div>
      </section>
    </>
  );
}

export function CooperationPage() {
  const { type } = useParams();
  const active = cooperationTypes.find((item) => item.slug === type);
  return (
    <>
      <PageHero {...sectionMeta.cooperation} tone="sand" />
      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="COOPERATION ENTRANCE" title="经销、商用定制、投资者咨询三类合作方向" text="面向不同伙伴提供清晰的合作内容，共同拓展绿色日化产业的长期价值。" />
          <div className="corp-coop-grid" data-reveal>
            {cooperationTypes.map((item) => <Link className={active?.slug === item.slug ? 'active' : ''} to={`/cooperation/${item.slug}`} key={item.slug}><Handshake size={24} /><h3>{item.title}</h3><p>{item.summary}</p><span>了解合作方向 <ArrowRight size={15} /></span></Link>)}
          </div>
        </div>
      </section>
      <section className="section-space corp-section-muted">
        <div className="container corp-coop-detail">
          <div>
            <span className="eyebrow">{active ? active.title : 'COOPERATION'}</span>
            <h2>{active ? active.title : '选择合作方向'}</h2>
            <p>{active ? active.summary : '请选择经销商加盟、商用定制或投资者咨询方向，查看对应合作要点。'}</p>
            {active && <div className="corp-tag-list">{active.fields.map((field) => <span key={field}>{field}</span>)}</div>}
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT US" title="合作联系" intro="围绕经销加盟、商用定制、供应链协同与产业合作，了解洗得亮的合作方向。" />
      <section className="section-space">
        <div className="container corp-contact-simple">
          <div>
            <span className="eyebrow">XIDELIANG CONTACT</span>
            <h2>选择适合您的合作方向</h2>
            <div className="corp-contact-list">
              <div><strong>经销加盟</strong><span>区域经销、商超便利、电商平台与社区渠道合作</span><Link to="/cooperation/dealer">查看方向 <ArrowUpRight size={15} /></Link></div>
              <div><strong>商用定制</strong><span>酒店、洗衣工厂、学校医院后勤与物业清洁方案</span><Link to="/cooperation/commercial">查看方向 <ArrowUpRight size={15} /></Link></div>
              <div><strong>产业合作</strong><span>绿色原料、生产设备、包装材料与供应链协同</span><Link to="/rnd/supply-chain">了解体系 <ArrowUpRight size={15} /></Link></div>
              <div><strong>投资者沟通</strong><span>围绕企业战略、产业布局与长期发展开展交流</span><Link to="/cooperation/investor">查看方向 <ArrowUpRight size={15} /></Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
