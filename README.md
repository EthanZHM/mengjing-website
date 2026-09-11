# 洗得亮科技官网(XIDELIANG TECH)

山东洗得亮科技中文官方网站前端项目(Vite + React),围绕绿色日化实业定位,包含走进洗得亮、研发智造、品质管控、产品中心、品牌动态、合作招商等栏目,以清晰、克制、可追溯的信息建立品牌公信力。

## 本地运行

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build   # 产物输出到 dist/
```

## 发布

项目通过 GitHub Actions(见 `.github/workflows/deploy-pages.yml`)自动发布到 GitHub Pages:

- 站点地址:https://ethanzhm.github.io/mengjing-website/
- 构建时通过 `VITE_SITE_URL` 注入站点绝对地址,用于生成 canonical、og:image 等 SEO 标签;若启用自定义域名,请同步修改该变量。

## 说明

- 图片资源统一经 `src/data/imageAssets.js` 的 `assetUrl()` 基于 `BASE_URL` 解析,以兼容子路径部署(HashRouter + 相对资源路径)。
- 项目使用 HashRouter,站内"内容锚点/跳至主要内容"一律通过 JS 平滑滚动实现,避免与 hash 路由冲突。
