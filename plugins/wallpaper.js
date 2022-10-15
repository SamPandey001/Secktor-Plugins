const axios = require('axios')

module.exports = {
   name: 'rwall',
   category: 'misc',
   desc: 'Sends a Random Anime Wallpaper.',
   async exec(citel, Void,args,icmd) {
  const { data } = await axios.get('https://nekos.life/api/v2/img/wallpaper')
  citel.imgurl(data.url,'*Here we go*')
   }
}
