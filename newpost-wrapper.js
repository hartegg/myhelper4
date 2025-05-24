// newpost-wrapper.js
const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}

(async () => {
  const postNameHR = await ask("📝 Ime posta (HR)- Obavezan unos: ");
  const postNameEN = await ask("📝 Ime posta (EN)- Obavezan unos: ");
  const menuItem = await ask("📁 Menu item (npr. hugo, js, linux)- Obavezan unos: ");
  const lang = await ask("🌐 Jezik (hr, en, all)- tu odabrati npr. en i samo taj file će napravit ili hr ili all: ");

  rl.close();

  const command = `bash ./newpost.sh ${postNameHR} ${postNameEN} ${menuItem} ${lang}`;
  console.log(`\n🚀 Pokrećem: ${command}\n`);

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Greška: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`⚠️ STDERR: ${stderr}`);
    }
    console.log(stdout);
  });
})();

// skriptu pokrenuti terminalu 
// npm run newpost