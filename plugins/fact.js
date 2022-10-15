const axios = require('axios')

module.exports = {
   name: 'fact',
   category: 'fun',
   desc: 'Sends a Fact!!',
   async exec(citel, Void) {
  const { data } = await axios.get('https://nekos.life//api/v2/fact')
  citel.reply('```'+data.fact+'```')
    
   }
}
