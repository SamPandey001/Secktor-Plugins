const { tlang,addCommand } = require('../../lib')
const Config = require('../../config')
const Message = "Pm blocking system is blocking you. :)"
module.exports = {
   name: 'pmblocker',
   category: 'owner',
   desc: 'Turn on/off pm blocking system.',
   async exec(citel, Void,args,isCreator) {
      if (!isCreator) return citel.reply(tlang().owner);
			if (!args[0]) return citel.reply(`Please Give me option true/false to set ${tlang().greet}`)
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			await heroku.patch(baseURI + "/config-vars", {
				body: {
                ["PM_BLOCK"]: args[0],
				},
			});
			await citel.reply(`Pm blocker has been set to ${args[0]}`);

   }
}
addCommand({ on: "body" }, async (Void,citel,args,isCreator) => {
if (!citel.isGroup && process.env.PM_BLOCK !=='false' && citel.text && !isCreator) {
  citel.reply(Message)
  await Void.updateBlockStatus(citel.sender, "block") 
}
})
 
