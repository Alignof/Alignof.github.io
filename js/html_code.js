
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
'<button class="text_link" style="color:#8AE234" type="button" onclick="tree();">tree.sh</button>   '+
'<button class="cd_link" type="button" onclick="project();">Project/</button>   '+
'<button class="cd_link" type="button" onclick="activities();">Activities/</button>   '+
'<button class="cd_link" type="button" onclick="hobby();">Hobby/</button></pre></span></div>';

let ls_project=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_root(\'Project\');">..</button>   '+
'<button class="text_link" type="button" onclick="IO_Unit();">I/O_Unit</button>   '+
'<button class="text_link" type="button" onclick="timer_stoper();">Juggernaut</button>   '+
'<button class="text_link" type="button" onclick="repojitories();">Repositories</button>   '+
'</pre></span></div>';

let page_IO_Unit=
'<div style="color:white;font-size:100%;">'+
'<h2>I/O Unit project</h2>'+
'<h3>about</h3>'+
'<pre style="line-height:120%">'+
'I/O Unit project は既存の入出力装置のセキュリティ上の欠点を克服するようなセキュアな入出力装置の開発を目的としたプロジェクトです。\n'+
'セキュアな入力装置の開発、セキュアな出力装置の開発、2つを組み合わせたI/O Unitの開発の3つから構成されます。\n'+
'</pre>'+
'<ul>'+
'	<li><span>ショルダーハッキングや画面ののぞき見のリスクを低減できるようなセキュアな入出力装置を開発する</span></li>'+
'	<li><span>開発した入力装置と出力装置をまとめて1つのデバイスとして機能させ、処理装置から入出力装置を独立させることでより自由なデバイスの形を模索する</span></li>'+
'	<li><span>開発したデバイスの詳細な作り方を公開しプログラムから工作、電子回路まで学べるような学習サイトを作成、公開する</span></li>'+
'</ul>'+
'<pre style="line-height:120%">'+
'の3つが目標です。'+
'</pre>'+
'<h3>repository</h3>'+
'<pre style="line-height:120%">'+
'詳しくプロジェクトの概要とデバイスの作り方についてはgithubの<a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit/">Readme</a>と<a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit/wiki">wiki</a>を参照。'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 100px; width:500px; padding-bottom: 0;"><a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2FTakana-Norimasa%2FSecure_I-O_Unit&key=dd60c159c87f40f1ecca839b51b281e8"></a></div></div>'+
'<h3>SecHack365</h3>'+
'<pre style="line-height:120%">'+
'このプロジェクトは2019年度SecHack365の活動の一環として始まりました。\n'+
'ポスターは<a>こちら</a>。（※発表され次第ここに載せます）\n'+
'SecHack365に関しては以下のリンクを参照。'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 100px; width:500px; padding-bottom: 0;"><a href="https://sechack365.nict.go.jp/" data-iframely-url="https://cdn.iframe.ly/crKU29v?iframe=card-small"></a></div></div>'+
'<pre style="line-height:120%">'+
'僕自身のSecHackでの活動については、~/portfolio/Activity/SecHack365に書いてあります。'+
'</pre>';

let page_jaggernaut=
'<div style="color:white;font-size:100%;">'+
'<h2>Juggernaut</h2>'+
'<h3>about</h3>'+
'<pre style="line-height:120%">'+
'Juggernautは時限爆弾型のタイマーの構造を与えられた回路図とプログラムから推測し、規定内の操作を行うことでタイマーを停止させる（解除する）競技です。\n'+
'解除する側には回路図やデータシートを読む力、プログラムを素早く間違いなく解読する力が求められ、教育面での効果が期待できます。\n'+
'解除するまでの時間を競う競技型や、お互いに装置を作って解除しあってワイワイするイベント型を想定しています。\n'+
'</pre>'+
'<h3>rule</h3>'+
'主なルールは以下の通りです。'+
'<ul>'+
'	<li><span>競技に使われるタイマー型の電子回路を「装置」と呼ぶ</span></li>'+
'	<li><span>装置を用意する側をgiver、装置を解除する側をsolverと呼ぶ</span></li>'+
'	<li><span>装置に取り付けられたタイマーが0になる前にプログラムで決められた状態になった場合「解除」となる</span></li>'+
'	<li><span>装置に取り付けられたタイマーが0になるもしくはプログラムで定められた手順から外れた状態になった場合「解除失敗」となる</span></li>'+
'	<li><span>装置は以下の部分に分けられる</span></li>'+
'	<ul>'+
'		<li><span>規定のマイコンを載せた制御部</span></li>'+
'		<li><span>6桁の7セグLEDや解除状態を示すLEDなど競技進行に必要な部品をを載せた表示部</span></li>'+
'		<li><span>ユーザ(giver)が自由に回路を組み制御部に入力を与える競技部</span></li>'+
'	</ul>'+
'	<li><span>大まかな禁止事項は以下の通り</span></li>'+
'	<ul>'+
'		<li><span>装置には必ず規定で定められた共通の表示部を設置しなくてはならない</span></li>'+
'		<li><span>solverは装置の表示部に触れてはならない</span></li>'+
'		<li><span>事前に決められた本数のワイヤを超えて使用することはできない</span></li>'+
'		<li><span>部品や配線の確認が困難となるような妨害行為（型番や結線部を何かで隠す）は認められない</span></li>'+
'	</ul>'+
'</ul>'+
'<pre style="line-height:120%">'+
'詳しくはgithubのリポジトリを参照してください。'+
'</pre>'+
'<h3>repository</h3>'+
'<pre style="line-height:120%">'+
'製作中...'+
'正式なルールは<a href=\"\">wiki（準備中）</a>を参照。'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; width:500px; padding-bottom: 0;"><a href="https://github.com/Takana-Norimasa/Juggernaut" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2FTakana-Norimasa%2FJuggernaut&key=dd60c159c87f40f1ecca839b51b281e8"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>'+
'</div>';

let page_repositories=
'<div style="color:white;font-size:100%;">'+
'<h2>Repositories</h2>'+
'<h3>about</h3>'+
'すべてのプロジェクトの一覧です。'+
'<h3>I/O Unit</h3>'+
'<pre style="line-height:120%">'+
'I/O Unit project は既存の入出力装置のセキュリティ上の欠点を克服するようなセキュアな入出力装置の開発を目的としたプロジェクトです。\n'+
'セキュアな入力装置の開発、セキュアな出力装置の開発、2つを組み合わせたI/O Unitの開発の3つから構成されます。\n'+
'</pre>'+
'<ul>'+
'	<li><span>ショルダーハッキングや画面ののぞき見のリスクを低減できるようなセキュアな入出力装置を開発する</span></li>'+
'	<li><span>開発した入力装置と出力装置をまとめて1つのデバイスとして機能させ、処理装置から入出力装置を独立させることでより自由なデバイスの形を模索する</span></li>'+
'	<li><span>開発したデバイスの詳細な作り方を公開しプログラムから工作、電子回路まで学べるような学習サイトを作成、公開する</span></li>'+
'</ul>'+
'<pre style="line-height:120%">'+
'の3つが目標です。'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 100px; width:500px; padding-bottom: 0;"><a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2FTakana-Norimasa%2FSecure_I-O_Unit&key=dd60c159c87f40f1ecca839b51b281e8"></a></div></div>'+
'<h3>Juggernaut</h3>'+
'<pre style="line-height:120%">'+
'Juggernautは時限爆弾型のタイマーの構造を与えられた回路図とプログラムから推測し、規定内の操作を行うことでタイマーを停止させる（解除する）競技です。\n'+
'解除する側には回路図やデータシートを読む力、プログラムを素早く間違いなく解読する力が求められ、教育面での効果が期待できます。\n'+
'解除するまでの時間を競う競技型や、お互いに装置を作って解除しあってワイワイするイベント型を想定しています。\n'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; width:500px; padding-bottom: 0;"><a href="https://github.com/Takana-Norimasa/Juggernaut" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2FTakana-Norimasa%2FJuggernaut&key=dd60c159c87f40f1ecca839b51b281e8"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>'+
'<h3>contributions</h3>'+
'<a href="http://github.com/Takana-Norimasa" class="gh-contributions" data-gh-username="Takana-Norimasa" target="_blank">Takana-Norimasa\'s contributions</a>'+
'</div>';

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

let page_sechack365=
'<div style="color:white;font-size:100%;">'+
'<h2>SecHack365</h2>'+
'<h3>about</h3>'+
'<pre style="line-height:120%">'+
'2019年度SecHack365の思索駆動コースに選出され「セキュアな入出力装置の開発」というテーマで一年間開発を行っていました。\n'+
'SecHack365に関しては以下のリンクを参照してください。'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 100px; width:500px; padding-bottom: 0;"><a href="https://sechack365.nict.go.jp/" data-iframely-url="https://cdn.iframe.ly/crKU29v?iframe=card-small"></a></div></div>'+
'<pre style="line-height:120%">'+
'参加録はこちら。'+
"<a href='https://takana-norimasa.github.io/blog/posts/sechack365/'>SecHack365 '19 参加録 – 303 See Other</a>"+
'</pre>'+
'<h3>output</h3>'+
'<pre style="line-height:120%">'+
'詳しくプロジェクトの概要とデバイスの作り方についてはgithubの<a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit/">Readme</a>と<a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit/wiki">wiki</a>を参照。'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 80px; width:500px; padding-bottom: 0;"><a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2FTakana-Norimasa%2FSecure_I-O_Unit&key=dd60c159c87f40f1ecca839b51b281e8"></a></div></div>'+
'<pre style="line-height:120%">'+
'ポスターは<a href="https://sechack365.nict.go.jp/achievement/2019/index.html#c04">こちら</a>。'+
'</pre></div>';

let page_gurdian_project=
'<div style="color:white;font-size:100%;">'+
'<h2>Guardian Project</h2>'+
'<h3>about</h3>'+
'<pre style="line-height:120%">'+
'2018年 1/15/ - 1/17 でトレンドマイクロ社のガーディアンプロジェクトというイベントに参加してきました。\n'+
'リンク：<a href="https://www.trendmicro.com/ja_jp/campaigns/guardian.html">https://www.trendmicro.com/ja_jp/campaigns/guardian.html</a>\n\n'+
'基本的にはインシデントレスポンスをメインとして実践的演習でした。\n'+
'実際に顧客との対応の部分までしっかり演習ができていてすっごく良かったです。\n'+
'ログ解析から顧客対応、プレゼンテーションまで多くのことを学べました。\n'+
'特にプレゼンテーションの発表の部分は今でもこの経験が大きく役立っています。\n'+
'</pre></div>';

let page_iot_hackathon=
'<div style="color:white;font-size:100%;">'+
'<h2>LoRaWAN IoT Hackathon</h2>'+
'<h3>about</h3>'+
'<pre style="line-height:120%">'+
'<a href="https://www.senseway.net/all-events/event/kasiwanoha-iot-hackathon-event/">LoRaWAN™を使った 柏の葉IoTハッカソン</a>に参加し「地域コミュニティと防災無線を兼ねた市営放送の提案」という提案でアイデア賞をいただきました。\n'+
'受賞発表：<a href="https://www.senseway.net/all-events/event/kasiwanoha-iot-hackathon-winners/">https://www.senseway.net/all-events/event/kasiwanoha-iot-hackathon-winners/</a>\n'+
'大会についてはこちら。</pre>\n'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; width:600px; padding-bottom: 0;"><a href="https://www.senseway.net/all-events/event/kasiwanoha-iot-hackathon-event/" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.senseway.net%2Fall-events%2Fevent%2Fkasiwanoha-iot-hackathon-event%2F&amp;key=dd60c159c87f40f1ecca839b51b281e8&amp;iframe=card-small"></a></div></div><script async src="https://cdn.iframe.ly/embed.js" charset="utf-8"></script>'+
'<h3>output</h3>'+
'<pre style="line-height:120%">'+
'LaRaWANを使った防災無線と地域コミュニティを兼ねた地域放送を考案しました。\n'+
'有事の際に情報化から取り残された高齢者が有用な情報にアクセスできない問題に着目し高齢者向けの情報提供の場を提案しました。\n'+
'普段は市のお知らせや情報を発信し災害時には避難情報を掲載するなど市の情報塔として機能させその費用を普段の地域の企業の広告料で賄うことで費用の削減を狙いました。\n'+
'市の防災無線の役割を肩代わりするだけでなく、地域活動の広告塔としての役割も果たします。\n'+
'</pre></div>';

let page_atcoder=
'<div style="color:white;font-size:100%;">'+
'<h2>Atcoder</h2>'+
'<h3>about</h3>'+
'<pre style="line-height:120%">'+
'競技プログラミングをはじめました。\n'+
'自分はこういうのがすごい苦手なんだと分かりました。\n'+
'これからちゃんと勉強して精進します。（猛省）\n'+
'いつかはここに書いても恥ずかしくないくらいの実力になりたいですね...\n</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height:140px; width:600px; padding-bottom: 0;"><a href="https://atcoder.jp/users/Neuromancer" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fatcoder.jp%2Fusers%2FNeuromancer&amp;key=dd60c159c87f40f1ecca839b51b281e8"></a></div></div><script async src="https://cdn.iframe.ly/embed.js" charset="utf-8"></script></div><br>';

let page_ctf=
'<div style="color:white;font-size:100%;">'+
'<h2>CTF</h2>'+
'<h3>about</h3>'+
'<pre style="line-height:120%">'+
'過去に参加したCTFについて紹介します。</pre>'+
'<h4><a href="https://sckosen2017.kisarazu.ac.jp/">KOSEN セキュリティ・コンテスト 2017</a></h4>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height:140px; width:600px; padding-bottom: 0;"><a href="https://sckosen2017.kisarazu.ac.jp/" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fsckosen2017.kisarazu.ac.jp%2F&amp;key=dd60c159c87f40f1ecca839b51b281e8&amp;iframe=card-small"></a></div></div><script async src="https://cdn.iframe.ly/embed.js" charset="utf-8"></script>'+
'<pre style="line-height:120%">'+
'<a href="https://153.126.191.68/">KOSEN セキュリティ・コンテスト 2018</a>'+
'<h4><a href="https://www.seccon.jp/2019/seccon2019/seccon_reiwa_ctf.html">令和CTF</a></pre></h4>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height:140px; width:600px; padding-bottom: 0;"><a href="https://www.seccon.jp/2019/seccon2019/seccon_reiwa_ctf.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.seccon.jp%2F2019%2Fseccon2019%2Fseccon_reiwa_ctf.html&amp;key=dd60c159c87f40f1ecca839b51b281e8&amp;iframe=card-small"></a></div></div><script async src="https//cdn.iframe.ly/embed.js" charset="utf-8"></script>'+
'<pre style="line-height:120%">'+
'writeup:<a href="https://qiita.com/Seigenkousya/items/2dc344c3bbe99b3b3d6c">https://qiita.com/Seigenkousya/items/2dc344c3bbe99b3b3d6c</a></pre>'+
'<h4>KOSEN セキュリティ・コンテスト 2019</h4>'+
'writeup:<a href="https://qiita.com/Seigenkousya/items/46078afbec2ddfc09d3f">https://qiita.com/Seigenkousya/items/46078afbec2ddfc09d3f</a>'+
'<h4><a href="https://www.seccon.jp/2019/seccon2019/seccon_ctf_2019_quals.html">SECCON CTF 2019 公式予選</a></pre></h4>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height:140px; width:600px; padding-bottom: 0;"><a href="https://www.seccon.jp/2019/seccon2019/seccon_ctf_2019_quals.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.seccon.jp%2F2019%2Fseccon2019%2Fseccon_ctf_2019_quals.html&amp;key=dd60c159c87f40f1ecca839b51b281e8&amp;iframe=card-small"></a></div></div><script async src="https://cdn.iframe.ly/embed.js" charset="utf-8"></script>'+
'<pre style="line-height:120%">'+
'writeup:<a href="https://qiita.com/Seigenkousya/items/09cfe476a775f41d24e3">https://qiita.com/Seigenkousya/items/09cfe476a775f41d24e3</a></pre></div>';

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
'<button class="cd_link" type="button" onclick="back_to_hobby();">..</button>   '+
'<button class="text_link" type="button" onclick="about_SIN();">about_us</button>   '+
'<button class="text_link" type="button" onclick="blog();">blog</button>   '+
'<button class="text_link" style="color:red" type="button" onclick="SIN_link();">Seigenkousya.html</button>   '+
'<button class="text_link" type="button" onclick="lilics();">Overview_of_modern_lilics</button>   '+
'<button class="text_link" type="button" onclick="thesis();">doubiju_thesis</button>   '+
'<button class="text_link" type="button" onclick="kirara_data();">KiraraData.com</button>   '+
'</pre></span></div>';

let tree_result=
'<pre style="color:white;font-size:110%">'+
'.\n'+
'├── about_me\n'+
'├── contact_and_links\n'+
'├── welcome\n'+
'├── tree.sh\n'+
'├── <font color="#729FCF">Project/</font>\n'+
'│   ├── IO Unit\n'+
'│   ├── Juggernaut\n'+
'│   └── Repositories\n'+
'├── <font color="#729FCF">Activities/</font>\n'+
'│   ├── <font color="#8AE234">chronlogy</font>\n'+
'│   ├── SecHack365\n'+
'│   ├── Guardian project\n'+
'│   ├── LoRaWAN IoT Hackathon\n'+
'│   ├── Atcoder\n'+
'│   └── CTF\n'+
'└── <font color="#729FCF">Hobby/</font>\n'+
'     ├── comic\n'+
'     ├── anime\n'+
'     ├── motor sports\n'+
'     └── <font color="#729FCF">Seigenkousya/</font>\n'+
'          ├── about us\n'+
'          ├── blog\n'+
'          ├── <font color="red">seigenkousya.html</font>\n'+
'          ├── Overview_of_modern_lilics\n'+
'          ├── doubiju_thesis\n'+
'          └── KiraraData.com';


