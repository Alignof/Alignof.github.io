let now=new Date();
let Hour=("0"+now.getHours()).slice(-2);
let Min =("0"+now.getMinutes()).slice(-2);
let Sec =("0"+now.getSeconds()).slice(-2);

const terget=document.getElementById('console')
const head='<div><span class="name">Takana Norimasa </span>'+'<span class="path">~/portfolio > </span>';
let tail='<span class="time">['+Hour+':'+Min+':'+Sec+']</span></div>';

let wait='<span class="terminal">wait...</span>'
let hello=head+'<span class="terminal"><del>Hello! Hackers!<ins>0.7</ins></del>cat welcome</span>'+tail;

let welcome_message=
'<pre id="AA" lang="en"><font color="yellow">'+
" __          __  _                                   _                             <br>"+
" \\ \\        / / | |                                 | |                            <br>"+
"  \\ \\  /\\  / /__| | ___   ___ ___  _ __ ___   ___   | |_ ___                       <br>"+
"   \\ \\/  \\/ / _ \\ |/ _ \\ / __/ _ \\| '_ ` _ \\ / _ \\  | __/ _ \\                      <br>"+
"    \\  /\\  /  __/ | (_) | (_| (_) | | | | | |  __/  | || (_) |                     <br>"+
"     \\/  \\/ \\___|_|\\___/ \\___\\___/|_| |_| |_|\\___|   \\__\\___/    __      _ _       <br>"+
"                                                           | |  / _|    | (_)      <br>"+
"                        _ __ ___  _   _    _ __   ___  _ __| |_| |_ ___ | |_  ___  <br>"+
"                       | '_ ` _ \\| | | |  | '_ \\ / _ \\| '__| __|  _/ _ \\| | |/ _ \\ <br>"+
"                       | | | | | | |_| |  | |_) | (_) | |  | |_| || (_) | | | (_) |<br>"+
"                       |_| |_| |_|\\__, |  | .__/ \\___/|_|   \\__|_| \\___/|_|_|\\___/ <br>"+
"                                   __/ |  | |                                      <br>"+
"                                  |___/   |_|                                      </font></pre>"+
"<pre>                                                             <font size=4 color='red'>2020.03.10 create by Takana Norimasa</font></pre>";

let about=
'<div id="about">'+
"<pre>Name: Takana Norimasa</pre>"+
"<pre>Age: 18</pre>"+
"<pre>Nationality: Japan</pre>"+
"<pre>Affiliation: National Institute of Technology, Kisarazu College</pre>"+
"<pre>Language: C,C++,Perl,Python,vimscript</pre>"+
"<pre>Interests: cyber security,malware analysis,compiler,handmade cpu,I/O device,ESP32,etc...</pre>"+
"</div>";

let links=
'<div id="about">'+
'<pre><i class="far fa-envelope"></i> official: j17423@kisarazu.kosen-ac.jp</pre>'+
'<pre><i class="far fa-envelope"></i> sub: neuromancer_wg@outlook.jp</pre>'+
'<pre><font color="cyan"><i class="fab fa-twitter-square"></i></font> [main/technology]:<a href="https://twitter.com/Seigenkousya_"> @seigenkousya_</a></pre>'+
'<pre><font color="cyan"><i class="fab fa-twitter-square"></i></font> [sub/tech&anime]:<a href="https://twitter.com/Seigenkousya"> @seigenkousya</a></pre>'+
'<pre><i class="fab fa-github-square"></i> [main/works]:<a href="https://github.com/Takana-Norimasa"> Takana-Norimasa</a></pre>'+
'<pre><i class="fab fa-github-square"></i> [sub/hobby]:<a href="https://github.com/Seigenkousya"> Seigenkousya</a></pre>'+
'<pre><span class="fa-stack" style="color:#4cb10d;font-size:50%"><i class="fa fa-square fa-stack-2x"></i><i class="fa fa-search fa-stack-1x fa-inverse fa-2x"></i></span><a href="https://qiita.com/Seigenkousya"> Seigenkousya</a></pre>'+
'</div>';

function cmd(command){
	return head+'<span class="terminal">'+command+'</span>'+tail;
}

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
			console.log(tail);
			time_update();
			terget.insertAdjacentHTML('beforeend',text);
			resolve();
		},delay);
	});
	return p;
}

async function main_stream(){
	await message(wait,0);
	await message(hello,0);
	await message(welcome_message,0);
	await message(cmd("whoami"),0);
	await message(about,0);
	await message(cmd("ls"),0);
	await message(cmd("clear"),0);
	await message(cmd("cat links"),0);
	await message(links,0);
}

console.log("start");
main_stream();

