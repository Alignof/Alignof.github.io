let now=new Date();
let Hour=("0"+now.getHours()).slice(-2);
let Min =("0"+now.getMinutes()).slice(-2);
let Sec =("0"+now.getSeconds()).slice(-2);

let counter=0;
const terget=document.getElementById('console');
const head='<div><span class="name">Takana Norimasa </span>'+'<span class="path">~/portfolio > </span>';
let tail='<span class="time">['+Hour+':'+Min+':'+Sec+']</span></div>';

let wait='<span class="terminal_0"><font color="#FFFFFF">wait...</font></span>'
let hello=head+'<span class="terminal_1"><font color="#FFFFFF"><del>Hello! Hackers!<ins>0.7</ins></del>cat welcome</font></span>'+tail;


function tjs(num){
	$((".terminal_"+num)).t({
		delay:1,		// start delay in seconds [default:0]
		speed:40,               // typing speed (ms) [default:50]
		speed_vary:false,	// 'human like' speed variation [default:false]
		mistype:false,		// mistype rate: 1:N per char [default:false]
		locale:'en',            // keyboard layout (to fit mistype); supported: 'en' (english) or 'de' (german) [default:'en']
		caret:true,		// caret; can be HTML; associated CSS class:.t-caret; default (TRUE): ▎ (\u258e)
		blink:true,             // blink-interval in ms; if TRUE, speed*3  [default:true]
		blink_perm:false,       // permanent blinking? if FALSE, caret blinks only on delay/pause/finish [default:false]
		repeat:0,               // repeat typing: if TRUE, infinite or N times [default:0]
		tag:'span',             // wrapper tag (.t-container, .t-caret) [default:'span']
		pause_on_click:false,   // pauses/continues typing on click/tap (elm) [default:false]

		// init callback (ready-to-type)
		init:function(elm){},        
		// typing callback
		typing:function(elm,chr_or_elm,left,total){},
		// finished callback
		fin:function(elm){$('terminal_'+num).find('.t-caret').css({opacity:0});}          
	})
}

function cmd(command){
	return head+'<span class="'+"terminal_"+counter+'">'+'<font color="#FFFFFF">'+command+'</font>'+'</span>'+tail;
}

function cmd_path(path,command){
	let _head='<div><span class="name">Takana Norimasa </span>'+'<span class="path">~/portfolio/'+path+' > </span>';
	return _head+'<span class="'+"terminal_"+counter+'">'+'<font color="#FFFFFF">'+command+'</font>'+'</span>'+tail;
}

function time_update(){
	now=new Date();
	Hour=("0"+now.getHours()).slice(-2);
	Min =("0"+now.getMinutes()).slice(-2);
	Sec =("0"+now.getSeconds()).slice(-2);
	tail='<span class="time">['+Hour+':'+Min+':'+Sec+']</span></div>';
}

function message(text,delay){
	const p=new Promise(async(resolve,reject) => {
		time_update();
		terget.insertAdjacentHTML('beforeend',text);
		tjs(counter);
		scroll_bottom();
		
		await new Promise(r=>setTimeout(r, delay));
		counter++;
		resolve();
	});
	return p;
}

function scroll_bottom(){
		const targetElement=document.getElementById('blank');
		const rectTop=targetElement.getBoundingClientRect().top
		const offsetTop=window.pageYOffset
		const buffer=50
		const top=rectTop + offsetTop - buffer
		window.scrollTo({top,behavior: "smooth"});
}

function reload_iframely(){
	let el=document.createElement('script');
	el.src="js/embed.js";
	document.body.appendChild(el);
}

function reload_contribution(){
	let el=document.createElement('script');
	el.src="js/widget.min.js";
	document.body.appendChild(el);
}

async function main_stream(){
	await message(wait,2800);
	await message(hello,4600);
	await message(welcome_message,0);
	await message(cmd("whoami"),2000);
	await message(about,0);
	await message(cmd("ls -a"),2000);
	await message(ls_root,0);
}

console.log("start");
main_stream();

