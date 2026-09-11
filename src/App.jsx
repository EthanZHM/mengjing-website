import { Link, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import {
  ContactPage,
  CooperationPage,
  CorporateHomePage,
  DetailPage,
  NewsPage,
  ProductsPage,
  SectionLanding,
} from './pages/CorporatePages';

function SimplePage() {
  return (
    <section className="not-found">
      <div className="not-found-bg" />
      <div className="container not-found-inner">
        <span className="not-found-code" aria-hidden="true">404</span>
        <div>
          <span className="eyebrow light">PAGE NOT FOUND</span>
          <h1>页面未找到</h1>
          <p>您访问的页面不存在、已移动或暂时不可用。您可以返回首页,或前往产品中心继续浏览。</p>
          <div className="not-found-actions">
            <Link className="button button-primary" to="/">返回首页</Link>
            <Link className="button button-ghost-light" to="/products">浏览产品中心</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<CorporateHomePage />} />
        <Route path="/about" element={<SectionLanding section="about" />} />
        <Route path="/about/:slug" element={<DetailPage section="about" />} />
        <Route path="/rnd" element={<SectionLanding section="rnd" />} />
        <Route path="/rnd/:slug" element={<DetailPage section="rnd" />} />
        <Route path="/quality" element={<SectionLanding section="quality" />} />
        <Route path="/quality/:slug" element={<DetailPage section="quality" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsPage />} />
        <Route path="/cooperation" element={<CooperationPage />} />
        <Route path="/cooperation/:type" element={<CooperationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<SimplePage />} />
      </Routes>
    </SiteLayout>
  );
}
