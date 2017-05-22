import '../style/common.scss';
function common(){console.log('common');}
var clientWidth = document.documentElement.clientWidth,
    scale = clientWidth / 320,
    viewport = document.querySelector("meta[name=viewport]");
clientWidth > 960 && (scale = clientWidth / 480), viewport.setAttribute("content", "width=320,initial-scale=" + scale + ", minimum-scale=1,user-scalable=no");

export{
	common
}