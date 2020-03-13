
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

async function project(){
	await message(cmd("cd Project/"),2000);
	await message(cmd_path("Project","ls -a"),2000);
	await message(ls_project,0);
}

async function hobby(){
	await message(cmd("cd Hobby/"),2000);
	await message(cmd_path("Hobby","ls -a"),2000);
	await message(ls_hobby,0);
}

async function activities(){
	await message(cmd("cd Activities/"),2000);
	await message(cmd_path("Activities","ls -a"),2000);
	await message(ls_activities,0);
}

async function SIN_dir(){
	await message(cmd("cd Seigenkousya/"),2000);
	await message(cmd_path("Seigenkousya","ls -a"),2000);
	await message(ls_seigenkousya,0);
}

