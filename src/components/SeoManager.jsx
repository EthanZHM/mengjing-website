import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { detailPages, newsItems, productCategories, sectionMeta } from '../data/siteData';

const defaultDescription = '山东洗得亮科技公司坚持绿色健康使命，围绕植物原料、产品创新、绿色智造、品质管控和日化产品矩阵，建设民族日化品牌。';

function findMeta(pathname) {
  if (pathname === '/') return { title: '山东洗得亮科技｜绿色日化实业品牌', description: defaultDescription, type: 'website' };
  if (pathname === '/contact') return { title: '合作联系｜山东洗得亮科技', description: '了解山东洗得亮科技经销加盟、商用定制、供应链协同与产业合作方向。', type: 'website' };

  const parts = pathname.split('/').filter(Boolean);
  const section = parts[0];
  let title = sectionMeta[section]?.title || '山东洗得亮科技';
  let description = sectionMeta[section]?.intro || defaultDescription;

  if (section === 'products' && parts[1]) {
    const product = productCategories.find((item) => item.slug === parts[1]);
    if (product) {
      title = product.title;
      description = product.summary;
    }
  }

  if (section === 'news' && parts[1]) {
    const item = newsItems.find((entry) => entry.slug === parts[1]);
    if (item) {
      title = item.title;
      description = item.summary;
    }
  }

  const detail = detailPages[`${section}/${parts[1]}`];
  if (detail) {
    title = detail.title;
    description = detail.lead;
  }

  return { title: `${title}｜山东洗得亮科技`, description, type: section === 'news' && parts[1] ? 'article' : 'website' };
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
    const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
    document.title = meta.title;
    setMeta('meta[name="description"]', { name: 'description', content: meta.description });
    setMeta('meta[name="robots"]', { name: 'robots', content: meta.robots || 'index,follow,max-image-preview:large' });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: '洗得亮科技' });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'zh_CN' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: meta.type });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (siteUrl) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${siteUrl}${pathname}`;
      setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical.href });
      const shareImage = `${siteUrl}/editorial-images/zaozhuang-pomegranate-orchard.jpg`;
      setMeta('meta[property="og:image"]', { property: 'og:image', content: shareImage });
      setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: '山东枣庄峄城区连片石榴园航拍' });
      setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: shareImage });
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
      document.head.querySelector('meta[property="og:image"]')?.remove();
      document.head.querySelector('meta[name="twitter:image"]')?.remove();
    }

    let structuredData = document.getElementById('organization-schema');
    if (pathname === '/') {
      if (!structuredData) {
        structuredData = document.createElement('script');
        structuredData.id = 'organization-schema';
        structuredData.type = 'application/ld+json';
        document.head.appendChild(structuredData);
      }
      structuredData.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '山东洗得亮科技公司',
        description: defaultDescription,
        ...(siteUrl ? { url: siteUrl } : {}),
      });
    } else {
      structuredData?.remove();
    }
  }, [pathname]);

  return null;
}
