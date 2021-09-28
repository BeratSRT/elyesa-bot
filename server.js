const aoi = require('aoi.js');
const fs = require('fs');
const bot = new aoi.Bot({
	token: process.env.TOKEN,
	prefix: '$getServerVar[prefix]'
});
bot.onJoined()
bot.onLeave()
bot.onMessage();
var reader = fs.readdirSync('./komutlar/').filter(file => file.endsWith('.js'));
for (const file of reader) {
	const command = require(`./komutlar/${file}`);
	bot.command({
		name: command.name,
		aliases: command.aliases,
		code: command.code
	});
}
//----------- OYNUYOR BÖLÜMÜ ----------\\
bot.status({
	text: '🔰$serverCount Sunucuya Hizmet Veriyorum.', //oynuyor kısmı
	type: 'PLAYING', //eylemi Oynuyor : PLAYING - İzliyor WATCHING
	status: 'dnd', //durumu dnd : Rahatsız Etme - online : Çevrim İçi - ıdle : Boşta
	time: 12
});
bot.status({
	text: '🌊Prefixim: $getServerVar[prefix] | 🔥$getServerVar[prefix]yardım',
	type: 'PLAYING',
	status: 'dnd',
	time: 12
});
bot.status({
	text: '🍃$getServerVar[prefix]davet | Beni Sunucuna Davet Et !',
	type: 'PLAYING',
	status: 'dnd',
	time: 12
});
//--------- OYNUYOR BÖLÜMÜ  SON------------\\
bot.command({
name: "yardım",
code: `$reactionCollector[$splitText[1];everyone;1m;🔄,😂,👤,⚔️,💻,🤝;byardım,eğlencey,kullanıcıy,mody,yapımcıy,partnery;yes]
$textSplit[$sendMessage[{title:Yardım Menüme Hoşgeldin}{footer:$username#$discriminator İstedi:$authorAvatar}{description:
😂 - Eğlence ; Eğlence Komutlarını Atar

👤 - Kullanıcı ; Herkesin Kullanabileceği Komutları Atar

⚔️ - Moderasyon ; Sunucu Ayarları İçin Komutları Atar

💻 - Yapımcı ; Sadece Yapımcının Kullanabilceği Komutları Atar

🤝 - Partner ; Partner Komutlarını Atar
} {color:000046};yes]; ]`})
bot.awaitedCommand({
 name: "byardım",
 code: `$editMessage[$message[1];{title:Yardım}{footer:$username#$discriminator İstedi:$authorAvatar}{description:
😂 - Eğlence: Eğlence Komutlarını Atar

👤 - Kullanıcı: Herkesin Kullanabileceği Komutları Atar

⚔️ - Moderasyon: Sunucu Ayarları İçin Komutları Atar

💻 - Yapımcı: Sadece Yapımcının Kullanabilceği Komutları Atar

🤝 - Partner: Partner Komutlarını Atar} {color:000046}
]
`})
bot.awaitedCommand({
 name: "eğlencey",
 code: `
 $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Eğlence Komutlarıma Hoşgeldin $username:$authorAvatar} {description:\`$getServerVar[prefix]düello\`, \`$getServerVar[prefix]aşkölçer\`, \`$getServerVar[prefix]amongus\`} {color:000046} 
]
 `
})
bot.awaitedCommand({
 name: "kullanıcıy",
 code: `
 $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Kullanıcı Komutlarıma Hoşgeldin $username:$authorAvatar} {description: \`$getServerVar[prefix]profil\`, \`$getServerVar[prefix]banlist\`, \`$getServerVar[prefix]davet\`, \`$getServerVar[prefix]istatistik\`, \`$getServerVar[prefix]öneri\`} {color:000046} 
]
 `
})
bot.awaitedCommand({
 name: "mody",
 code: `
 $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Moderasyon Komutlarıma Hoşgeldin $username:$authorAvatar} {description:\`$getServerVar[prefix]ayarla\`, \`$getServerVar[prefix]abone\`, \`$getServerVar[prefix]ban\`, \`$getServerVar[prefix]sil\`, \`$getServerVar[prefix]forceban\`, \`$getServerVar[prefix]unban\`, \`$getServerVar[prefix]çekiliş\`, \`$getServerVar[prefix]kick\`, \`$getServerVar[prefix]uyarı\`, \`$getServerVar[prefix]uyarısil\`, \`$getServerVar[prefix]uyarılar\`} {color:000046} 
]
 `
})
bot.awaitedCommand({
  name: "yapımcıy",
  code:`
  $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Yapımcı Komutlarıma Hoşgeldin $username:$authorAvatar} {description:\`$getServerVar[prefix]eval\`} {color:000046} 
]
  `
})
bot.awaitedCommand({
  name: "partnery",
  code:`
  $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Partner Komutlarıma Hoşgeldin $username:$authorAvatar} {description:\`$getServerVar[prefix]partner-bul\`, \`$getServerVar[prefix]partner\`, \`$getServerVar[prefix]ayarlar\`, \`$getServerVar[prefix]onayla\`, \`$getServerVar[prefix]reddet\`} {color:000046} 
]
`
})
bot.command({
  name:"abone",
  code:`
  $reactionCollector[$splitText[1];$authorID;1h;✅,❌;evet,hyr;yes]
  $textSplit[$sendMessage[{color:YELLOW}{thumbnail:$userAvatar[$mentioned[1]]}{description:
  <@$mentioned[1]> Kişisine Abone Vermeyi Kabul Ediyormusunuz ?
  
  Evet İçin :white_check_mark:  Emojisine Hayır İçin :x: Emojisine Tıklayınız.};yes]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[abonerol]]!=true;{color:RED}{author:$userTag[$mentioned[1]] Kişisinde Zaten Abone Rol Var ?:$authorAvatar}]
  $onlyForChannels[$getServerVar[abonekanal];{color:RED}{description:Bu Komut Sadece <#$getServerVar[abonekanal]> Kanalında Kullanılabilir !}]
  $onlyIf[$mentioned[1]!=;{color:RED}{author:Rol Vereceğim Kişiyi Etiketlemen Gerekiyor !:$authorAvatar}]
  $onlyIf[$hasRole[$authorID;$getServerVar[aboneyt]]!=false;{color:RED}{author:Bu Komut Sadece $roleName[$getServerVar[aboneyt]] Kişilerine Özeldir !:$authorAvatar}]
  
  
  $onlyIf[$getServerVar[aboneyt]!=yok;{color:RED}{author:Abone Yetkilisi Rolü Ayarlı Değil !:$authorAvatar}]
  $onlyIf[$getServerVar[abonekanal]!=yok;{color:RED}{author:Abone Kanalı Ayarlı Değil !:$authorAvatar}]
  $onlyIf[$getServerVar[abonerol]!=yok;{color:RED}{author:Abone Rolü Ayarlı Değil !:$authorAvatar}]`
})
bot.awaitedCommand({
  name:"evet",
  code:`
  $clearReactions[$channelID;$message[1];all]
  $editMessage[$message[1];{color:GREEN}
  {author:$userTag[$mentioned[1]] Kişisine Abone Rolü Başarıyla Verilmiştir !:$userAvatar[$mentioned[1]]}]
  $giveRole[$mentioned[1];$getServerVar[abonerol]]
  `
})
bot.awaitedCommand({
  name:"hyr",
  code:`
  $clearReactions[$channelID;$message[1];all]
  $editMessage[$message[1];{color:RED}
  {author:$userTag[$mentioned[1]] Kişisine Abone Rolü Vermeyi Reddettiniz !:$userAvatar[$mentioned[1]]}]
  `
})
bot.command({
    name:"premium",
    code:`
     $if[$toLowercase[$message[1]]==yap]
       $setGlobalUserVar[premium;evet;$message[2]]
       $title[❗️Kişiye Başarıyla Premium Verildi❗️]
       $description[✅**Premium Verilen Kişi:** **$userTag[$message[2]]**]
       $footer[| Komutu Kullanan Kişi $userTag;$authorAvatar]
       $onlyIf[$getGlobalUserVar[premium;$message[2]]!=evet;{title:❗️Kişi Zaten Premium❗️}{color:303136}{delete:5s}]
     $elseIf[$toLowercase[$message[1]]==çıkar] 
      $setGlobalUserVar[premium;hayır;$message[2]]
       $title[❗️Kişiden Başarıyla Premium Alındı❗️]
       $description[✅**Premium Alınan Kişi:** **$userTag[$message[2]]**]
       $footer[| Komutu Kullanan Kişi $userTag;$authorAvatar]
       $onlyIf[$getGlobalUserVar[premium;$message[2]]!=hayır;{title:❗️Kişi Zaten Premium Değil❗️}{color:303136}{delete:5s}]
     $endelseIf
     $else
      $title[❗️Yanlış Kullanım❗️]
      $description[✅**Lütfen Geçerli Bir Eylem Yazın** **yap** - **çıkar**]
     $endif
     $onlyIf[$isBot[$message[2]]!=true;{title:❗️Bota Premium Ayarlayamam❗️}{color:303136}{delete:5s}]
     $onlyIf[$charCount[$message[2]]==18;{title:❗️Lütfen Geçerli Bir ID girin❗️}{color:303136}{delete:5s}]
     $onlyIf[$message[2]!=;{title:❗️Yanlış Kullanım❗️}{description:✅**Doğru Kullanım: !premium yap - çıkar id **}{color:303136}{delete:5s}]
     $onlyForIDs[$botOwnerID[;];{title:❗️Geliştiricim Değilsin❗️}{color:303136}{delete:5s}]
       $color[303136]
       $deleteIn[5s]
       $deletecommand
    `
    })

