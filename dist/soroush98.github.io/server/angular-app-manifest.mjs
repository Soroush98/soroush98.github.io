
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3032, hash: '997df1547cc178f57ebf8e7c09cfa1408e2be11fef379f02bbccf5a9f4459b70', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1442, hash: '95b1cba5daaf58a54a106b9e55a6094a828ef2a7f47c0550300e2b25fe8bc88a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38140, hash: '3133ab42a6f7a3de95bb3c1a72c30122e64d6b6feff5507528ba7ea954a1b5e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JMSPGLDM.css': {size: 6112, hash: '1yC7ImNDy8Y', text: () => import('./assets-chunks/styles-JMSPGLDM_css.mjs').then(m => m.default)}
  },
};
