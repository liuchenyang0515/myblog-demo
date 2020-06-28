// 注意：live2d_path 参数应使用绝对路径
// const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";


/**
 * 别的文件为参考，修改无效，因为其他文件都是在我的cdn而不在本仓库，修改本文件autoload.js有效，因为会调用
 */

const myVersion = "v0.1.7"; // 加不加v都可以访问
const live2d_path = "https://cdn.jsdelivr.net/gh/liuchenyang0515/KBNSource@"+ myVersion +"/live2d-widget/";
// const live2d_path = window.location.protocol + "//" + window.location.host + "/";
// ======小人右边的可点击按钮
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = "https://cdn.jsdelivr.net/gh/liuchenyang0515/KBNSource@" + myVersion+ "/live2d-widget/font-awesome.min.css";
// link.href = './font-awesome.min.css' // 测试相对路径不行，因为有eof请求在线
head.appendChild(link);
// ======
// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
		// loadExternalResource(__dirname + "waifu.css", "css"),
		// loadExternalResource(__dirname + "live2d.min.js", "js"),
		// loadExternalResource(__dirname + "waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			// waifuPath: __dirname +  "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "https://cdn.jsdelivr.net/gh/liuchenyang0515/live2d_api/"
		});
	});
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的 waifu-tips.json

console.log(`
  砖业洋__就这么帅吗？你还企图打开控制台窥探我～～～
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
