
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/original-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/original-website/welcome",
    "route": "/original-website"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WAVFRNGL.js",
      "chunk-TASOG52Q.js",
      "chunk-ZYTMDBJH.js"
    ],
    "route": "/original-website/welcome"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBX5C75F.js",
      "chunk-ZYTMDBJH.js"
    ],
    "route": "/original-website/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7QRJ7VIP.js",
      "chunk-TASOG52Q.js",
      "chunk-ZYTMDBJH.js"
    ],
    "route": "/original-website/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J7NPLQPW.js",
      "chunk-TASOG52Q.js",
      "chunk-ZYTMDBJH.js"
    ],
    "route": "/original-website/experience"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33864, hash: '420c23619f60c7f25bec3b40bc210f0307a4406b1e49288877a6c38dc38e103a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19155, hash: '0ca8ad9b2fad87de193f1d0e4916d1d1ad866b93597053fec2c5bc6e3f06d187', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 111403, hash: 'ca6a57f4ad2023c58a2085c1df7d0d9b60443b7ee13717e4790bada094d0ce02', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 112209, hash: '55a55fa964fe9249116c3ab52388d4be885b702d0f4e6ca88037d11149aeaebb', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 112171, hash: '74b8c23860c2a4a8623424f4e87fd0c06350047a65ee4b2a959100eda7c38cfa', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 119159, hash: '6b9e241d586197c117758919f068cf5a913aeaa55bf8147e323736fa554c169a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-CZBVWUPB.css': {size: 719288, hash: 'dmj96UYyVNA', text: () => import('./assets-chunks/styles-CZBVWUPB_css.mjs').then(m => m.default)}
  },
};
