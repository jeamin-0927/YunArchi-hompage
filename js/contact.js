function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var link;
if (isMobile()) {
    link = 'https://m.map.naver.com/search2/site.naver?code=1642243023#/map';
    document.getElementById('ifm').style.width = '100%'

} else {
    link = 'https://map.naver.com/v5/entry/place/1642243023?c=14372018.4985347,4183477.3837331,15,0,0,0,dh';
    document.getElementById('ifm').style.marginLeft = '-65rem';
}
document.getElementById('ifm').src = link;
document.getElementById('ifma').href = link;