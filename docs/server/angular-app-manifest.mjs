
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
    'index.csr.html': {size: 521, hash: 'cfc27561342e17e04d038a463c8cb78150c97c07c42450597db1d9de18197301', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '5cb1f81bee4432a53fd4edef517674e819ea4f33ef73521985446c59f5dc6235', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20872, hash: '8dbc0e186feb25c4a422f97cf781cacc87dd1acc24f93ba0dfe0671bf5ecb659', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
