import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { articles, brands, jobs, navigation, newsItems, products, responsibilityPrograms, sectionMeta } from '../data/siteData';

const defaultDescription = '萌净集团围绕宠物清洁、健康生活与绿色家居，持续建设专业产品、品牌与服务体系。';

function findMeta(pathname) {
  if (pathname === '/') return { title: '萌净集团｜洁净每一次陪伴', description: defaultDescription, type: 'website' };

  if (pathname === '/privacy') return { title: '隐私政策｜萌净集团', description: '萌净集团网站隐私政策。', type: 'website', robots: 'noindex,follow' };
  if (pathname === '/legal') return { title: '法律声明｜萌净集团', description: '萌净集团网站法律声明。', type: 'website', robots: 'noindex,follow' };

  const parts = pathname.split('/').filter(Boolean);
  const section = parts[0];
  const sectionInfo = sectionMeta[section];
  const knownStandalone = ['/contact', '/cooperation'];
  if (!sectionInfo && !knownStandalone.includes(pathname)) return { title: '页面未找到｜萌净集团', description: '您访问的页面不存在或已移动。', type: 'website', robots: 'noindex,follow' };
  let title = sectionInfo?.title || '萌净集团';
  let description = sectionInfo?.intro || defaultDescription;
  let type = 'website';

  const navChild = navigation.flatMap((item) => item.children.map(([label, path]) => ({ label, path }))).find((item) => item.path === pathname);
  if (navChild) title = navChild.label;

  if (section === 'products' && parts.length === 3) {
    const item = products.find((entry) => entry.slug === parts[2]);
    if (item) { title = item.name; description = `${item.scenario}，了解产品规格、适用对象、功效信息、使用方法与注意事项。`; }
  }
  if (section === 'brands' && parts[1]) {
    const item = brands.find((entry) => entry.slug === parts[1]);
    if (item) { title = item.name; description = `${item.positioning}。${item.description}`; }
  }
  if (section === 'pet-life' && parts.length === 3) {
    const item = articles.find((entry) => entry.slug === parts[2]);
    if (item) { title = item.title; description = item.summary; type = 'article'; }
  }
  if (section === 'news' && parts.length === 3) {
    const item = newsItems.find((entry) => entry.slug === parts[2]);
    if (item) { title = item.title; description = item.summary; type = 'article'; }
  }
  if (section === 'responsibility' && parts[1]) {
    const item = responsibilityPrograms.find((entry) => entry.slug === parts[1]);
    if (item) { title = item.title; description = item.summary; }
  }
  if (section === 'careers' && parts[1] === 'jobs' && parts[2]) {
    const item = jobs.find((entry) => entry.slug === parts[2]);
    if (item) { title = `${item.title}招聘`; description = `萌净集团${item.department}${item.title}岗位，工作地点${item.location}，了解岗位职责、任职要求与投递方式。`; }
  }
  if (pathname === '/contact') { title = '联系我们'; description = '联系萌净集团，了解商务合作、产品咨询、公益协作、媒体沟通与人才招聘。'; }
  if (pathname === '/cooperation') { title = '商务合作'; description = '了解萌净集团渠道、品牌、供应链、技术与公益合作方向。'; }

  return { title: `${title}｜萌净集团`, description, type };
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = findMeta(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', { name: 'description', content: meta.description });
    setMeta('meta[name="robots"]', { name: 'robots', content: meta.robots || 'index,follow,max-image-preview:large' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: meta.type });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'zh_CN' });

    const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (siteUrl) {
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
      canonical.href = `${siteUrl}${pathname}`;
      setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical.href });
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }

    let structuredData = document.getElementById('organization-schema');
    if (pathname === '/') {
      if (!structuredData) { structuredData = document.createElement('script'); structuredData.id = 'organization-schema'; structuredData.type = 'application/ld+json'; document.head.appendChild(structuredData); }
      structuredData.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: '萌净集团', description: defaultDescription, ...(siteUrl ? { url: siteUrl } : {}) });
    } else {
      structuredData?.remove();
    }
  }, [pathname]);

  return null;
}
