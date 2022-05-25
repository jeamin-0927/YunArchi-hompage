<!DOCTYPE html>
<title>디자인그룹 윤건축사 사무소</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://chicken-moo.com/files/js/jquery-latest.js"></script>
<style>
@font-face {
    font-family: "L";
    src: url("https://chicken-moo.com/yun-archi/ttf/08SeoulHangangL.ttf");
}
@font-face {
    font-family: "M";
    src: url("https://chicken-moo.com/yun-archi/ttf/08SeoulHangangL.ttf");
}
div{
    display: inline-block;
}
html { 
    font-family: L;
    scroll-behavior: smooth;    
}
html, body{
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
}
body{
    display: flex;
    justify-content: center;
}
.title{
    font-family: L;
    color: rgba(70, 77, 153, 100);
}
.title-1{
    font-size: 30px;
    margin: 30px 0 5px 0;
}
.title-2{
    font-size: 15px;
    text-align: right;
    width: 303px;
}
</style>

<script>
    document.write('<div class="title"><div class="title-1">D.G. YUN-ARCHITECTS</div><br><div class="title-2">디자인그룹윤건축사사무소</div></div>');
    function print_pic(folder, Type){
        var src = 'img/projects/' + folder + '/0.' + Type;
        var img = '<img src="' + src + '" loading="lazy" class="" >';
        var divOpen = '<div><a href="page.php?folder=' + folder + '"><div>';
        var divClose = '</div></a></div>';
        console.log(img);
        document.write(divOpen + img + divClose);
    }
</script>