//-----------------VARİBLELER---------------\\
bot.variables({
	saas: 'kapalı',
  prefix: 'e+',
	emojimenüler: '',
	emojiroller: '',
	can: '100',
	savaş: 'yok',
	rakip: '',
	iksirş: '',
	cekilis: 'undefined',
	karaliste: 'hayır',
	ksebep: 'Bu Mesaj Var İse Siciliniz Temizdir !',
	banka: '0',
	para: '0',
	elmas: '0',
	altın: '0',
	demir: '0',
	laptop: '0',
	günlük: '100',
	aylık: '1000',
	sahip: '99999',
	kicksebep: '',
	bansebep: '',
  aboneyt: 'yok',
  abonerol: 'yok',
  abonekanal: 'yok',
  premium: "hayır",
  tuyarı: "0",
  uyarı:"",
  topab: "0",
  botlog:"882649300562219049",//bot log kanalı idsi
  botkanal:"882670082008973322",//bot ekle kanalı idsi
  botyetkili:"882649251463708703",//yetkili ıdsi
  başvuranbotu:"",//burayı boş bırak
  ab:"",
  //partner
  psorumlusu:"",
  psorumlusuu:"hayır",
  ptext:"",
  ptextt:"hayır",
  pkanal:"",
  pkanall:"hayır",
  plog:"",
  plogg:"hayır",
  partner:"kapalı",
  ps:"no",
  para:"5"
});
//----------------VARİBLELER SON-------------\\
bot.command({
	name: 'eval',
	code: `$eval[$message]
$onlyForIDs[525539487774801921;Bu Komutu Sadece Sahibim Kullanabilir]`,
	nonPrefixed: false
});
bot.leaveCommand({
  channel:"882649300562219049",
  code:`
  $author[Baybay $userTag ve botu $userTag[$getServerVar[başvuranbotu;$authorID]];$authorAvatar]
  $description[$userTag sunucudan ayrıldığı için botu $userTag[$getServerVar[başvuranbotu;$authorID]] sunucudan atıldı]
  $color[GREEN]
  $kick[$getServerVar[başvuranbotu;$authorID]]
  $suppressErrors
`
  })
