const fs = require("fs");

module.exports = {
    name: 'viewonce',
    category: 'misc',
    desc: 'Downloads view once media.',
    async exec(citel, Void) {
      if(!citel.quoted) return citel.reply('Please quote a view once message.')
     if (citel.quoted.mtype !== "viewOnceMessage") return citel.reply('Please quote a view once message.')
      let buff = await Void.downloadAndSaveMediaMessage(citel.quoted)
      await Void.sendFile(buff);
        fs.unlinkSync(buff)
   }
}
