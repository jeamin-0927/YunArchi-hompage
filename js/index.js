console.log(window.location.host);
if (window.location.host == "chicken-moo.com"){
    location.replace("http://yun-architects.com/");
}

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}
var src = getParam('tap');
console.log(src);
if(src == ''){
    changIframe('project');
}
var iframe = document.getElementById('ifm');
for(var i = 0; i < 3; i++){
        document.getElementsByName('bcm')[i].style.color = 'rgba(0, 0, 0, 0.349)';
}
document.getElementById(src).style.color = 'black';
iframe.src = src;
iframe.height = window.innerHeight;


function change_parent_url(url) {
    document.location = url;
}
function changIframe(src1){
    var nowLink = window.location.pathname;
    location.href = nowLink + '?tap=' + src1;
}