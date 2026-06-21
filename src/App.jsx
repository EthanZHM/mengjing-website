import { Link, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import { CooperationPage, GenericDetail, SectionLanding } from './pages/SectionPages';
import { ProductDetailPage, ProductsLanding, ProductSeriesPage } from './pages/ProductPages';
import { BrandDetailPage, BrandsLanding } from './pages/BrandPages';
import { ArticleDetailPage, ArticleListPage, NewsDetailPage, NewsLanding, NewsListPage, PetLifeLanding } from './pages/EditorialPages';
import { CareersLanding, ContactPage, JobDetailPage, JobsPage } from './pages/CareerPages';
import { ResponsibilityDetailPage, ResponsibilityLanding } from './pages/ResponsibilityPages';

function SimplePage({ title, text }) { return <section className="simple-page"><div><span>萌净集团</span><h1>{title}</h1><p>{text}</p><Link to="/">返回首页</Link></div></section>; }

export default function App() {
  return <SiteLayout><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<SectionLanding section="about" />} />
    <Route path="/about/:slug" element={<GenericDetail section="about" />} />
    <Route path="/development" element={<SectionLanding section="development" />} />
    <Route path="/development/:slug" element={<GenericDetail section="development" />} />
    <Route path="/products" element={<ProductsLanding />} />
    <Route path="/products/:series" element={<ProductSeriesPage />} />
    <Route path="/products/:series/:product" element={<ProductDetailPage />} />
    <Route path="/brands" element={<BrandsLanding />} />
    <Route path="/brands/:brand" element={<BrandDetailPage />} />
    <Route path="/pet-life" element={<PetLifeLanding />} />
    <Route path="/pet-life/:category" element={<ArticleListPage />} />
    <Route path="/pet-life/:category/:article" element={<ArticleDetailPage />} />
    <Route path="/responsibility" element={<ResponsibilityLanding />} />
    <Route path="/responsibility/:slug" element={<ResponsibilityDetailPage />} />
    <Route path="/news" element={<NewsLanding />} />
    <Route path="/news/:category" element={<NewsListPage />} />
    <Route path="/news/:category/:news" element={<NewsDetailPage />} />
    <Route path="/careers" element={<CareersLanding />} />
    <Route path="/careers/jobs" element={<JobsPage />} />
    <Route path="/careers/jobs/:job" element={<JobDetailPage />} />
    <Route path="/careers/:slug" element={<GenericDetail section="careers" />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/cooperation" element={<CooperationPage />} />
    <Route path="/privacy" element={<SimplePage title="隐私政策" text="隐私政策将根据网站实际收集的信息、使用目的、保存方式与用户权利完成法律审核后发布。" />} />
    <Route path="/legal" element={<SimplePage title="法律声明" text="法律声明将在企业主体信息、商标权属与网站运营责任确认后正式发布。" />} />
    <Route path="*" element={<SimplePage title="页面未找到" text="您访问的页面不存在、已移动或暂时不可用，请返回首页继续浏览。" />} />
  </Routes></SiteLayout>;
}
