const fs = require("fs-extra");
const ffmpeg = require('fluent-ffmpeg');

module.exports = {
    name: 'x4mp4',
    category: 'x-media',
    desc: 'Plays the video in reverse.',
    async exec(citel, Void) {
      if (!/video/.test(citel.quoted.mtype)) return citel.reply('*Need Video.*')
      citel.reply('Editing...;')
     let media = await Void.downloadAndSaveMediaMessage(citel.quoted)
     ffmpeg(media)
      .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
      .format("mp4")
      .fps(22)
      .save("output.mp4")
      .on("end", async () => {
        await Void.sendMessage(citel.chat,{video: fs.readFileSync("output.mp4")});
      });   
        fs.unlinkSync(media)
   }
}
