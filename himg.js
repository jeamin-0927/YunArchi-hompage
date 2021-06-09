//https://chicken-moo.com/yun-archi/himg?src=사진이름&link=링크
        
var splink = getParam('link').replace(/`/gi, '=');
splink = splink.replace(/~/gi, '&');
document.getElementById('imga').src = 'img/projects/' + splink.split('=')[3] + '/0.jpg';
document.getElementById('atag').href = 'javascript:parent.change_parent_url("' + splink + '");';

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return decodeURI(sval);
}