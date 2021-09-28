module.exports = {
name:"unban",
code:`
$thumbnail[$useravatar[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$unban[$message[1]]
$addField[Banı açılan;\`$username[$message[1]]#$discriminator[$message[1]]\`]
$addfield[\`>\` Banı Açan Kullanıcı ID; $authorID]
$addfield[\`>\` Banı Açan Kullanıcı; $username]
 $footer[> Banı Açılan KULLANICI ID:$message[1]]
$color[RANDOM]
$onlyIf[$hasPerms[$authorID;ban]!=false;Yetkin Yok !]
$onlyIf[$isNumber[$message[1]]!=false;Girilen Bir ID Değil !]
$onlyIf[$message!=;Bir ID Giriniz !]
$onlyIf[$getGlobalUserVar[karaliste;$authorID]!=evet;Hop Karalistedesin Dostum.
  Karaliste Sebebin \`\`$getGlobalUserVar[ksebep;$authorID]\`\`]
`
}
