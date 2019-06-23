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
// 数据据请求
ajax({
    type:"get",
    dataType:"json",
    url:'https://www.easy-mock.com/mock/5cd91382a62bef6ed6852dd1/index/koi',
    success:function(responseData){
        var data=responseData.result1;
        var html="";
        var html1="";
        
        console.log(data);
        data.forEach(function(txt){
            html+=`<div>
                    <span class="name tran1">${txt.title1}</span>
                    <span class="name tran2">${txt.title2}</span>
                    <span class="name tran3">${txt.title3}</span>
                    <span class="name tran4">${txt.title4}</span>
                   </div>`;
           
          
        }); 
        document.getElementById('box').innerHTML=html;

        var data1=responseData.result;
        
        var html1="";
        console.log(data1);
        // data.forEach(function(txt){
            html1+=`<div>
                    <h3 class="name">${data1[2].title}</h3>
                    <h3 class="name">${data1[2].subTitle}</h3>
                    <h2 class="name">${data1[2].actor}</h2>
                   </div>`;
        // }); 
        document.getElementById('namefather').innerHTML=html1;
    }
})


// 页面跳转
var indexx=document.getElementById('indexx');
indexx.onclick=function(){
location='../html/index.html'
}

// 回顶部
document.body.onscroll=function(){
         
    var Top=document.body.scrollTop||document.documentElement.scrollTop;
    var totop=document.getElementById('totop');
    console.log(Top)
     if(Top>=500){
        totop.style.display="block";
    }else{
        totop.style.display="none";
    }
//   侧面导航
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

























}

