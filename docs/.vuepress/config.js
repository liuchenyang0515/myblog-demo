module.exports = {
    title: '宸洋的博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/haizei.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {  
      logo: '/haizei.jpg',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        // {text: '', link: '/' },
        {text: 'CSDN主页', link: 'https://blog.csdn.net/qq_34115899'}      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth:2
    }
  };