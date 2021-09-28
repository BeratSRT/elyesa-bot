module.exports = {
  name:"uyarısil",
  code:`
 Kişinin Uyarısı Temizlendi.
 $setUserVar[tuyarı;0;$mentioned[1]]
 $setUserVar[uyarı;;$mentioned[1]]
 $onlyPerms[admin;Yetkin Yok]
 $onlyIf[$message!=;Birini Etiketle !]
  `
}