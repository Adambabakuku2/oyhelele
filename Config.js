module.exports = {
  Bot: {
    Token: "MTE2MTM0ODA0NDE0MzQ4MDg3Mg.Gc2Ey_.77TG6k5NNViPeoAaTmAFNsntYkiTAJwS1v2-yg",           // Bot tokeni, Discord geliştirici portalından alınan gizli anahtar.
    BotPrefix: ".",      // Botun prefixi, komutlar bu işaretle başlar (örnek: .komut).
    GuildID: "1448382161538519162",         // Botun aktif olacağı Discord sunucusunun ID'si.
    Owner: ["1136246184047026186", "", ""], // Bot sahiplerinin Discord kullanıcı ID'leri, genellikle yetkili kullanıcılar.
    BotPresence: [       // Botun durum mesajları, burada çoklu durum tanımlanabilir.
      "Kurbağa", // Örnek: Botun Discord'da görünen durumu.
      "Sikimtr"          // Diğer durum mesajı.
    ],
  },

  Emoji: {
    yes: "<:tik:1458075660282105977>", // Başarılı durumları göstermek için kullanılan emoji (Discord emoji kodu).
    no: "<:hayir:1458076395103322183>",  // Başarısız durumları göstermek için kullanılan emoji (burada aynı emoji, isteğe göre değiştirilebilir).
  }
}
