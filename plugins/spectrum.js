const fs = require("fs-extra");
const ffmpeg = require('fluent-ffmpeg');

module.exports = {
    name: 'spectrum',
    category: 'x-media',
    desc: 'Converts the spectrum of sound into video.',
    async exec(citel, Void) {
      if (!/video/.test(citel.quoted.mtype)) return citel.reply('*Need Video.*')
      citel.reply('Editing...;')
      let media = await Void.downloadAndSaveMediaMessage(citel.quoted)
     ffmpeg(media)
      .outputOptions([
        "-y",
        "-filter_complex",
        "[0:a]showspectrum=s=720x1280,format=yuv420p[v]",
        "-map",
        "[v]",
        "-map 0:a",
      ])
      .save("output.mp4")
      .on("end", async () => {
        await Void.sendMessage(citel.chat,{video: fs.readFileSync("output.mp4")});
      });   
        fs.unlinkSync(media)
   }
}
