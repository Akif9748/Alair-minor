const { emoji } = require("./config.json");
const { UserModel, GuildModel } = require("./models");
const ms = require("parse-ms");

/**
 * Bot komutları için olan türlerin açıklaması:
 */
const türler = {
    other: { ad: "Genel", emoji: '🏳', aciklama: 'Genel Kategorisi' },
    bot: { ad: "Bot", emoji: '🤖', aciklama: 'Bot ile ilgili komutlar' },
    eglence: { ad: "Eğlence", emoji: '🕹', aciklama: 'Eğlence komutları' },
    ekonomi: { ad: "Ekonomi", emoji: '💵', aciklama: 'Ekonomi komutları' },
    yetkili: { ad: "Yetkili", emoji: '🏅', aciklama: 'Yetkili komutları' },
    interaction: { ad: "Interaction", emoji: '🆕', aciklama: 'Interaction komutları' },
    sahip: { ad: "Sahip" }
};

/* methods */
const User = async (_id, select = "") => await UserModel.findById(_id, select) || await UserModel.create({ _id });
const Guild = async (_id, select = "") => await GuildModel.findById(_id, select) || await GuildModel.create({ _id });
const delay = ms => new Promise(r => setTimeout(r, ms));
const parsems = sure => {
    const asr = ms(sure);
    return (asr.days ? `${asr.days} gün, ` : "") +
        (asr.hours ? `${asr.hours} saat, ` : "") +
        (asr.minutes ? `${asr.minutes} dakika, ` : "") +
        `${asr.seconds} saniye`;

}
const parsenum = num => String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/**
 * Alair ana classes dosyası / Ara katman
 */
module.exports = {
    Alair: require("./alair.js"),  // Alair-Core
    User, Guild, delay, parsems, parsenum, //Metodlar
    emoji, türler, //Constantlar
};