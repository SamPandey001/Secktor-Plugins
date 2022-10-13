module.exports = {
    name: 'viewonce',
    category: 'misc',
    desc: 'Downloads view once media.',
    async exec(citel, Void) {
      if(!citel.quoted) return citel.reply('Please quote a view once message.')
     if (citel.quoted.mtype !== "view_once") return citel.reply('Please quote a view once message.')
      let buff = await citel.quoted.download();
      await Void.sendFile(buff);
   }
}
