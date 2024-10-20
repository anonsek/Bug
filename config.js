require("./database/module")

//GLOBAL PAYMENT
global.storename = "SAKKI"
global.dana = "083142515287"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "923470019309"
global.namabot = "*SAKKI*"
global.nomorbot = "6283142515287"
global.namacreator = "*SAKKI* ϟ"
global.linkyt = false
global.autoJoin = false
global.antilink = false
global.versisc = 'IV'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'plta_JGstZXVOB9lnibEyep1BwC9MSxPvAT5mFcbiEHLSHUv'
global.capikey = 'pltc_NLgcXEXYq3clwqgaetEPk97l26afklOhjh67sJQvQsF'
global.domain = 'https://'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/miuqdl.jpg'
global.isLink = '#'
global.packname = "JACK"
global.author = "JACK"
global.jumlah = "5"

// MESS
global.mess = {
    success: '✔ Done Kak! 😎 ',
    admin: '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: '_*❗This Command Can Only Be Used By Owner !*_',
    OnlyGrup: '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: '_❗This Command Can Only Be Used In Private Chat !*_',
    wait: '_*Please Wait, Your Request Is Being Proceed*_',
    notregist: '_*You are not registered in the Bot Database. Please register first. !*_',
    premium: '_*Premium only! Buy Premium Chat Owner at https://t.me/sakki_47 or type .owner*_',
    endLimit: '_*Limit Harian Anda Telah Habis!\nLimit Akan Direset Setiap Pukul 00:00 WIB atau Dengan Membeli Premium dan Dapatkan Limit Unlimited\nBuy Prem? Chat https://t.me/Arraffixd*_',
    maintenance: '_*Sorry, this feature is currently under maintenance.*_',
    wait: 'I am like a ventilator....',
    error: 'Oops, this is an error'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
