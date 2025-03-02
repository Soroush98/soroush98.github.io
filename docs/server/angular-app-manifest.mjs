
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/browser',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 510, hash: '0b17555705e1ce5abe1a9ed9c744fcc790aec7f027d7f73ab050a0817182abb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'f2444d842dc9b62b03cabb31be490c05f15cb380dcc7cd82796039a50adb1e0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20861, hash: 'ccb2b0522d49b1e81f29a1b0eb7504ea706f7003f397df3b01311f2d7caeb047', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