//--------------------- DİĞER KOMUTLAR -------------------------\\
bot.command({
	name: 'aşkölçer',
	aliases: ['aşk', 'love', 'lovecheck'],
	code: `$title[ASK KONTROLU 💕]
$description[$username ile <@$mentioned[1]> in ask yüzdesi $random[0;100]%]
$image[https://api.cool-img-api.ml/ship?user=$replaceText[$replaceText[$replaceText[$userAvatar[$authorID]&user2=$userAvatar[$mentioned[1;yes]];webp;png;-1];jpg;png;-1];gif;png;-1]]
$color[303136]
$onlyIf[$mentioned[1]!=$authorid;$customEmoji[yanlis] Kendine aşık olamazsın.]
$onlyIf[$mentioned[1]!=;$customEmoji[yanlis] Aşk Ölçmek için birini etiketlemen gerekiyor]
`
});
bot.command({
	name: '$alwaysExecute',
	code: `
$useChannel[860360406211362817]
$author[Bota Gelen Mesaj!;$authorAvatar]
$addField[Mesaj;$message]
$addField[Gönderen ID;$authorID]
$addField[Gönderen;$userTag]
$description[$thumbnail[$authorAvatar]]
$addTimeStamp
$footer[]
$color[ffd700]
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
$onlyIf[$guildID==;]
`
});
bot.command({
	name: 'düello',
	aliases: ['duello', 'savaş'],
	code: `
  $setUserVar[rakip;$mentioned[1];$authorID]
  $setUserVar[rakip;$authorID;$mentioned[1]]
  <@$mentioned[1]>, $username size bir düello isteği gönderdi. Kabul etmek için \`kabul\` reddetmek için \`red\` yazın. Eğer hiçbirşey yazmazsanız 1 dakika içinde istek iptal edilecek.
  $awaitMessages[$mentioned[1];1m;kabul,red;kabul,red;:x: 1 dakika geçti! Düello iptal edildi!]
  $onlyIf[$mentioned[1]!=$authorid;Neden kendinle düello yapmaya çalışıyorsun?]
  $onlyIf[$mentioned[1]!=;:x: Lütfen birini etiketle]
  $onlyIf[$getGlobalUserVar[karaliste;$authorID]!=evet;Hop Karalistedesin Dostum.
  Karaliste Sebebin \`\`$getGlobalUserVar[ksebep;$authorID]\`\`]`
});
bot.awaitedCommand({
	name: 'kabul',
	code: `
  $awaitMessages[$authorID;1m;saldır,iksir,kaç;saldır,iksir,kaç;:x: 1 dakika geçti! Düello iptal edildi!]
   $setUserVar[savaş;var;$getUserVar[rakip;$authorID]]
  $setUserVar[savaş;var;$authorID]
  $color[GREEN]
  $author[Düello Başarıyla Kabul Edildi;$authorAvatar]
  $description[
    $userTag[$getUserVar[rakip;$authorID]] Kişisinden Gelen Düello İsteğini Kabul Ettin !

    İlk sen saldıracaksın !
    saldır , iksir , kaç
  ]`
});
bot.awaitedCommand({
	name: 'saldır',
	code: `
  $if[$getUserVar[can;$getUserVar[rakip;$authorID]]>=0]
   $awaitMessages[$getUserVar[rakip;$authorID];1m;saldır,iksir,kaç;saldır,iksir,kaç;:x: 1 dakika geçti! Düello iptal edildi!]
  $color[GREEN]
  $author[Kişiye Toplam $random[50;100] Hasar Verdin !;$authorAvatar]
  $description[
    Anlık Can Durumları

    $userTag[$authorID] = $getUserVar[can;$authorID] :hearts:
    $userTag[$getUserVar[rakip;$authorID]] = $getUserVar[can;$getUserVar[rakip;$authorID]] :hearts:
  ]
  $footer[Sıra Rakibinde ! saldır , iksir , kaç yazınız]
  $setUserVar[can;$sub[$getUserVar[can;$getUserVar[rakip;$authorID]];$random[50;100]];$getUserVar[rakip;$authorID]]
   $onlyIf[$getUserVar[savaş;$authorID]!=yok;]
   $elseIf[$getUserVar[can;$getUserVar[rakip;$authorID]]<=0]
   $color[GREEN]
   $description[$thumbnail[$authorAvatar]
   Savaş Sona Erdi !
   
   Bu Savaşın Kazananı = $userTag[$authorID] Oldu !
   Savaş Ödülün İse = Bir $randomText[Savaş Baltası :axe:;Suikast Bıçağı :knife:;İkili Kılıç :crossed_swords:]
   ]
   $setUserVar[rakip;;$authorID]
   $wait[1ms]
   $setUserVar[can;1000;$authorID]
   $setUserVar[can;1000;$getUserVar[rakip;$authorID]]
  $setUserVar[savaş;yok;$getUserVar[rakip;$authorID]]
$setUserVar[savaş;yok;$authorID]
$setUserVar[rakip;;$getUserVar[rakip;$authorID]
   $endElseIf
   $endif
  `
});
bot.awaitedCommand({
	name: 'iksir',
	code: `
  $if[$getUserVar[iksirş;$authorID]==yok]
  $channelSendMessage[$channelID;{color:RED}{description:Şuanki Can Miktarın = $getUserVar[can;$authorID] :hearts:
  
  Kötü Haber Maalesef Aldığın İksir Bi Halta Yaramadı !}
  {footer:Sıra Sende $userTag[$getUserVar[rakip;$authorID]] ! saldır , iksir , kaç yazınız:$userAvatar[$getUserVar[rakip;$authorID]]}
  ]
  $elseIf[$getUserVar[iksirş;$authorID]==var]
  $setUserVar[can;$sum[$getUserVar[can;$authorID];$random[50;100]];$authorID]
  $wait[1ms]
  $channelSendMessage[$channelID;{color:BDAAF9}{description:Şuanki Can Miktarın = $sum[$getUserVar[can;$authorID];$random[50;100]] :hearts:}
  
  {author:Can İksiri İle $random[50;100] Can Eklendi:$authorAvatar}
  {footer:Sıra Sende $userTag[$getUserVar[rakip;$authorID]] ! saldır , iksir , kaç yazınız:$userAvatar[$getUserVar[rakip;$authorID]]}
  ]
  $endElseIf
   $endif
  $wait[1ms]
  $awaitMessages[$getUserVar[rakip;$authorID];1m;saldır,iksir,kaç;saldır,iksir,kaç;:x: 1 dakika geçti! Düello 
  iptal edildi!]
  $setUserVar[iksirş;$randomText[var;yok];$authorID]
  $onlyIf[$getUserVar[savaş;$authorID]!=yok;]
  `
});
bot.awaitedCommand({
	name: 'kaç',
	code: `

  $color[BLUE]
  $setUserVar[rakip;;$authorID]
  $wait[1s]
  $channelSendMessage[$channelID;{color:BLUE}
  {title:Düello İptal Edildi !}
  {footer:$userTag[$getUserVar[rakip;$authorID]] İle Olan Karşılaşmandan Kaçtın !:$authorAvatar}
  {description:Kazanan Kişi = $userTag[$getUserVar[rakip;$authorID]]
  Savaş Ödülün İse = Bir $randomText[Savaş Baltası :axe:;Suikast Bıçağı :knife:;İkili Kılıç :crossed_swords:]

  }{thumbnail:$userAvatar[$getUserVar[rakip;$authorID]]}]
  $setUserVar[savaş;yok;$authorID]
  $setUserVar[savaş;yok;$getUserVar[rakip;$authorID]]
  $setUserVar[rakip;;$getUserVar[rakip;$authorID]]
  $setUserVar[can;1000;$authorID]
  $setUserVar[can;1000;$getUserVar[rakip;$authorID]]
  
  `
});
bot.awaitedCommand({
	name: 'red',
	code: `$setUserVar[rakip;;$getUserVar[rakip;$authorID]]
  $setUserVar[rakip;;$authorID]
  $color[RED]
  $author[Düello reddedildi;$authorAvatar]
  $description[
    $userTag[$getUserVar[rakip;$authorID]] Kişisinden Gelen Düello İsteğini Redettin !]`
});
bot.command({
	name: 'avatar',
	code: `
  $author[$username[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $image[$userAvatar[$mentioned[1;yes]]?size=2048]
  $footer[İsteyen Kişi $username;$authorAvatar]
  $onlyIf[$getGlobalUserVar[karaliste;$authorID]!=evet;Hop Karalistedesin Dostum.
  Karaliste Sebebin \`\`$getGlobalUserVar[ksebep;$authorID]\`\`]
  `
});
bot.command({
	name: 'istatistik',
	alisaes: ['i'],
	code: `
  $author[İstatistiklerime Hoşgeldin $username;$authorAvatar]
  $description[$thumbnail[$userAvatar[$clientID]]
 $addField[Sahibim; $userTag[$botOwnerID]]

 $addField[Oluşturulma Tarihim; $creationDate[$clientID]]
  
 $addField[Pingim; $ping]
 $addField[Çalışma Sürem; $replaceText[$replaceText[$replaceText[$uptime;s; Saniye;-1];h; Saat;-1];m; Dakika;-1] ;yes]
 $addField[Komut Sayım; $commandsCount]
 $addField[Bulunduğum Sunucu Sayısı; $serverCount]
 $addField[Toplam Kullanıcım; $allMembersCount]
  
  
  ]
  `
});
bot.command({
	name: 'kick',
	code: `
  $setMessageVar[kicksebep;$replaceText[**$noMentionMessage**;****;Sebep Belirtilmedi !;-1];$messageID]
  $reactionCollector[$splitText[1];$authorID;30s;✅,❌;kickevet,kickhayır;yes]
  $textSplit[$sendMessage[{author:$username[$mentioned[1]]$discriminator[$mentioned[1]] Adlı Kişiyi Atmak İstiyormusun?:$authorAvatar}{description:
    ✅**Atılacak Kişi:**  <@$mentioned[1]>
    ✅**Atılma Sebebi:**  $replaceText[**$noMentionMessage**;****;Sebep Belirtilmedi !;-1]

       **Kişiyi Atmayı Onaylıyormusun?**
             Evet: ✅ Hayır: ❌
  }{timestamp}{thumbnail:$userAvatar[$mentioned[1]]}{footer:Atıcak Kişi $username$discriminator:$authorAvatar}{color:ffff00};yes]]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{title:❗️Kendinden Üst Yetkiye Sahip Kişiyi Atamazsın❗️}{color:00FF00}{delete:5s}]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{title:❗️Atmak İstediğin Kişi Benden Daha Üstte❗️}{color:00FF00}{delete:5s}]
  $onlyPerms[kick;{title:❗️Üzgünüm Yetkin Yok❗️}{description: Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız: **Kişileri At** }{delete:5s}]
  $onlyBotPerms[kick;{title:❗️Botun Yetkisi Yok❗️}{description:✅Lütfen Bota **Kişileri At** İznini Verin}{color:00FF00}{delete:5s}]
  $onlyIf[$mentioned[1]!=$clientID;{title:❗️Beni Atamazsın❗️}{color:00FF00}{delete:5s}]
  $onlyIf[$mentioned[1]!=$ownerID;{title:❗️Sunucu Sahibini Atamazsın❗️}{color:00FF00}{delete:5s}]
  $onlyIf[$mentioned[1]!=$authorID;{title:❗️Kendini Atamazsın❗️}{color:00FF00}{delete:5s}]
  $onlyIf[$mentioned[1]!=;{title:❗️Yanlış Kullanım❗️}{description:✅Doğru Kullanım: $getServerVar[prefix]kick @kişi sebep(isteğe bağlı) }{color:00FF00}{delete:5s}]
  `
});
bot.awaitedCommand({
	name: 'kickevet',
	code: `

  $clearReactions[$channelID;$message[1];✅]
  $clearReactions[$channelID;$message[1];❌]
  $editMessage[$message[1];
  {author:$username[$mentioned[1]]$discriminator[$mentioned[1]] Adlı Kişi Başarı İle Atıldı:$authorAvatar}{description:
    ✅**Atılan Kişi:**  <@$mentioned[1]>
    ✅**Atılma Sebebi:** $getMessageVar[kicksebep;$messageID]
  }{timestamp}{thumbnail:$userAvatar[$mentioned[1]]}{footer:Atan Kişi $username$discriminator:$authorAvatar}{color:00FF00} $kick[$mentioned[1];$getMessageVar[kicksebep;$messageID]]]
  $onlyIf[$hasPerms[$authorID;kick]!=false;{title:❗️Üzgünüm Yetkin Yok❗️}{description: Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız: **Kişileri At** }{delete:5s}{color:00FF00}]
  `
});
bot.awaitedCommand({
	name: 'kickhayır',
	code: `

  $clearReactions[$channelID;$message[1];✅]
  $clearReactions[$channelID;$message[1];❌]
  $editMessage[$message[1];
  {title:❗️İşlem İptal Edilmiştir❗️}{color:ff0000}]
  $onlyIf[$hasPerms[$authorID;ban]!=false;{title:❗️Üzgünüm Yetkin Yok❗️}{description: Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız: **Kişileri At** }{delete:5s}{color:00FF00}]
  `
});
bot.command({
	name: 'ban',
	code: `
  $setMessageVar[bansebep;$replaceText[**$noMentionMessage**;****;Sebep Belirtilmedi !;-1];$messageID]
  $reactionCollector[$splitText[1];$authorID;30s;✅,❌;banevet,banhayır;yes]
  $textSplit[$sendMessage[{author:$username[$mentioned[1]]$discriminator[$mentioned[1]] Adlı Kişiyi Banlamak İstiyormusun?:$authorAvatar}{description:
    ✅**Yasaklanıcak Kişi:**  <@$mentioned[1]>
    ✅**Yasaklama Sebebi:**  $replaceText[**$noMentionMessage**;****;Sebep Belirtilmedi !;-1]

       **Yasaklamayı Onaylıyormusun?**
             Evet: ✅ Hayır: ❌
  }{timestamp}{thumbnail:$userAvatar[$mentioned[1]]}{footer:Yasaklıyıcak Kişi $username$discriminator:$authorAvatar}{color:ffff00};yes]]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{title:❗️Kendinden Üst Yetkiye Sahip Kişiyi Banlayamazsın❗️}{color:00FF00}{delete:5s}]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{title:❗️Banlamak İstediğin Kişi Benden Daha Üstte❗️}{color:00FF00}{delete:5s}]
  $onlyPerms[ban;{title:❗️Üzgünüm Yetkin Yok❗️}{description: Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız: **Kişileri Banla** }{delete:5s}]
  $onlyBotPerms[ban;{title:❗️Botun Yetkisi Yok❗️}{description:✅Lütfen Bota **Kişileri Banla** İznini Verin}{color:00FF00}{delete:5s}]
  $onlyIf[$mentioned[1]!=$clientID;{title:❗️Beni Banlayamazsın❗️}{color:00FF00}{delete:5s}]
  $onlyIf[$mentioned[1]!=$ownerID;{title:❗️Sunucu Sahibini Banlayamazsın❗️}{color:00FF00}{delete:5s}{delete:5s}]
  $onlyIf[$mentioned[1]!=$authorID;{title:❗️Kendini Banlayamazsın❗️}{color:00FF00}{delete:5s}]
  $onlyIf[$mentioned[1]!=;{title:❗️Yanlış Kullanım❗️}{description:✅Doğru Kullanım: $getServerVar[prefix]ban @kişi sebep(isteğe bağlı)}{color:00FF00}{delete:5s}]
  `
});
bot.awaitedCommand({
	name: 'banevet',
	code: `

  $clearReactions[$channelID;$message[1];✅]
  $clearReactions[$channelID;$message[1];❌]
  $editMessage[$message[1];
  {author:$username[$mentioned[1]]$discriminator[$mentioned[1]] Adlı Kişi Başarı İle Banlandı:$authorAvatar}{description:
    ✅**Yasaklanan Kişi:**  <@$mentioned[1]>
    ✅**Yasaklanma Sebebi:** $getMessageVar[bansebep;$messageID]
  }{timestamp}{thumbnail:$userAvatar[$mentioned[1]]}{footer:YasakLayan Kişi $username$discriminator:$authorAvatar}{color:00FF00} $ban[$mentioned[1];$getMessageVar[bansebep;$messageID]]]
  $onlyIf[$hasPerms[$authorID;ban]!=false;{title:❗️Üzgünüm Yetkin Yok❗️}{description: Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız: **Kişileri Banla** }{color:00FF00}{delete:5s}]
  `
});
bot.awaitedCommand({
	name: 'banhayır',
	code: `

  $clearReactions[$channelID;$message[1];✅]
  $clearReactions[$channelID;$message[1];❌]
  $editMessage[$message[1];
  {title:❗️İşlem İptal Edilmiştir❗️}{color:ff0000}]
  $onlyIf[$hasPerms[$authorID;ban]!=false;{title:❗️Üzgünüm Yetkin Yok❗️}{description: Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız: **Kişileri Banla** }{color:00FF00}{delete:5s}]
  `
});

//--------------------- DİĞER KOMUTLAR SON -----------------------\\
bot.command({
	name: 'banaç',
	code: `
  $color[GREEN]
  $description[Sunucudan Toplam **$getTextSplitLength** Kişinin yasağı kaldırılmıştır.]
  $footer[$userTag[$authorID] Tarafından yapıldı;$authorAvatar]
 
  
 $loop[$getTextSplitLength;mustikban]
 $textSplit[$usersBanned[id];, ]
 
  $onlyForIDs[$ownerID;{color:RED}{author:Bu Komut Sunucu Sahibine Özeldir !:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda Yönetici Yetkim Yok !:$authorAvatar}]`
});
bot.awaitedCommand({
	name: 'mustikban',
	code: `
$suppressErrors
  $unban[$randomText[$joinSplitText[;]]]
      $textSplit[$usersBanned[id];, ]
`
});
