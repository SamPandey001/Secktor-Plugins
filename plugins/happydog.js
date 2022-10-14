/*
------------------------------------
Copyright (C) 2022 Secktor-Md.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
------------------------------------
*/
module.exports = {
    name: 'happydog',
    category: 'troll',
    desc: 'Makes troll image of given text.',
    async exec(citel, Void,args) {
     const url =`https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        args.join(' ')}&bottom=%20&img=https://i.imgur.com/GYQZS92.jpeg`
      citel.imgurl(url,'Secktor Troll Pack')
   }
}
