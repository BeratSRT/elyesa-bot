module.exports = {
        name: "onayla",
        code: `
        $if[$getServerVar[ps;$message[1]]==yes]
        $channelSendMessage[$getServerVar[plog;$guildID];{title:$usertag[$clientID]}{description:**✅ | \`$serverName[$message[1]]\` adlı sunucu ile partnerlik yapıldı.**

> Partnerlik yapan: <@$authorID> 
}{color:BLUE}{footer:$username[$clientID]}]
$channelSendMessage[$getServerVar[plog;$message[1]];{title:$usertag[$clientID]}{description:**✅ | \`$serverName\` adlı sunucu ile partnerlik yapıldı.**

> Partnerlik yapan: <@$authorID>
}{color:BLUE}{footer:$username[$clientID]}]
$channelSendMessage[$getServerVar[pkanal;$guildID];> **$username[$clientID] Partnerlik Sistemi**

$getServerVar[ptext;$message[1]]]
$channelSendMessage[$getServerVar[pkanal;$message[1]];> **$username[$clientID] Partnerlik Sistemi**

$getServerVar[ptext;$guildID]
]
$onlyIf[$isNumber[$message[1]]!=false;{title:$usertag}{descrption:**❌ | \`$message[1]\` Bir sayı değil.**}{footer:$username[$clientID]}{color:BLUE}]
$else
$author[$usertag;$authorAvatar]
$description[**❌ | \`$message[1]\` ID'li sunucu size bir istek göndermemiş**]
$footer[$username[$clientID];$userAvatar[$clientID]]
$color[$random[0;99999]]
$endif
$setServerVar[ps;no;$message[1]]
$setServerVar[ps;no]
$onlyIf[$message[1]!=$guildID;]
        $suppressErrors[{title:$usertag}{description:**❌ | Böyle Bir sunucuda yokum.**}{footer:$username[$clientID]}{color:BLUE}]
        `
}