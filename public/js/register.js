//查找绑定事件元素
    /*var mobile_verify=document.querySelector(".mobile_verify>.choose_area>.select_module");
    var select_pop=document.querySelector(".mobile_verify>.choose_area>.select_pop");
    //绑定事件
    select_pop.onfocus=mobile_verify.onclick=function(){
        //  console.log(e.target);
         console.log(select_pop);
         select_pop.className+=" zindex_show";
        //查找目标元素
        //修改元素
    }*/
    //当鼠标划入
    /*document.onclick=function(e){
        if(e.target!==document.querySelector(".mobile_verify>.choose_area")){
         select_pop.className=select_pop.className.replace(/ zindex_show/,"");
        console.log('外',e.target);
        }
    }*/
    //jquery实现隐藏与显示
    //若.select_pop隐藏，当鼠标点击.select_module时，显示，否则隐藏
    $(".select_pop").prev().click(function(){
        $('.select_pop').is(":hidden")?
            $('.select_pop').show()
        : $('.select_pop').hide()
    })
    //当鼠标划入.choose_area,则显示.select_pop,划出时隐藏.select_pop
    $(".select_module").mouseenter(function(){
        console.log('.select_area 隐藏');
        $(".select_pop").show();
    }).mouseleave(function(){
        $('.select_pop').hide()
    })
    $(".select_pop").mouseenter(function(){
        $(".select_pop").show();
    }).mouseleave(function(){
        $(".select_pop").hide()
    })

//按列表选择地区
$(".select_pop>ol>li").click(function(){
    console.log($(this));
    $target=$(this);
    console.log($(this).children("span").text())
    $(".select_module").text($(this).children("span").text())
})