async function jq() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://lib.baomitu.com/jquery/3.4.1/jquery.min.js';
    document.body.appendChild(s);
}

!(async function() {
    await jq();
    setTimeout(() => {
        let m = document.createElement('script');
        m.type = 'text/javascript';
        m.src = 'https://player.lmih.cn/player/js/player.js';
        m.setAttribute("id", "myhk");
        m.setAttribute("key", "159325101761");
        m.setAttribute("m", 1);
        document.body.appendChild(m);
    }, 500); // 前一个文件始终有可能加载不出来，必须延时策略
})()
// Promise.resolve().then(() => {
//     const s = document.createElement('script');
//     s.type = 'text/javascript';
//     s.src = 'https://lib.baomitu.com/jquery/3.4.1/jquery.min.js';
//     document.body.appendChild(s);
// }).then(()=> {
//     let m = document.createElement('script');
//     m.type = 'text/javascript';
//     m.src = 'https://player.lmih.cn/player/js/player.js';
//     m.setAttribute("id", "myhk");
//     m.setAttribute("key", "159325101761");
//     m.setAttribute("m", 1);
//     document.body.appendChild(m);
// })
