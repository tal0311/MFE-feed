 import {svgService} from 'https://cdn.jsdelivr.net/gh/tal0311/svg-cdn/svg.service.js';

// plugins/i18n.js
export const svgPlugin = {
  install: (app) => {
    app.config.globalProperties.$getSvg = (key) => svgService.getSvg(key)
  }
}
