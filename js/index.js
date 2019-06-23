window.onload=function(){
(function nav(){
    var bain=document.getElementsByClassName('bain1')[0];
    var jt1=document.getElementsByClassName('jiantou1');
    var jttop=document.getElementsByClassName('jttop');
    var KOI=document.getElementsByClassName('KOIdw')[0];
    

   
        bain.onclick=function(){
          if( KOI.offsetHeight==0){
              jt1[0].style.opacity=0
              jttop[0].style.opacity=1
              KOI.style.height='41px';
         } else if(KOI.offsetHeight==41){
             jttop[0].style.opacity="0"
             jt1[0].style.opacity='1'
             KOI.style.height='0px';
           }
        }
   var bain2=document.getElementsByClassName('bain2')[0];
   var ABOUT=document.getElementsByClassName('ABOUTdw')[0];
        bain2.onclick=function(){
          if( ABOUT.offsetHeight==0){
              jt1[1].style.opacity=0
              jttop[1].style.opacity=1
              ABOUT.style.height='41px';
         } else if(ABOUT.offsetHeight==41){
             jttop[1].style.opacity="0"
             jt1[1].style.opacity='1'
             ABOUT.style.height='0px';
           }
        }

})()

// lunbo
        var outer = document.getElementById("outer");
        var outerHeight = outer.offsetHeight;
        var imgList = document.getElementById("imgList");
      
        var imgArr = imgList.getElementsByTagName("img");
        console.log(imgArr)
				//设置imgList的高度
				imgList.style.height = outerHeight*imgArr.length+"px";
				//默认显示图片的索引
				var index = 0;
        //获取所有的a
        var navDiv = document.getElementById("navDiv");
        var allA = navDiv.getElementsByTagName("a");
         var allspan = navDiv.getElementsByTagName("span");

        console.log (allA)
				//设置默认选中的效果
        allA[index].style.width = "25px";
        allspan[index].style.opacity = 1;


      
       

  //开启自动轮播

  autoChange(); 

  //为所有的超链接都绑定单击响应函数
  for(var i=0; i<allA.length;i++){
     allA[i].num = i;
    console.log(allA[i])
    allA[i].onclick = function(){
      // console.log(1)
      index = this.num;
      
      //设置选中的a
      // alert(1)
      setA();
      //使用move函数来切换图片
      move(imgList,"top",-outerHeight*(index+1),90);
    };
  }


  //创建一个方法用来设置选中的a
  function setA(){
    //判断当前索引是否是最后一张图片
    if(index >= imgArr.length - 2){
      //则将index设置为0
        index = 0;
        imgList.style.top = -outerHeight+"px";
    }
    // 判断当前索引是不是第一张
    if(index<0){
        index=imgArr.length-3
        imgList.style.top = -outerHeight*(index+1)+"px";
    }
    //遍历所有a，并将它们的背景颜色设置为红色
    for(var i=0 ; i<allA.length ; i++){
      allA[i].style.width = "10px";
      allspan[i].style.opacity=0
    }
    //将选中的a设置为黑色
    allA[index].style.width = "25px";
    allspan[index].style.opacity=1
    
 };


  //定义一个自动切换的定时器的标识
  var timer;
  //创建一个函数，用来开启自动切换图片
  function autoChange(){
    clearInterval(timer)
     timer = setInterval(function(){
      toTop()
    },6000);

   };



  // -----------右点击-
  function toTop(){
      index++;
      //判断index的值
      if(index >= imgArr.length){
        index = 0;
      }
      //执行动画，切换图片
      move(imgList,"top",-outerHeight*(index+1),30,function(){
        //修改导航按钮
        setA();        
      });
  }


 // 鼠标移入清除,移出带哦用
 navDiv.onmouseover=function(){
  clearInterval(timer)
  // outer.classList.remove("active")
  // alert(1)

}
navDiv.onmouseout=function(){
  autoChange();
}

/* function gunlun(){
  if(window.onmousewheel){
    window.onmousewheel=function(){
      outer.classList.remove("active")
    }
  }

}
gunlun() */
/* var body=document.body
function mousewheel() {
  function eFn(e) {
      e = e || window.event;
      outer.classList.add("active1");

  }
  //判断浏览器是否兼容滚轮事件（支持时为Null不支持时为undefined,此处判断是否为undefined）
  if(document.onmousewheel!==undefined){
      //对事件监听进行兼容(此处针对滚轮事件)
      body.addEventListener?body.addEventListener("mousewheel",eFn,false):body.attachEvent("onmousewheel",eFn);
  }else {
    //针对火狐（监听事件的兼容）
   body.addEventListener('DOMMouseScroll',eFn,false);
  }
}
// if(outer.style.transform =="scale(1.7)"){
    mousewheel()
    // alert(1)

// } */


 var text1=document.getElementById('text1');

 text1.onclick=function(){
  location='../html/text1.html'
 }


 var text2=document.getElementById('text2');
 text2.onclick=function(){
  location='../html/text2.html'
 }

 var text3=document.getElementById('text3');
 text3.onclick=function(){
  location='../html/text3.html'
 }











}