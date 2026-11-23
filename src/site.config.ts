import type { Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  title: 'Strontium',
  author: 'Strontium',
  description: '记录学习、项目与思考。',
  favicon: '/favicon.svg',
  locale: {
    lang: 'zh-CN',
    attrs: 'zh_CN',
    dateLocale: 'zh-CN',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  head: [],
  customCss: [],
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Notes', link: '/notes' },
      { title: 'Projects', link: '/projects' },
      { title: 'About', link: '/about' },
      { title: 'Contact', link: '/contact' }
    ]
  },
  footer: {
    links: [],
    credits: true,
    social: {
      github: 'https://github.com/DA-cpu1'
    }
  },
  content: {
    externalLinksContent: ' ↗',
    blogPageSize: 8,
    externalLinkArrow: true,
    share: ['weibo', 'x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  links: {
    logbook: [],
    applyTip: [
      { name: 'Name', val: theme.title },
      { name: 'Desc', val: theme.description || '' },
      { name: 'Link', val: 'https://strontium-two.vercel.app/' },
      { name: 'Avatar', val: 'https://strontium-two.vercel.app/favicon.svg' }
    ]
  },
  pagefind: false,
  quote: {
    server: 'https://api.quotable.io/quotes/random?maxLength=60',
    target: `(data) => data[0].content || 'Keep learning.'`
  },
  typography: {
    class: 'prose text-base text-muted-foreground'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  waline: {
    enable: false,
    server: '',
    additionalConfigs: {
      pageview: false,
      comment: false
    }
  }
}

const config = { ...theme, integ } as Config
export default config
