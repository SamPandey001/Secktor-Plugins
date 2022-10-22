module.exports = {
    name: 'ujid',
    category: 'tools',
    desc: 'provides jid of all members in a group.',
    async exec(citel, Void,args) {
    const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let text = `_Here is jid address of all users of_\n *${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            text += `📍 ${mem.id}\n`;
        }
      citel.reply(text)
   }
