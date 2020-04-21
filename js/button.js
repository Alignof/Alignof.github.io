/*------------------root--------------------------*/
async function about_me(){
	await message(cmd("cat about_me"),2000);
	await message(about,2000);
	await message(cmd("ls -a"),2000);
	await message(ls_root,0);
}

async function back_to_root(path){
	await message(cmd_path(path,"cd .."),2000);
	await message(cmd("ls -a"),2000);
	await message(ls_root,0);
}

async function contact_and_links(){
	await message(cmd("cat contact_and_links"),2000);
	await message(links,2000);
	await message(cmd("ls -a"),2000);
	await message(ls_root,0);
}

async function welcome(){
	await message(cmd("cat welcome"),2000);
	await message(welcome_message,2000);
	await message(cmd("ls -a"),2000);
	await message(ls_root,0);
}

async function tree(){
	await message(cmd("tree -C"),2000);
	await message(tree_result,2000);
	await message(cmd("ls -a"),2000);
	await message(ls_root,0);
}




/*------------------Project--------------------------*/
async function project(){
	await message(cmd("cd Project/"),2000);
	await message(cmd_path("Project","ls -a"),2000);
	await message(ls_project,0);
}

async function IO_Unit(){
	await message(cmd_path("Project","cat I/O Unit"),2000);
	await message(page_IO_Unit,0);
	await reload_iframely();
	await message(cmd_path("Project","ls -a"),2000);
	await message(ls_project,0);
}

async function timer_stoper(){
	await message(cmd_path("Project","cat Juggernaut"),2000);
	await message(page_jaggernaut,0);
	await reload_iframely();
	await message(cmd_path("Project","ls -a"),2000);
	await message(ls_project,0);
}

async function repojitories(){
	await message(cmd_path("Project","cat Repositories"),2000);
	await message(page_repositories,0);
	await reload_contribution();
	await reload_iframely();
	await message(cmd_path("Project","ls -a"),2000);
	await message(ls_project,0);
}



/*------------------Activities--------------------------*/
async function activities(){
	await message(cmd("cd Activities/"),2000);
	await message(cmd_path("Activities","ls -a"),2000);
	await message(ls_activities,0);
}

async function chronology(){
	await message(cmd_path("Activities","./chronology"),2000);
	await message(cmd_path("Activities","ls -a"),2000);
	await message(ls_activities,0);
}

async function sechack365(){
	await message(cmd_path("Activities","cat SecHack365"),2000);
	await message(page_sechack365,0);
	await reload_iframely();
	await message(cmd_path("Activities","ls -a"),2000);
	await message(ls_activities,0);
}

async function guardian(){
	await message(cmd_path("Activities","cat Guardian Project"),2300);
	await message(page_gurdian_project,0);
	await reload_iframely();
	await message(cmd_path("Activities","ls -a"),2000);
	await message(ls_activities,0);
}

async function IoT_Hackathon(){
	await message(cmd_path("Activities","cat LoRaWAN IoT Hackathon"),2500);
	await message(page_iot_hackathon,0);
	await reload_iframely();
	await message(cmd_path("Activities","ls -a"),2000);
	await message(ls_activities,0);
}

async function atcoder(){
	await message(cmd_path("Activities","cat Atcoder"),2000);
	await message(page_atcoder,0);
	await reload_iframely();
	await message(cmd_path("Activities","ls -a"),2000);
	await message(ls_activities,0);
}

async function CTF(){
	await message(cmd_path("Activities","cat CTF"),2000);
	await message(page_ctf,0);
	await reload_iframely();
	await message(cmd_path("Activities","ls -a"),2000);
	await message(ls_activities,0);
}




/*------------------Hobby--------------------------*/
async function hobby(){
	await message(cmd("cd Hobby/"),2000);
	await message(cmd_path("Hobby","ls -a"),2000);
	await message(ls_hobby,0);
}

async function comic(){
	await message(cmd_path("Hobby","cat comic"),2000);
	await message(page_comic,0);
	await reload_iframely();
	await message(cmd_path("Hobby","ls -a"),2000);
	await message(ls_hobby,0);
}

async function anime(){
	await message(cmd_path("Hobby","cat anime"),2000);
	await message(page_anime,0);
	await message(cmd_path("Hobby","ls -a"),2000);
	await message(ls_hobby,0);
}

async function motor_sports(){
	await message(cmd_path("Hobby","motor sports"),2200);
	await message(page_motor_sports,0);
	await reload_iframely();
	await message(cmd_path("Hobby","ls -a"),2000);
	await message(ls_hobby,0);
}




/*------------------Seigenkousya--------------------------*/
async function SIN_dir(){
	await message(cmd_path("Hobby/","cd Seigenkousya/"),2300);
	await message(cmd_path("Hobby/Seigenkousya","ls -a"),2000);
	await message(ls_seigenkousya,0);
}

async function about_SIN(){
	await message(cmd_path("Hobby/Seigenkousya","cat about_us"),2000);
	await message(page_about_SIN,0);
	await reload_iframely();
	await reload_contribution();
	await message(cmd_path("Hobby/Seigenkousya","ls -a"),2000);
	await message(ls_seigenkousya,0);
}

async function blog(){
	await message(cmd_path("Hobby/Seigenkousya","cat homepage"),2000);
	await message(page_homepage,0);
	await reload_iframely();
	await message(cmd_path("Hobby/Seigenkousya","ls -a"),2000);
	await message(ls_seigenkousya,0);
}

async function SIN_link(){
	await message(cmd_path("Hobby/Seigenkousya","browther Seigenkousya.html"),2800);
	// open new tab
	window.open('https://seigenkousya.github.io/', '_blank');
	await message(cmd_path("Hobby/Seigenkousya","ls -a"),2000);
	await message(ls_seigenkousya,0);
}

async function scraper(){
	await message(cmd_path("Hobby/Seigenkousya","cat kirara_scraper"),2500);
	await message(page_kirara_scraper,0);
	await reload_iframely();
	await message(cmd_path("Hobby/Seigenkousya","ls -a"),2000);
	await message(ls_seigenkousya,0);
}

async function kirara_data(){
	await message(cmd_path("Hobby/Seigenkousya","cat KiraraData.com"),2500);
	await message(cmd_path("Hobby/Seigenkousya","ls -a"),2000);
	await message(ls_seigenkousya,0);
}

async function back_to_hobby(){
	await message(cmd_path("Hobby/Seigenkousya","cd ..",2000));
	await message(cmd_path("Hobby","ls -a"),2000);
	await message(ls_hobby,0);
}







