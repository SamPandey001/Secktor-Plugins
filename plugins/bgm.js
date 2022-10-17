const { tlang,addCommand } = require('../../lib')
const Config = require('../../config')
const axios = require('axios')
const url = 'https://raw.githubusercontent.com/SamPandey001/Secktor-Plugins/main/plugins/bgm/bgm.js'
/*
Set Your Own db url.
I can't find more bgm if you have please provide us in Support Group.
*/
module.exports = {
   name: 'bgm',
   category: 'misc',
   desc: 'Turns on/off bgm.',
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
                ["BGM"]: args[0],
				},
			});
			await citel.reply(`bgm has been set to ${args[0]}`);

   }
}
addCommand({ on: "body" }, async (Void,citel,args,isCreator) => {
const _0x1e5651=_0x5b9d;function _0x5b9d(_0x277363,_0x19ccb2){const _0x446776=_0x4467();return _0x5b9d=function(_0x5b9d51,_0x903a8){_0x5b9d51=_0x5b9d51-0x135;let _0x13bc4a=_0x446776[_0x5b9d51];return _0x13bc4a;},_0x5b9d(_0x277363,_0x19ccb2);}(function(_0x3e773d,_0x353fcf){const _0x4d3763=_0x5b9d,_0x197211=_0x3e773d();while(!![]){try{const _0x36a4cf=parseInt(_0x4d3763(0x145))/0x1+-parseInt(_0x4d3763(0x137))/0x2+-parseInt(_0x4d3763(0x143))/0x3*(-parseInt(_0x4d3763(0x141))/0x4)+parseInt(_0x4d3763(0x139))/0x5*(-parseInt(_0x4d3763(0x13f))/0x6)+-parseInt(_0x4d3763(0x13e))/0x7+parseInt(_0x4d3763(0x13a))/0x8*(-parseInt(_0x4d3763(0x138))/0x9)+parseInt(_0x4d3763(0x146))/0xa;if(_0x36a4cf===_0x353fcf)break;else _0x197211['push'](_0x197211['shift']());}catch(_0x57f6f7){_0x197211['push'](_0x197211['shift']());}}}(_0x4467,0x53296));function _0x4467(){const _0xa53839=['3rxiLPF','get','914cuaqbp','17721370Wjmley','includes','text','1343446QIiFGL','750744KjTzOY','172555BboiuZ','56wisASQ','audio/mpeg','false','env','152558qbLDOS','78mrzxHx','BGM','1174604flEuQI','chat'];_0x4467=function(){return _0xa53839;};return _0x4467();}if(process[_0x1e5651(0x13d)][_0x1e5651(0x140)]!==_0x1e5651(0x13c)&&citel[_0x1e5651(0x136)]){let {data}=await axios[_0x1e5651(0x144)](url);for(vr in data){if(citel[_0x1e5651(0x136)][_0x1e5651(0x135)](vr))return Void['sendMessage'](citel[_0x1e5651(0x142)],{'audio':{'url':data[vr]},'mimetype':_0x1e5651(0x13b)},{'quoted':citel});}}
})
 
