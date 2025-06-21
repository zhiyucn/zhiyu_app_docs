import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "智宇的文档",
  description: "一些文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: 'QBotx',
        items: [
          { text: 'README', link: '/QBotx/README' },
          { text: '部署指南', link: '/QBotx/deploy' }
        ]
      },
      {
        text: 'LDownload',
        items: [
          { text: 'README', link: '/LDownload/README' },
          { text: '插件', link: '/LDownload/plugins/README' },
          { text: '制作插件', link: '/LDownload/plugins/init_a_plugin' },
          { text: '制作一个API插件', link: '/LDownload/plugins/making_API_plugin' },
          { text: '使用', link: '/LDownload/use/README' }
        ]
      },
      {
        text: '智宇论坛',
        items: [
          { text: 'README', link: '/zybbs/README' },
          { text: 'API', link: '/zybbs/api/README' },
          { text: '登录 API', link: '/zybbs/api/login_client' },
          { text: '发帖 API', link: '/zybbs/api/create_post_client' },
          { text: '回帖 API', link: '/zybbs/api/reply_post_client' },
          { text: '贡献者', link: '/zybbs/contributors' }
        ]
      },
      {
        text: '智宇论坛客户端',
        items: [
          { text: 'README', link: '/zybbs_client/README' },
          { text: '插件', link: '/zybbs_client/plugins/README' },
          { text: '制作插件', link: '/zybbs_client/plugins/init_a_plugin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhiyucn/zhiyu_app_docs' }
    ]
  }
})
