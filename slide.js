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
var numberSlide = getParam('number');
var nameSlide = getParam('name');
var nameSlide1 = getParam('folder');
numberSlide = decodeURI(numberSlide);
nameSlide = decodeURI(nameSlide);
nameSlide1 = decodeURI(nameSlide1);
console.log(location.href);
console.log(nameSlide);
//document.getElementsByClassName('scd')[0].innerHTML = nameSlide;



var sc = -1;
var wt;
var sql1 = '<a href="javascript:next();" name="sssss"><img class="img_d" style="display:inline-block; " id="q';
var sql2 = '" src="';
var sql3 = '" /></a>';
var sql;
var w1 = '<center><div class="wdc"><div class="thumb" id="p" style="text-align: center;"> <a id="ld" class="sape">로딩중...<br></a>';
document.write(w1);
console.log(w1);

for (var i = 0; i <= numberSlide; i++) {
    sql = sql1 + i + sql2 + 'img/projects/' + decodeURI(nameSlide1) + '/' + i + '.jpg' + sql3;
    console.log(sql);
    document.write(sql);
    var cpp = document.getElementById('q' + i);
    console.log(cpp);
    console.log(cpp.offsetHeight + ',' + cpp.offsetWidth)
    
    console.log(cpp);
}
var w2 = '<br /><div style = "width:90%; text-align: right; margin-top:5rem; max-width: calc(100% - 150);" ><a class="sape"></a></div></div><br /><!--< a class="scd" ></a > --></div></center>';
document.write(w2);
console.log(w2);
var asdfbn = -1;
console.log(numberSlide);
/*
var spvbn = setInterval(function () {
    if (asdfbn == numberSlide) {
        document.getElementById('ld').style.display = 'none';
        next();
        clearInterval(spvbn);
    }
    asdfbn = asdfbn + 1;
    console.log('q' + asdfbn);
    var sasdnta = document.getElementById('q' + asdfbn);
    console.log(sasdnta);
    sasdnta.style.display = 'none';
}, 100);
*/
next();
document.getElementById('ld').style.display = 'none';
document.getElementById('q0').style.display = 'inline-block';
function next() {
    if (sc == numberSlide) sc = -1;
    sc = sc + 1;
    for (var i = 0; i <= numberSlide; i++) {
        console.log('q' + i);
        document.getElementById('q' + i).style.display = 'none';
    }
    document.getElementById('q' + sc).style.display = 'inline-block';
    if (sc == 0) {
        document.getElementsByClassName('sape')[1].innerHTML = 'Main';
    }
    else {
        document.getElementsByClassName('sape')[1].innerHTML = sc + '/' + numberSlide;
    }
    
}