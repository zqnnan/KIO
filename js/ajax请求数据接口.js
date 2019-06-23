/*ajax 请求网络接口函数封装
options             封装参数的对象
options.type        请求方式get/post
options.dataType    请求的数据类型json数据 
*/
function ajax(options){
    //调用函数传递对象
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);
    var xhr;
    //第一步创建ajax对象
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        //兼容ie6
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //第二步，第三步：连接服务器 发送请求
    if(options.type == 'GET'){
        xhr.open('GET',options.url + '?' + params,true);
        xhr.send();
    }else if(options.type == 'POST'){
        //post不在地址栏中进行拼接
        xhr.open('POST',options.url,true);
        //设置提交内容的类型post 请求需设置请求头
        //客户端提交给服务器的文本内容编码是URI编码
        //除了标准字符之外，以16进制添加‘%’来表示
        xhr.setREquestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(params);
    }
    //第四步  接收返回值
    xhr.onreadystatechange= function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                if(options.dataType === "json"){
                    data = JSON.parse(data)
                    
                }
                //成功
                options.success && options.success(data)
            }else{
                //失败
                options.fail && options.fail(xhr.status)
            }
        }
    };

}

//encodeURIComponent()函数可将字符串作为URI组件进行转码
//不会对ASCII码，字母数字进行编码，也不会对ASCII码的标点符号进行编码
//比如： _ - ~ ! . ()
//其他的字符: ; ? : @ = + $ , # /这些字符用于分割URI组件的标点符号
//，都是要由一个或者多个十六进制符号转义序列替换的 


//用于格式化参数的函数
function formatParams(data){
        var arr = [];
        for(var name in data){
            arr.push(encodeURIComponent(name)+ '=' + encodeURIComponent(data[name]));
        }
        //实时更新缓存
        arr.push(('v='+Math.random()).replace('.',''));
        return arr.join('&');
}


