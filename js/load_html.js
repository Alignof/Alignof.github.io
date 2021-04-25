async function read_localfile(path){
	const response = await fetch(path, {});
	const text = await response.text();

	return text;
}

async function load_html(){
	about=await read_localfile("/pages/about.html");
	links=await read_localfile("/pages/links.html");
	welcome_message=await read_localfile("/pages/welcome_message.html");
	tree_result=await read_localfile("/pages/tree_result.html")
	ls_root=await read_localfile("/pages/ls_root.html");

	ls_project=await read_localfile("/pages/project/ls_project.html");
	page_IO_Unit=await read_localfile("/pages/project/IO_Unit.html");
	page_cc_sakura=await read_localfile("/pages/project/cc_sakura.html");
	page_brainwash=await read_localfile("/pages/project/Brainwash.html");
	page_msweeper=await read_localfile("/pages/project/msweeper.html");
	page_juggernaut=await read_localfile("/pages/project/juggernaut.html");
	page_repositories=await read_localfile("/pages/project/repositories.html");

	ls_activities=await read_localfile("/pages/activities/ls_activities.html");
	page_seccamp=await read_localfile("/pages/activities/seccamp.html");
	page_sechack365=await read_localfile("/pages/activities/sechack365.html");
	page_gurdian_project=await read_localfile("/pages/activities/gurdian_project.html");
	page_iot_hackathon=await read_localfile("/pages/activities/iot_hackathon.html");
	page_atcoder=await read_localfile("/pages/activities/atcoder.html");
	page_ctf=await read_localfile("/pages/activities/ctf.html");


	ls_hobby=await read_localfile("/pages/hobby/ls_hobby.html");
	page_comic=await read_localfile("/pages/hobby/comic.html");
	page_anime=await read_localfile("/pages/hobby/anime.html");
	page_motor_sports=await read_localfile("/pages/hobby/motor_sports.html");

	ls_seigenkousya=await read_localfile("/pages/hobby/seigenkousya/ls_seigenkousya.html");
	page_about_SIN=await read_localfile("/pages/hobby/seigenkousya/about_SIN.html");
	page_homepage=await read_localfile("/pages/hobby/seigenkousya/homepage.html");
	page_kirara_scraper=await read_localfile("/pages/hobby/seigenkousya/kirara_scraper.html");
	page_kirara_database=await read_localfile("/pages/hobby/seigenkousya/kirara_database.html");
}
