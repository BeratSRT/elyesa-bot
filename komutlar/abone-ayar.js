module.exports = {
  name:"ayarla",
  code:`
 $if[$checkCondition[$message[1]==kanal]$checkCondition[$message[1]==rol]$checkCondition[$message[1]==yetkili]$checkCondition[$message[1]==kapat]==falsefalsefalsefalse]
 f!ayarla \`kanal\` , \`rol\` , \`yetkili\` yada \`kapat\` Ayarlayabilirsiniz !
 $endif
 $if[$message[1]==kanal]
 Ayarlanan Kanal <#$mentionedChannels[1]>
 f!abone Komudu Sadece Bu Kanalda Çalışacaktır !
 $setServerVar[abonekanal;$mentionedChannels[1]]
 $onlyIf[$mentionedChannels[1]!=;{color:RED}{author:Abone Kanalı Ayarlamam İçin Bir Kanal Etiketlemelisin !:$authorAvatar}]
 $endif
 $if[$message[1]==yetkili]
 Ayarlanan Rol \`$roleName[$mentionedRoles[1]]\`
 f!abone Komudunu Sadece Bu Roldekiler Kullanabilecektir !
 $setServerVar[aboneyt;$mentionedRoles[1]]
 $onlyIf[$mentionedRoles[1]!=;{color:RED}{author:Abone Rol Yetkilisi Ayarlamam İçin Bir Rol Etiketlemelisin !:$authorAvatar}]
 $endif
 $if[$message[1]==rol]
 Ayarlanan Rol \`$roleName[$mentionedRoles[1]]\`
 f!abone Komudu Kullanılınca Kİşiye Bu Rol Verilecektir !
 $setServerVar[abonerol;$mentionedRoles[1]]
 $onlyIf[$mentionedRoles[1]!=;{color:RED}{author:Abone Rolü Ayarlamam İçin Bir Rol Etiketlemelisin !:$authorAvatar}]
 $endif
 $if[$message[1]==kapat]
 Abone Yetkilisi , Abone Rolü ve Abone Kanalı Kapatılmıştır !
 $setServerVar[abonerol;yok]
 $setServerVar[aboneyt;yok]
 $setServerVar[abonekanal;yok]
 $endif
 
 $onlyIf[$hasPerms[$authorID;admin]!=false;{color:RED}{author:Bu Sunucuda Yönetici Değilsiniz !:$authorAvatar}]
 `
}