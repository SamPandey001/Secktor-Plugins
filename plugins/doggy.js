/*
------------------------------------
Copyright (C) 2022 Secktor-Md.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
------------------------------------
*/
module.exports = {
    name: 'doggy',
    category: 'troll',
    desc: 'Makes troll image of given text.',
    async exec(citel, Void,args) {
     const url = `https://docs-jojo.herokuapp.com/api/meme-gen?top=${args.join(' ').split(";")[0]}&bottom=${args.join(' ').split(";")[1]&img=https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450?cb=20190205113053`
      citel.imgurl(url,'Secktor Troll Pack(doggy)')
   }
}
