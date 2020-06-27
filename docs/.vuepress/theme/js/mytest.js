Promise.resolve().then(() => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://lib.baomitu.com/jquery/3.4.1/jquery.min.js';
    document.body.appendChild(s);
}).then(()=> {
    let m = document.createElement('script');
    m.type = 'text/javascript';
    m.src = 'https://player.lmih.cn/player/js/player.js';
    m.setAttribute("id", "myhk");
    m.setAttribute("key", "159325101761");
    m.setAttribute("m", 1);
    document.body.appendChild(m);
})
