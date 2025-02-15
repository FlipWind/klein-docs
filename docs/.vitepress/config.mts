import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
    title: "👾 Klein Bot Docs",
    description: "docs for klein Bot",
    markdown: {
        math: true
    },
    cleanUrls: true,

    head: [
        ['link', { rel: 'icon', href: '/kleinhead.png' }],
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local'
        },

        aside: true,
        outline: {
            level: 3,
            label: "页面导航",
        },
        
        nav: [
            { text: '主页', link: '/' },
            { text: '使用文档', link: '/about' }
        ],

        sidebar: [
            {
                text: '总览',
                items: [
                    { text: '了解 Klein Bot', link: '/about' },
                    { text: '常见问题', link: '/questions' },
                ]
            },
            {
                text: '插件',
                link: '/plugins',
                items: [
                    { text: '签到 Checkin', link: '/plugins/checkin' },
                    { text: '一言 Sentence', link: '/plugins/onesentence' },
                    { text: '兑换码 CDK', link: '/plugins/cdkquery' },
                    { text: '群签到 Signin', link: '/plugins/groupsignin' },
                    { text: '心跳 Heartbeat', link: '/plugins/heartbeat' },
                    { text: '我喜欢你 Love', link: '/plugins/loveu' },
                    { text: '表情包转换 Meme', link: '/plugins/memetransformer' },
                ]
            },

            {
                text: '其他',
                items: [
                    { text: '参与讨论', link: '/contact' },
                    { text: '捐赠', link: '/donate' },
                ]
            },
        ],

        //页脚
        footer: {
            copyright: `© 2025 flipwind. All Rights Reserved.`,
        },

        // socialLinks: [
        //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ]
    }
})
