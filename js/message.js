//import { init } from 'ityped';

$(function(){
  $(".terminal").t({
  delay:2,                   // start delay in seconds [default:0]
  speed:40,                  // typing speed (ms) [default:50]
  speed_vary:false,          // 'human like' speed variation [default:false]
  mistype:false,	     // mistype rate: 1:N per char [default:false]
  locale:'en',               // keyboard layout (to fit mistype); supported: 'en' (english) or 'de' (german) [default:'en']
  blink:true,                // blink-interval in ms; if TRUE, speed*3  [default:true]
  blink_perm:false,          // permanent blinking? if FALSE, caret blinks only on delay/pause/finish [default:false]
  repeat:0,                  // repeat typing: if TRUE, infinite or N times [default:0]
  tag:'span',                // wrapper tag (.t-container, .t-caret) [default:'span']
  pause_on_click:true,       // pauses/continues typing on click/tap (elm) [default:false]
  
  // init callback (ready-to-type)
  init:function(elm){},        
  // typing callback
  typing:function(elm,chr_or_elm,left,total){},
  // finished callback
  fin:function(elm){}          
 
 })
});
