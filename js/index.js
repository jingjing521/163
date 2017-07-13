$(function(){
  // 调用fullpage.js插件
  $('#fullpage').fullpage({
        // sectionsColor:['purple','pink','orange','yellow'],
        // paddingTop:'50',
        // fixedElements:'.nav',
        navigationTooltips: ['首页', '央视报道', '视觉', '交互', '皮肤', '功能','待办邮件', '联系人邮件', '科技', '连接易信','马上体验',],
        navigation:true,
        // autoScrolling:false,
        onLeave:function(index,next,dir){
          if(next==2&&dir=='down'){
            $('#section-2 .textArea').removeClass('act').addClass('act1');
          }
          else if(index==2&&dir=='up'){
            $('#section-2 .textArea').removeClass('act1').addClass('act');
          }else if(index==2&&dir=='down'){
            $('#section-2 .textArea').removeClass('act').addClass('act1');
          }else if(index=3&&dir=='up'){
            $('#section-2 .textArea').removeClass('act1').addClass('act');
          }

        },
    });
})
