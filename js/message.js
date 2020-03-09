let now=new Date();
let Hour=("0"+now.getHours()).slice(-2);
let Min =("0"+now.getMinutes()).slice(-2);
let Sec =("0"+now.getSeconds()).slice(-2);

const terget=document.getElementById('console')
const head='<div><span class="name">Takana Norimasa </span>'+'<span class="path">~/portfolio > </span>';
let tail='<span class="time">['+Hour+':'+Min+':'+Sec+']</span></div>';

let wait='<span class="terminal">wait...</span>'
let hello=head+'<span class="terminal"><del>Hello! Hackers!<ins>0.7</ins></del>cat welcome</span>'+tail;

function time_update(){
	now=new Date();
	Hour=("0"+now.getHours()).slice(-2);
	Min =("0"+now.getMinutes()).slice(-2);
	Sec =("0"+now.getSeconds()).slice(-2);
	tail='<span class="time">['+Hour+':'+Min+':'+Sec+']</span></div>';
}

function message(text,delay){
	const p=new Promise((resolve,reject) => {
		setTimeout(function(){
			console.log(text);
			time_update();
			terget.insertAdjacentHTML('beforeend',text);
			resolve();
		},delay);
	});
	return p;
}


function main_stream(){
	message(wait,0)
		.then(()=>message(hello,2000))
		.then(()=>message(hello,2000));
}

console.log("start");
main_stream();

