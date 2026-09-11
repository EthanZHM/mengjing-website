// 统一资源寻址:站点可能部署在 GitHub Pages 等子路径下,
// 因此不能用根绝对路径(/xxx),统一基于 Vite 的 BASE_URL('.' 或 '/')解析。
export function assetUrl(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path; // 外部绝对地址原样保留
  return import.meta.env.BASE_URL + String(path).replace(/^\/+/, '');
}

const photo = (src, alt, extra = {}) => ({ src: assetUrl(src), alt, ...extra });

export const siteImages = {
  zaozhuangCity: photo('/editorial-images/zaozhuang-city.jpg', '山东枣庄城市湖景与现代城区航拍', {
    credit: '新华社记者 孙中喆 摄',
  }),
  pomegranateOrchard: photo('/editorial-images/zaozhuang-pomegranate-orchard.jpg', '山东枣庄峄城区连片石榴园航拍', {
    credit: '新华社记者 郭绪雷 摄',
  }),
  pomegranateFruit: photo('/editorial-images/zaozhuang-pomegranate-fruit.jpg', '山东枣庄峄城区石榴园成熟石榴', {
    credit: '新华社记者 郭绪雷 摄',
  }),
  productWater: photo('/content-images/image18.jpeg', '洗得亮产品与清澈水流、绿植场景', {
    source: '用户提供文档《企业文化.docx》',
  }),
  labPipette: photo('/editorial-images/laboratory-quality.jpg', '实验室移液器与样品检测场景'),
  naturalHandwash: photo('/themed-images/handwash-natural.jpg', '天然洗手液与温和洁净个人护理场景', {
    source: 'Unsplash 免费商用授权图(https://unsplash.com/photos/person-holding-green-plastic-tube-coT7FekElAU)',
  }),
  labScientist: photo('/themed-images/lab-scientist.jpg', '中国科研人员开展品质检测与实验分析', {
    source: 'Pexels 免费商用授权图(https://www.pexels.com/photo/8851363/)',
  }),
};
