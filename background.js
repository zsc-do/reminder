

let inters = [];




// 监听消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{

    let clear = request.clear;

    console.log(clear)

    if(clear){

       
        console.log(inters);


        for(let i = 0;i<inters.length;i++){
            clearInterval(inters[i]);
        }
    }


    let content = request.content;
    let mill = request.mill;
    let loop = request.loop;



    if(loop === "yes"){
        let inter = setInterval(function(){
            alert(content + "\n如要取消事件，请点击插件页面的clear按钮")
        },mill);

        inters.push(inter);

    }else if(loop === "no"){
        let inter = setTimeout(function(){
            alert(content + "\n如要取消事件，请点击插件页面的clear按钮")
        },mill);

        inters.push(inter);

    }

});





