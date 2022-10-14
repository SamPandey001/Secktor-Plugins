const fs = require("fs-extra");
const ffmpeg = require('fluent-ffmpeg');

module.exports = {
    name: 'mp3crusher',
    category: 'x-media',
    desc: 'Distorts the sound, makes ridiculous.',
    async exec(citel, Void) {
      if (!/video/.test(citel.quoted.mtype)) return citel.reply('*Need Video.*')
      citel.reply('Editing...;')
      let media = await Void.downloadAndSaveMediaMessage(citel.quoted)
      ffmpeg(media)
      .outputOptions([
        "-y",
        "-filter_complex",
        "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1",
      ])
      .save("output.mp3")
      .on("end", async () => {
        await Void.sendMessage(citel.chat,{video: fs.readFileSync("output.mp4")});
      });   
        fs.unlinkSync(media)
   }
}
