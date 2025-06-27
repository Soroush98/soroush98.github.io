
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
    'index.csr.html': {size: 3032, hash: '3023f57f3f8614ca5799913f21366ac1710826cf42f42e58bb2791c0eea7797d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1442, hash: '021592a17fe81e09871ccd2cf4c59e611764e812b56d97945e720141bc7abf38', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38140, hash: 'e0b5c80e972e28a3276cb42c8840fb86057fdd4edb382bf21c2b86d6c100e7ea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JMSPGLDM.css': {size: 6112, hash: '1yC7ImNDy8Y', text: () => import('./assets-chunks/styles-JMSPGLDM_css.mjs').then(m => m.default)}
  },
};
