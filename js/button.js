/*------------------root--------------------------*/
async function about_me(){
	await typing(cmd("cat about_me"));
	await message(about);
	await typing(cmd("ls -a"));
	await message(ls_root);
}

async function back_to_root(path){
	await typing(cmd_path(path,"cd .."));
	await typing(cmd("ls -a"));
	await message(ls_root);
}

async function contact_and_links(){
	await typing(cmd("cat contact_and_links"));
	await message(links);
	await typing(cmd("ls -a"));
	await message(ls_root);
}

async function welcome(){
	await typing(cmd("cat welcome"));
	await message(welcome_message);
	await typing(cmd("ls -a"));
	await message(ls_root);
}

async function tree(){
	await typing(cmd("tree -C"));
	await message(tree_result);
	await typing(cmd("ls -a"));
	await message(ls_root);
}




/*------------------Project--------------------------*/
async function project(){
	await typing(cmd("cd Project/"));
	await typing(cmd_path("Project","ls -a"));
	await message(ls_project);
}

async function IO_Unit(){
	await typing(cmd_path("Project","cat I/O Unit"));
	await message(page_IO_Unit);
	await reload_iframely();
	await typing(cmd_path("Project","ls -a"));
	await message(ls_project);
}

async function timer_stoper(){
	await typing(cmd_path("Project","cat Juggernaut"));
	await message(page_juggernaut);
	await reload_iframely();
	await typing(cmd_path("Project","ls -a"));
	await message(ls_project);
}

async function Brainwash(){
	await typing(cmd_path("Project","cat Brainwash"));
	await message(page_brainwash);
	await reload_iframely();
	await typing(cmd_path("Project","ls -a"));
	await message(ls_project);
}

async function cc_sakura(){
	await typing(cmd_path("Project","cat cc_sakura"));
	await message(page_cc_sakura);
	await reload_iframely();
	await typing(cmd_path("Project","ls -a"));
	await message(ls_project);
}

async function msweeper(){
	await typing(cmd_path("Project","cat msweeper"));
	await message(page_msweeper);
	await reload_iframely();
	await typing(cmd_path("Project","ls -a"));
	await message(ls_project);
}

async function repojitories(){
	await typing(cmd_path("Project","cat Repositories"));
	await message(page_repositories);
	await reload_contribution();
	await reload_iframely();
	await typing(cmd_path("Project","ls -a"));
	await message(ls_project);
}



/*------------------Activities--------------------------*/
async function activities(){
	await typing(cmd("cd Activities/"));
	await typing(cmd_path("Activities","ls -a"));
	await message(ls_activities);
}

async function chronology(){
	await typing(cmd_path("Activities","./chronology"));
	await typing(cmd_path("Activities","ls -a"));
	await message(ls_activities);
}

async function seccamp(){
	await typing(cmd_path("Activities","cat SecurityCamp"));
	await message(page_seccamp);
	await reload_iframely();
	await typing(cmd_path("Activities","ls -a"));
	await message(ls_activities);
}

async function sechack365(){
	await typing(cmd_path("Activities","cat SecHack365"));
	await message(page_sechack365);
	await reload_iframely();
	await typing(cmd_path("Activities","ls -a"));
	await message(ls_activities);
}

async function guardian(){
	await typing(cmd_path("Activities","cat Guardian Project"));
	await message(page_gurdian_project);
	await reload_iframely();
	await typing(cmd_path("Activities","ls -a"));
	await message(ls_activities);
}

async function IoT_Hackathon(){
	await typing(cmd_path("Activities","cat LoRaWAN IoT Hackathon"));
	await message(page_iot_hackathon);
	await reload_iframely();
	await typing(cmd_path("Activities","ls -a"));
	await message(ls_activities);
}

async function atcoder(){
	await typing(cmd_path("Activities","cat Atcoder"));
	await message(page_atcoder);
	await reload_iframely();
	await typing(cmd_path("Activities","ls -a"));
	await message(ls_activities);
}

async function CTF(){
	await typing(cmd_path("Activities","cat CTF"));
	await message(page_ctf);
	await reload_iframely();
	await typing(cmd_path("Activities","ls -a"));
	await message(ls_activities);
}




/*------------------Hobby--------------------------*/
async function hobby(){
	await typing(cmd("cd Hobby/"));
	await typing(cmd_path("Hobby","ls -a"));
	await message(ls_hobby);
}

async function comic(){
	await typing(cmd_path("Hobby","cat comic"));
	await message(page_comic);
	await reload_iframely();
	await typing(cmd_path("Hobby","ls -a"));
	await message(ls_hobby);
}

async function anime(){
	await typing(cmd_path("Hobby","cat anime"));
	await message(page_anime);
	await typing(cmd_path("Hobby","ls -a"));
	await message(ls_hobby);
}

async function motor_sports(){
	await typing(cmd_path("Hobby","motor sports"));
	await message(page_motor_sports);
	await reload_iframely();
	await typing(cmd_path("Hobby","ls -a"));
	await message(ls_hobby);
}




/*------------------Seigenkousya--------------------------*/
async function SIN_dir(){
	await typing(cmd_path("Hobby/","cd Seigenkousya/"));
	await typing(cmd_path("Hobby/Seigenkousya","ls -a"));
	await message(ls_seigenkousya);
}

async function about_SIN(){
	await typing(cmd_path("Hobby/Seigenkousya","cat about_us"));
	await message(page_about_SIN);
	await reload_iframely();
	await reload_contribution();
	await typing(cmd_path("Hobby/Seigenkousya","ls -a"));
	await message(ls_seigenkousya);
}

async function blog(){
	await typing(cmd_path("Hobby/Seigenkousya","cat homepage"));
	await message(page_homepage);
	await reload_iframely();
	await typing(cmd_path("Hobby/Seigenkousya","ls -a"));
	await message(ls_seigenkousya);
}

async function SIN_link(){
	await typing(cmd_path("Hobby/Seigenkousya","browther Seigenkousya.html"));
	// open new tab
	window.open('https://seigenkousya.github.io/', '_blank');
	await typing(cmd_path("Hobby/Seigenkousya","ls -a"));
	await message(ls_seigenkousya);
}

async function scraper(){
	await typing(cmd_path("Hobby/Seigenkousya","cat kirara_scraper"));
	await message(page_kirara_scraper);
	await reload_iframely();
	await typing(cmd_path("Hobby/Seigenkousya","ls -a"));
	await message(ls_seigenkousya);
}

async function kirara_data(){
	await typing(cmd_path("Hobby/Seigenkousya","cat KiraraData.com"));
	await message(page_kirara_database);
	await reload_iframely();
	await typing(cmd_path("Hobby/Seigenkousya","ls -a"));
	await message(ls_seigenkousya);
}

async function back_to_hobby(){
	await typing(cmd_path("Hobby/Seigenkousya","cd ..",2000));
	await typing(cmd_path("Hobby","ls -a"));
	await message(ls_hobby);
}

