require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
global.dana = "083142515287"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "6283142515287"
global.namabot = "*JACK*"
global.nomorbot = "6283142515287"
global.namacreator = "*JACK* ϟ"
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
global.isLink = 'https://whatsapp.com/channel/0029VaosPrH7oQhhJJnovL0r'
global.packname = "JACK"
global.author = "JACK"
global.jumlah = "5"

// MESS
global.mess = {
    success: '✔ Done Kak! 😎 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Please Wait, Your Request Is Being Proceed*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu !*_',
    premium: '_*khusus Premium! Buy Prem Chat Owner di https://t.me/Arraffixd atau ketik .owner*_',
    endLimit: '_*Limit Harian Anda Telah Habis!\nLimit Akan Direset Setiap Pukul 00:00 WIB atau Dengan Membeli Premium dan Dapatkan Limit Unlimited\nBuy Prem? Chat https://t.me/Arraffixd*_',
    maintenance: '_*Maaf Kak,Fitur ini sedang dalam perbaikan*_',
    wait: 'Bentar ya kak....',
    error: 'Waduh error nih'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})