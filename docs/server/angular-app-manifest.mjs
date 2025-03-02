
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/soroush98.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/soroush98.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 522, hash: 'f8c8f2b27178ca6baa7913a922ffc3578e7cd7740ca48b1681217b21334f4a01', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1035, hash: 'e38aabc380692017dd0a1614d030502716ff130c6c2636fed50c14b77412ff6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20873, hash: 'c631da50ce34ef1971eceba92bfff72233f8b2fa7f72270ad0e84399e2ec13cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
