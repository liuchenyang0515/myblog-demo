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
    }
  };