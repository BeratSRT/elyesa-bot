module.exports = {
        name: "ayarlar",
        code: `$author[$serverName;$replaceText[$serverIcon;null;$userAvatar[$clientID]]]
       $addField[》:blue_book: - Partner -Log- Kanalı;$replaceText[$replaceText[$getServerVar[plogg];hayır;**❌ | Ayarlanmamış**;-1];evet;**✅ | <#$getServerVar[plog]>**]]
       $addField[》:hash: - Partner Kanalı;$replaceText[$replaceText[$getServerVar[pkanall];hayır;**❌ | Ayarlanmamış**;-1];evet;**✅ | <#$getServerVar[pkanal]>**]]
       $addField[》:scroll: - Partner Texti;$replaceText[$replaceText[$getServerVar[ptextt];hayır;**❌ | Ayarlanmamış**;-1];evet;**✅ | Ayarlanmış**;-1]]
       $addField[》:busts_in_silhouette: - Partner Sorumlusu Rolü;$replaceText[$replaceText[$getServerVar[psorumlusuu];hayır;**❌ | Ayarlanmamış**;-1];evet;**✅ |<@&$getServerVar[psorumlusu]>**];-1]
        $addField[》:question: - Sistem Açık Mı ?;$replaceText[$replaceText[$getServerVar[partner];açık;**✅ | Evet**;-1];kapalı;**❌ | Hayır**;-1]]
        $color[$random[0;99999]]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        `
}