module.exports = {
        name: "partner",
  aliases:["p"],
        code: `$if[$message[1]==sorumlusu]
        $author[$usertag;$authorAvatar]
        $setServerVar[psorumlusu;$mentionedRoles[1]]
        $setServerVar[psorumlusuu;evet]
        $description[**Partner sorumlusu başarılı bir şekilde ayarlandı.**]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        $color[BLUE]
        $onlyIf[$mentionedRoles[1]!=;{title:!!HATA!!}{description:**❌ |Bir rol etiketle!**}{color:BLUE}]
        $onlyIf[$hasPerms[$authorID;admin]!=false;{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}]
        $onlyIf[$checkContains[$toLowercase[$message];sorumlusu]==true;{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
        \`(sorumlusu | text | kanal | log | aç | kapat | ol)\`
        
        **📖 | Örnek;**}{image:https://cdn.discordapp.com/attachments/873254266104598538/880477309671473173/unknown.png}{color:BLUE}] 
        $endif
        $if[$message[1]==text]
        $author[$usertag;$authorAvatar]
        $setServerVar[ptext;$messageSlice[1]]
        $setServerVar[ptextt;evet]
        $description[**Partner text başarılı bir şekilde ayarlandı.**]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        $color[BLUE]
        $onlyIf[$messageSlice[1]!=;{title:!!HATA!!}{description:**❌ |Bir partner texti ayarla!**}{color:BLUE}]
        $onlyIf[$hasPerms[$authorID;admin]!=false;{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}]
        $onlyIf[$checkContains[$toLowercase[$message];text]==true;{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
        \`(sorumlusu | text | kanal | log | aç | kapat | ol)\`
        
        **📖 | Örnek;**}{image:https://cdn.discordapp.com/attachments/873254266104598538/880477309671473173/unknown.png}{color:BLUE}] 
        $endif
        $if[$message[1]==ol]
        $channelSendMessage[$channelID;{title:$usertag}{description:**✅ | Başvuru isteği $serverName[$message[2]] sunucusundaki ayarlanmış olan partner kanalına Gönderildi. Yetkililerin cevabı bekleniyor...**}{footer:$username[$clientID]}{color:BLUE}]
        
    $useChannel[$getServerVar[plog;$message[2]]]
$author[$usertag;$authorAvatar]
    $description[**》Partnerlik İsteği!**
\`$serverName[$guildID]\` Sunucusundan bir yetkili olan \`$usertag\` kullanıcısı \`$serverName[$message[2]]\` sunucusu için partner olmak istedi.

Bilgileri;

**》Sunucu Adı**
\`$serverName[$guildID]\`

**》Sunucu Oluşturma Tarihi**
\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]\`

**》Partner Başvurusu Yapan**
\`$usertag\`

**》Sunucudaki BOT Sayısı**
\`$botCount\`
  
**》Sunucudaki İnsan Sayısı**
\`$replaceText[$sub[$membersCount;$botCount];-;;-1]\`

**》Sunucudaki Üye Sayısı**
\`$membersCount (BOTLAR DAHİ)\`

**》Onaylamak İçin**
\`$getServerVar[prefix]onayla $guildID\`

**》Reddetmek İçin**
\`$getServerVar[prefix]reddet $guildID <sebep>\`]
$footer[$username[$clientID];$userAvatar[$clientID]]
$color[BLUE]
$addTimestamp
$setServerVar[ps;yes;$message[2]]
$setServerVar[ps;yes]
$onlyIf[$message[2]!=$guildID;{title:!!HATA!!}{description:**❌ | Kendi sunucuna partner olamazsın..**}{color:BLUE}]
$onlyIf[$message[2]!=;{title:!!HATA!!}{description:**❌ | Bir sunucu ID gir.**}{color:BLUE}]
        $onlyIf[$hasRoles[$authorID;$getServerVar[psorumlusu]]!=false;{title:$usertag}{description:**❌ | Partner soumlusu rolün yok.**}{color:BLUE}]
        $onlyIf[$checkContains[$toLowercase[$message];sorumlu;ol]==true;{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
        \`(sorumlusu | text | kanal | log | aç | kapat | ol)\`
        
        **📖 | Örnek;**}{image:https://cdn.discordapp.com/attachments/873254266104598538/880477309671473173/unknown.png}{color:BLUE}]
        $onlyIf[$getServerVar[plog;$message[2]]!=;{title:!!HATA!!}{description:**❌ | Partner olmak istediğiniz sunucunun partner logu kurulu değil.**}{color:BLUE}]
        $cooldown[60s;{title:HATA!!}{description:**❌ | 1 dakika beklemelisin. Kalan süre: \`%time%\`**}{color:BLUE}]
        $endif
        $if[$message[1]==kanal]
        $author[$usertag;$authorAvatar]
        $setServerVar[pkanal;$mentionedChannels[1]]
        $setServerVar[pkanall;evet]
        $description[**Partner kanalı başarılı bir şekilde ayarlandı.**]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        $color[BLUE]
        $onlyIf[$mentionedChannels[1]!=;{title:!!HATA!!}{description:**❌ |Bir kanal etiketle!**}{color:BLUE}]
        $onlyIf[$hasPerms[$authorID;admin]!=false;{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}]
        $onlyIf[$checkContains[$toLowercase[$message];kanal]==true;{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
        \`(sorumlusu | text | kanal | log | aç | kapat | ol)\`
        
        **📖 | Örnek;**}{image:https://cdn.discordapp.com/attachments/873254266104598538/880477309671473173/unknown.png}{color:BLUE}] 
        $endif
         $if[$message[1]==log]
        $author[$usertag;$authorAvatar]
        $setServerVar[plog;$mentionedChannels[1]]
        $setServerVar[plogg;evet]
        $description[**Partner log başarılı bir şekilde ayarlandı.**]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        $color[BLUE]
        $onlyIf[$mentionedChannels[1]!=;{title:!!HATA!!}{description:**❌ |Bir kanal etiketle!**}{color:BLUE}]
        $onlyIf[$hasPerms[$authorID;admin]!=false;{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}]
        $onlyIf[$checkContains[$toLowercase[$message];log]==true;{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
        \`(sorumlusu | text | kanal | log | aç | kapat | ol)\`
        
        **📖 | Örnek;**}{image:https://cdn.discordapp.com/attachments/873254266104598538/880477309671473173/unknown.png}{color:BLUE}] 
        $endif
          $if[$message==aç]
        $author[$usertag;$authorAvatar]
        $setServerVar[partner;açık]
        $description[**Partner sistemi başarılı bir şekilde açıldı.**]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        $color[BLUE]
        $onlyIf[$getServerVar[partner]!=açık;{title:!!HATA!!}{description:**❌ |Sistem zaten açık!**}{color:BLUE}]
        $onlyIf[$hasPerms[$authorID;admin]!=false;{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}]
        $onlyIf[$checkContains[$toLowercase[$message];ç]==true;{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
        \`(sorumlusu | text | kanal | log | aç | kapat | ol)\`
        
        **📖 | Örnek;**}{image:https://cdn.discordapp.com/attachments/873254266104598538/880477309671473173/unknown.png}{color:BLUE}] 
        $endif
          $if[$message==kapat]
        $author[$usertag;$authorAvatar]
        $setServerVar[partner;kapalı]
        $description[**Partner sistemi başarılı bir şekilde kapatıldı.**]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        $color[BLUE]
        $onlyIf[$getServerVar[partner]!=kapalı;{title:!!HATA!!}{description:**❌ |Sistem zaten kapalı!**}{color:BLUE}]
        $onlyIf[$hasPerms[$authorID;admin]!=false;{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}]
        $onlyIf[$checkContains[$toLowercase[$message];kapat]==true;{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
        \`(sorumlusu | text | kanal | log | aç | kapat | ol)\`
        
        **📖 | Örnek;**}{image:https://cdn.discordapp.com/attachments/873254266104598538/880477309671473173/unknown.png}{color:BLUE}] 
        $endif
        $if[$message==]
         $author[$usertag;$authorAvatar]
        $description[**❌ | Hata! Lütfen seçenek seçin.**
        \`(sorumlusu | text | kanal | log | aç | kapat | ol)\`
        
        **📖 | Örnek;**]
        
        $image[https://cdn.discordapp.com/attachments/873254266104598538/880477309671473173/unknown.png]
         
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        $color[BLUE]
        $endif
          
`
}