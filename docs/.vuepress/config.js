module.exports = {
    title: '砖业洋__',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/haizei.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {  
      logo: '/haizei.jpg',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        // {text: '', link: '/' },
        {text: 'CSDN主页', link: 'https://liuchenyang0515.blog.csdn.net'}      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth:2
    },
    plugins: {
      '@vssue/vuepress-plugin-vssue': {
        platform: 'github', //v3的platform是github，v4的是github-v4
        // locale: 'zh', //语言
        // 其他的 Vssue 配置
        owner: 'liuchenyang0515', //github账户名
        repo: 'liuchenyang0515.github.io', //github一个项目的名称
        clientId: 'bb4ff4ad145588ae166f',//注册的Client ID
        clientSecret: '669ec1391af7e66101ebcbf6e38ec61dd4ade717',//注册的Client Secret
        // autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
      },
    },
  };