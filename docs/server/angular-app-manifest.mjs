
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
    'index.csr.html': {size: 33970, hash: 'c693c8b6c58409b65cfd89af32e587605857486ba1ebb605b3cac425d4f4ed2b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19155, hash: '83c020662790de9bfdaf6b29696d04835d6c846f97bdec9538fbb4f7437e528b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 112282, hash: '04e5da6c2b595220f6a68262e059f2afa6b29f39c2d68850cb4028863e01e950', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 112320, hash: '79e67a8195af7947265a070e889dc4c37b4e9c359b080bee54a115a978bbd017', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 111514, hash: 'f2d42f6482ab819f95c83009b4a124d19c6b6909f2354b5783d3adef43f2098c', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 119211, hash: 'c4758ffe41e76e6ba8a950a57b127d37502544443b0108b22ac9a244c8db0a17', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-3AGV7BDJ.css': {size: 720962, hash: 'xxMDYhfJgf4', text: () => import('./assets-chunks/styles-3AGV7BDJ_css.mjs').then(m => m.default)}
  },
};
