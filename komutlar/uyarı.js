module.exports = {
  name:"uyarı",
  code:`
  <@$mentioned[1]> Kisisi $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1] Sebebi İle Uyarıldı.
  Toplam Uyarısı = $sum[$getUserVar[tuyarı;$mentioned[1]];1]
  $setUserVar[tuyarı;$sum[$getUserVar[tuyarı;$mentioned[1]];1];$mentioned[1]]
  $setUserVar[uyarı;
  $getUserVar[uyarı;$mentioned[1]]
  
  Uyarılan Kisi = $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  
  Uyarılma Sebebi = $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1]
  Uyaran Kişi = $username#$discriminator;$mentioned[1]]
  $onlyPerms[managemessages;Yetkin Yok !]
  $onlyIf[$message!=;Uyarmam İcin Birini Etiketle !]
  `
}