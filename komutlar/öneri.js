module.exports = {
  name: "öneri",
  aliases: ["tavsiye"],
  code:`
$channelSendMessage[$channelID;Başarıyla Log Kanalına Bildirdim, Eğer Aklına Güzel Fikirler Geliyosa f!öneri <önerin> şeklinde bize ulaştır]  
$cooldown[1m;Spam Engellemek İçin 1 Dakikada Bir Verebilirsin]
$argsCheck[>2;Öneriniz En Az 2 Kelimeden Oluşmalıdır.]
$useChannel[882649298955800627]
$color[25C059]
$footer[Öneriyi Yapan Kişi | $username / $authorID]

$description[


$username#$discriminator[$authorID] / <@$authorID>

$addField[İdsi;$authorID]
$addField[Önerinin Geldiği Sunucu;$getServerInvite]
$addField[Önerisi;$message]]
`

}