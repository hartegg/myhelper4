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
  const postNameHR = await ask("📝 Ime posta (HR)*: ");
  const postNameEN = await ask("📝 Ime posta (EN)*: ");
  const postFolder = await ask("📁 Mapa (npr. hugo, js, linux)*: ");
  const lang = await ask("🌐 Jezik (hr, en, all)*: ");

  rl.close();

  const command = `bash ./newpost.sh ${postNameHR} ${postNameEN} ${postFolder} ${lang}`;
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

// skriptu pokrenuti u terminalu 
// npm run newpost