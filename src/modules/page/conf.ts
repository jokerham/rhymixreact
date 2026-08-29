import type { ModuleConf } from '../../module/schema/module-conf'

const conf: ModuleConf = {
  name: 'page',
  title: 'Page',
  description: 'Page module for creating article, widget, and outside page types.',
  category: 'service',
  noSkin: false,
  pageTypes: [
    { name: 'ARTICLE', title: 'Article', noSkin: false },
    { name: 'WIDGET', title: 'Widget', noSkin: true },
    { name: 'OUTSIDE', title: 'Outside', noSkin: true },
  ],
}

export default conf
