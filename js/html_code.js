
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
"<pre>                                                             <font size=4 color='red'>2020.03.10 create by Takana Norimasa</font></pre>"+
"<pre><font size=4 color='white'>Usage:	click the output of 'ls'\n	(Click .. to return to the directory one level higher)</font></pre>";

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
'<pre><font color="cyan"><i class="fab fa-twitter-square"></i></font> [main/technology]:<a href="https://twitter.com/lIlIIllIIIlIlIl"> @<font face="Arial" >lIlIIllIIIlIlIl</font></a></pre>'+
'<pre><font color="cyan"><i class="fab fa-twitter-square"></i></font> [sub/tech&anime]:<a href="https://twitter.com/Seigenkousya"> @seigenkousya</a></pre>'+
'<pre><i class="fab fa-github-square"></i> [main/works]:<a href="https://github.com/Takana-Norimasa"> Takana-Norimasa</a></pre>'+
'<pre><i class="fab fa-github-square"></i> [sub/hobby]:<a href="https://github.com/Seigenkousya"> Seigenkousya</a></pre>'+
'<pre><span class="fa-stack" style="color:#4cb10d;font-size:50%"><i class="fa fa-square fa-stack-2x"></i><i class="fa fa-search fa-stack-1x fa-inverse fa-2x"></i></span><a href="https://qiita.com/Seigenkousya"> Seigenkousya</a></pre>'+
'</div>';

let ls_root=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="down_directory">..</button>   '+
'<button class="text_link" type="button" onclick="about_me();">about_me</button>   '+
'<button class="text_link" type="button" onclick="contact_and_links();">contact_and_links</button>   '+
'<button class="text_link" type="button" onclick="welcome();">welcome</button>   '+
'<button class="cd_link" type="button" onclick="project();">Project/</button>   '+
'<button class="cd_link" type="button" onclick="activities();">Activities/</button>   '+
'<button class="cd_link" type="button" onclick="hobby();">Hobby/</button></pre></span></div>';

let ls_project=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_root(\'Project\');">..</button>   '+
'<button class="text_link" type="button" onclick="IO_Unit();">I/O_Unit</button>   '+
'<button class="text_link" type="button" onclick="timer_stoper();">Timer_Stoper</button>   '+
'<button class="text_link" type="button" onclick="repojitories();">Repositories</button>   '+
'</pre></span></div>';

let ls_activities=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_root(\'Activities\');">..</button>   '+
'<button class="text_link" style="color:#8AE234" type="button" onclick="chronology();">chronology</button>   '+
'<button class="text_link" type="button" onclick="sechack365();">SecHack365</button>   '+
'<button class="text_link" type="button" onclick="guardian();">Guardian project</button>   '+
'<button class="text_link" type="button" onclick="IoT_Hackathon();">LoRaWAN IoT Hackathon</button>   '+
'<button class="text_link" type="button" onclick="atcoder();">Atcoder</button>   '+
'<button class="text_link" type="button" onclick="CTF();">CTF</button>   '+
'</pre></span></div>';

let ls_hobby=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_root(\'Hobby\');">..</button>   '+
'<button class="text_link" type="button" onclick="comic();">comic</button>   '+
'<button class="text_link" type="button" onclick="anime();">anime</button>   '+
'<button class="text_link" type="button" onclick="motor_sports();">motor sports</button>   '+
'<button class="cd_link" type="button" onclick="SIN_dir();">Seigenkousya/</button>   '+
'</pre></span></div>';

let ls_seigenkousya=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_root(\'Seigenkousya\');">..</button>   '+
'<button class="text_link" type="button" onclick="about_SIN();">about_us</button>   '+
'<button class="text_link" type="button" onclick="blog();">blog</button>   '+
'<button class="text_link" style="color:red" type="button" onclick="SIN_link();">Seigenkousya.html</button>   '+
'<button class="text_link" type="button" onclick="lilics();">Overview_of_modern_lilics</button>   '+
'<button class="text_link" type="button" onclick="thesis();">doubiju_thesis</button>   '+
'<button class="text_link" type="button" onclick="kirara_data();">KiraraData.com</button>   '+
'</pre></span></div>';


