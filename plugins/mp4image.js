const fs = require("fs-extra");
const ffmpeg = require('fluent-ffmpeg');

module.exports = {
    name: 'mp4image',
    category: 'x-media',
    desc: 'Converts photo to 4 sec video..',
    async exec(citel, Void) {
      if (!/video/.test(citel.quoted.mtype)) return citel.reply('*Need Video.*')
      citel.reply('Editing...;')
      let media = await Void.downloadAndSaveMediaMessage(citel.quoted)
      ffmpeg(media)
      .loop(6)
      .fps(19)
      .videoBitrate(400)
      .format("mp4")
      .save("output.mp4")
      .on("end", async () => {
        await Void.sendMessage(citel.chat,{video: fs.readFileSync("output.mp4")});
      });   
        fs.unlinkSync(media)
   }
}
