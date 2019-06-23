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







    ajax({
        type:"get",
        dataType:"json",
        url:'https://www.easy-mock.com/mock/5cd91382a62bef6ed6852dd1/index/koi',
        success:function(responseData){
            var data=responseData.result;
            var html="";
            var html1="";
            var html2="";
            console.log(data);
            // data.forEach(function(txt){
                html+=`<div>
                        <h3 class="name">${data[0].title}</h3>
                        <h3 class="name">${data[0].subTitle}</h3>
                        <h2 class="name">${data[0].actor}</h2>
                        
                       </div>`;
                html1+=`<div>
                            <img src="${data[0].image}">
                        </div>`
                html2+=`<div>
                            <h3 class="quan">${data[0].quanqiu}</h3>
                            <p class="zi">${data[0].koi}</p>
                        </div>`
            // });

            
            document.getElementById('namefather').innerHTML=html;
            document.getElementById('tuimg').innerHTML=html1;
            document.getElementById('quanqiu').innerHTML=html2;
        }
    })
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
     var leftmove=document.getElementById('namefather');
   
   
    var leftmove1=document.getElementById('tuimg');
   

    var leftmove2=document.getElementById('quanqiu');
   
   console.log(Top)

    if(Top>=10){
        leftmove.classList.add('moveqa');
        
    } 
     if(Top>=400){
        leftmove1.classList.add('move');
        
    }
   if(Top>=1000){
        leftmove2.classList.add('move1');
       
    }

// 侧目录


    var scrTop=document.documentElement.scrollTop||document.body.scrollTop;//获取滚动的距离，或者说页面超出可视窗口的高度
    var nav=document.getElementById('nav');   
   var first=document.getElementsByClassName('first')[0];
   var divPos= getPos(first).top;
   console.log(divPos-scrTop)
   if(divPos-scrTop<=100){
       nav.style.position='fixed'
       // nav.style.backgroundColor='red';
       nav.style.top=0;
   }
   if(divPos-scrTop>=100){
       nav.style.position='absolute'
       // nav.style.backgroundColor='yellow';
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

// ------








}