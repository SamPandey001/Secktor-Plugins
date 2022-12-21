displayText: 'Download Song'},
					type: 1
				}
				]
let buttonMessaged = {
				image: {
                                      url: anu.thumbnail,
                                       },
				caption: h,
				footer: tlang().footer,
				buttons: generatebutton,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: data.artists,
						body: data.album,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: ``,
						sourceUrl: ``,
					},
				},
			};
			await Void.sendMessage(citel.chat, buttonMessaged, {
				quoted: citel,
			});
    }
 )
