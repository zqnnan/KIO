window.onload=function(){


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

// 滚动条

    // scrollTop
   /*  function showDiv(){
        var leftmove=document.getElementsByClassName('blcenter')[0];
        console.log(leftmove);
        var clients=window.innerHeight||document.documentElement.clientHeight;
        var divTop=leftmove.getBoundingClientRect().top;
        if(divTop<=clients){
            leftmove.classList.add('blcenter1')
        }else{
            leftmove.classList.remove('blcenter1')
        }
    }
    window.onmousewheel=showDiv(); */

    document.body.onscroll=function(){
         
        var Top=document.body.scrollTop||document.documentElement.scrollTop;
        var leftmove=document.getElementsByClassName('blcenter')[0];
        var rightmove=document.getElementsByClassName('brcenter')[0];
       
        var leftmove1=document.getElementsByClassName('b2-p')[0];
        var rightmove1=document.getElementsByClassName('swipe')[0];

        var leftmove2=document.getElementsByClassName('b3-p')[0];
        var rightmove2=document.getElementsByClassName('swiper')[0];

        var leftmove3=document.getElementsByClassName('b4-left-c')[0];
        var rightmove3=document.getElementsByClassName('box4-right')[0];

        var leftmove4=document.getElementsByClassName('title')[0];
        var rightmove4=document.getElementsByClassName('main')[0];

        var totop=document.getElementById('totop');
       console.log(Top)

        if(Top>=600){
            leftmove.classList.add('move');
            rightmove.classList.add('move');
        }
        if(Top>=1200){
            leftmove1.classList.add('active');
            rightmove1.classList.add('activea');
            totop.style.display="block";
        }else{
            totop.style.display="none";
        }
        if(Top>=1900){
            leftmove2.classList.add('active');
            rightmove2.classList.add('activea');
        }
        if(Top>=2900){
            leftmove3.classList.add('active1');
            rightmove3.classList.add('active11');
        }
        if(Top>=3400){
            leftmove4.classList.add('active1');
            rightmove4.classList.add('active11');
        }
        



    }
   
// 鼠标移入移出

  var dw=document.getElementsByClassName('main')[0];
  var li=dw.getElementsByTagName('li');

  var dw=document.getElementsByClassName('dw');
  var dw1=document.getElementsByClassName('dw1');
console.log(li)
  for(let i=0;i<li.length;i++){  
    li[i].onmouseover=function(){ 
        dw[i].style.left="100%"
        dw[i].style.transform="skew(-40deg) "
        dw[i].style.opacity=0;
        console.log(i)
    }
    li[i].onmouseout=function(){
       dw1[i].style.height='516px';
        dw1[i].style.opacity=1;
        console.log(1) 

   /*  setTimeout(function (){
        dw[i].style.opacity=1;
        dw[i].style.transition="all 0s" 
        dw[i].style.transform="skew(0deg) "
    },1000) */

    }

}  
   



var indexx=document.getElementById('indexx');
indexx.onclick=function(){
 location='../html/index.html'
}















}