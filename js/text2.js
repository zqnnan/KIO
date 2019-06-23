window.onload=function(){
// 导航
    (function list(){
        var list=document.getElementById('list');
        var list1=document.getElementById('list1');
        var dw=document.getElementById('dw');
        list.onclick=function(){
            list.style.display="none"
            dw.style.opacity="1"
            dw.style.marginLeft="35%"
            list1.style.display="block"
        }
        list1.onclick=function(){
            list1.style.display="none"
            dw.style.marginLeft="60%"
            dw.style.opacity="0"
            list.style.display="block"
        }


    })()

// 点击事件


    var danian=document.getElementsByClassName('danian')[0];
	var outerWidth = danian.offsetWidth;
    var dLeft=document.getElementsByClassName('dianji-left')[0];
    var dRight=document.getElementsByClassName('dianji-right')[0];
    var nian=document.getElementsByClassName('nian')[0];
    var imgArr=nian.getElementsByTagName('li')

    var jinru=document.getElementsByClassName('jinru')[0];
    var littlebox=document.getElementsByClassName('littlebox')[0];
    var inner=document.getElementsByClassName('inner')[0];
    var imgArr1=jinru.getElementsByTagName('li')
    var index=0;


function toRight(){
    if(index<imgArr.length-1){
        index++;
    }
    move(nian,"left",-outerWidth*(index),60 );
    for(var i=0;i<imgArr1.length;i++){
        imgArr1[i].style.opacity="0" 
        imgArr1[i].style.top="200px" 
        
    }
    imgArr1[index].style.opacity="1" 
    imgArr1[index].style.top="0px"

   
    
    console.log( imgArr1[index].innerHTML)
        console.log(outerWidth)
        // dRight.style.backgroundColor="#ffba4b"
       
}
function toLeft(){
    if(index>0){
        index--;
        console.log(11)
    }
    move(nian,"left",-outerWidth*(index),60 );

    for(var i=0;i<imgArr1.length;i++){
       
        imgArr1[i].style.opacity="0" 
        imgArr1[i].style.top="200px" 
    }
    imgArr1[index].style.opacity="1" 
    imgArr1[index].style.top="0px"
     console.log(outerWidth)
    
}

dRight.onclick=function(){toRight()};
dLeft.onclick=function(){toLeft()};




//跳转

var indexx=document.getElementById('indexx');
indexx.onclick=function(){
 location='../html/index.html'
}


var text2=document.getElementById('text2');
text2.onclick=function(){
 location='../html/text2.html'
}

var text21=document.getElementById('text21');
text21.onclick=function(){
 location='../html/text21.html'
}

var text22=document.getElementById('text22');
text22.onclick=function(){
 location='../html/text22.html'
}


// 滚轮
document.body.onscroll=function(){
         
    var Top=document.body.scrollTop||document.documentElement.scrollTop;
     var leftmove=document.getElementsByClassName('font')[0];
   /* var rightmove=document.getElementsByClassName('brcenter')[0]; */
   
    var leftmove1=document.getElementsByClassName('wow')[0];
    var rightmove1=document.getElementsByClassName('box')[0];

    var leftmove2=document.getElementsByClassName('wenzi')[0];
    var rightmove2=document.getElementsByClassName('wenzi2')[0];
 
    var leftmove3=document.getElementsByClassName('huanse')[0];
    var rightmove3=document.getElementsByClassName('beizi')[0];

    var leftmove4=document.getElementsByClassName('history')[0];
    // var rightmove4=document.getElementsByClassName('main')[0]; 
    var totop=document.getElementById('totop');
   console.log(Top)

     if(Top>=10){
        leftmove.classList.add('moveqa');
        // rightmove.classList.add('move');
    } 
    if(Top>=400){
        leftmove1.classList.add('move');
        rightmove1.classList.add('move');
        
    }
    if(Top>=1000){
        leftmove2.classList.add('move1');
        rightmove2.classList.add('movea');
        totop.style.display="block";
    }else{
        totop.style.display="none";
    }
   if(Top>=1400){
        leftmove3.classList.add('move1');
        rightmove3.classList.add('moveq');
    }
     if(Top>=2500){
        leftmove4.classList.add('move1');
        // rightmove4.classList.add('active11');
    }
    

// 测目录


var scrTop=document.documentElement.scrollTop||document.body.scrollTop;//获取滚动的距离，或者说页面超出可视窗口的高度
var nav=document.getElementById('nav');   
var first=document.getElementsByClassName('first')[0];
var divPos= getPos(first).top;
console.log(divPos-scrTop)
if(divPos-scrTop<=100){
   nav.style.position='fixed'
//    nav.style.backgroundColor='red';
   nav.style.top=0;
}
if(divPos-scrTop>=100){
   nav.style.position='absolute'
//    nav.style.backgroundColor='yellow';
   nav.style.top='-100px';
}
}
function getPos(obj){
var l=t=0;
while(obj){
   l+=obj.offsetLeft;
   t+=obj.offsetTop;
   obj=obj.offsetParent;
}
return {left:l,top:t}


}










}