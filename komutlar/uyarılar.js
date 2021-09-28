module.exports = {
  name:"uyarılar",
  code:`
 $description[
  $thumbnail[$userAvatar[$mentioned[1]]]
  $username[$mentioned[1]]#$discriminator[$mentioned[1]] Kişinin Toplam = $getUserVar[tuyarı;$mentioned[1]] Uyarısı Var !
  =================
    $getUserVar[uyarı;$mentioned[1]]
  ]
  $footer[Kontrol Eden Yetkili • $username#$discriminator;$authorAvatar]
  $onlyPerms[admin;Yetkililer Kontrol Edebilir !]
  $onlyIf[$message!=;Birini Etiketle !]
  `
}