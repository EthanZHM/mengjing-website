import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { navigation } from '../data/siteData';
import SeoManager from './SeoManager';

function BrandMark() {
  return (
    <Link className="brand-mark" to="/" aria-label="萌净集团首页">
      <span className="brand-symbol"><i /><i /><i /></span>
      <span><strong>萌净</strong><small>MENGJING GROUP</small></span>
    </Link>
  );
}

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState('');
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    setDrawerOpen(false);
    setExpanded('');
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', drawerOpen);
    return () => document.body.classList.remove('menu-open');
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    closeButtonRef.current?.focus();
    const handleDrawerKeys = (event) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...document.querySelectorAll('#mobile-navigation a, #mobile-navigation button')].filter((element) => !element.disabled && element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', handleDrawerKeys);
    return () => window.removeEventListener('keydown', handleDrawerKeys);
  }, [drawerOpen]);

  const openDrawer = () => {
    const currentSection = navigation.find((item) => location.pathname === item.path || location.pathname.startsWith(`${item.path}/`));
    setExpanded(currentSection?.path || '');
    setDrawerOpen(true);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="主导航">
          {navigation.map((item) => (
            <div className="nav-group" key={item.path}>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={item.path}>
                {item.label}<ChevronDown size={13} />
              </NavLink>
              <div className="mega-menu">
                <div className="mega-intro">
                  <span>{item.eyebrow}</span>
                  <strong>{item.label}</strong>
                  <Link to={item.path}>栏目首页 <ArrowUpRight size={15} /></Link>
                </div>
                <div className="mega-links">
                  {item.children.map(([label, path], index) => (
                    <Link to={path} key={path}><em>{String(index + 1).padStart(2, '0')}</em>{label}</Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="button button-primary header-contact" to="/contact">联系我们</Link>
          <button ref={menuButtonRef} className="menu-toggle" onClick={openDrawer} aria-label="打开菜单" aria-expanded={drawerOpen} aria-controls="mobile-navigation"><Menu /></button>
        </div>
      </div>
      <div className={`drawer-backdrop ${drawerOpen ? 'show' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside id="mobile-navigation" className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen} inert={!drawerOpen} role="dialog" aria-modal="true" aria-label="移动端导航">
        <div className="drawer-head"><BrandMark /><button ref={closeButtonRef} className="icon-button" onClick={() => { setDrawerOpen(false); menuButtonRef.current?.focus(); }} aria-label="关闭菜单"><X /></button></div>
        <nav className="mobile-nav">
          {navigation.map((item) => (
            <div className={`mobile-nav-group ${location.pathname === item.path || location.pathname.startsWith(`${item.path}/`) ? 'current' : ''}`} key={item.path}>
              <div><NavLink to={item.path}>{item.label}</NavLink><button onClick={() => setExpanded(expanded === item.path ? '' : item.path)} aria-label={`${expanded === item.path ? '收起' : '展开'}${item.label}`} aria-expanded={expanded === item.path}><ChevronDown className={expanded === item.path ? 'rotated' : ''} /></button></div>
              <div className={`mobile-subnav ${expanded === item.path ? 'expanded' : ''}`} aria-hidden={expanded !== item.path}>
                {item.children.map(([label, path]) => <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={path} key={path}>{label}</NavLink>)}
              </div>
            </div>
          ))}
        </nav>
        <div className="drawer-actions"><Link className="button button-primary" to="/contact">联系我们</Link><Link className="button button-secondary" to="/cooperation">商务合作</Link></div>
      </aside>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-brand"><BrandMark /><p>围绕宠物清洁、健康生活与绿色家居，创造人与宠物友好共生的洁净生活方式。</p></div>
        <div className="footer-nav footer-nav-desktop">
          {navigation.map((item) => <div key={item.path}><Link to={item.path}>{item.label}</Link>{item.children.slice(0, 3).map(([label, path]) => <Link to={path} key={path}>{label}</Link>)}</div>)}
        </div>
        <div className="footer-nav-mobile">
          {navigation.map((item) => <details key={item.path}><summary>{item.label}<ChevronDown size={17} /></summary><div><Link to={item.path}>栏目首页</Link>{item.children.map(([label, path]) => <Link to={path} key={path}>{label}</Link>)}</div></details>)}
        </div>
        <div className="footer-contact"><span className="eyebrow">CONTACT</span><h3>期待与您建立联系</h3><p>企业服务热线：待确认<br />商务联系邮箱：待确认<br />办公地址：待确认</p><Link className="text-link light" to="/contact">联系我们 <ArrowUpRight size={16} /></Link></div>
      </div>
      <div className="footer-bottom container"><span>© 2026 萌净集团 版权所有</span><div><Link to="/privacy">隐私政策</Link><Link to="/legal">法律声明</Link></div></div>
    </footer>
  );
}

export default function SiteLayout({ children }) {
  const location = useLocation();
  return <><SeoManager /><a className="skip-link" href="#main-content">跳至主要内容</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer />{location.pathname !== '/contact' && <nav className="mobile-contact-dock" aria-label="快捷联系"><Link to="/contact">联系我们</Link><Link to="/cooperation">商务合作 <ArrowUpRight size={15} /></Link></nav>}</>;
}
