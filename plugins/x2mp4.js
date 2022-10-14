const fs = require("fs");
const ffmpeg = require('fluent-ffmpeg');

module.exports = {
    name: 'x2mp4',
    category: 'x-media',
    desc: 'Reduce video’s quality by 50%.',
    async exec(citel, Void) {
      if (!/video/.test(citel.quoted.mtype)) return citel.reply('*Need Video.*')
      citel.reply('Editing...;')
      let media = await Void.downloadAndSaveMediaMessage(citel.quoted)
     ffmpeg(media)
      .withSize("50%")
      .format("mp4")
      .save("output.mp4")
      .on("end", async () => {
        await Void.sendMessage(citel.chat,{video: fs.readFileSync("output.mp4")});
      });   
        fs.unlinkSync(media)
   }
}
