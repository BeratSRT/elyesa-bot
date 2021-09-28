module.exports = {
        name: "reddet",
        code: `
        $if[$getServerVar[ps;$message[1]]==yes]
        $channelSendMessage[$getServerVar[plog;$message[1]];{title:$usertag[$clientID]}{description:**❌ | \`$serverName\` sunucusuna atmış olduğunuz başvuru bir yetkili tarafından reddedildi.**}{color:BLUE}]
$channelSendMessage[$getServerVar[plog;$guildID];{title:$usertag[$clientID]}{description:**✅ | \`$serverName[$message[1]]\` sunucusundan gelmiş olan partnerlik isteği \`$usertag\` tarafından reddedildi.**}{color:BLUE}]
$onlyIf[$isNumber[$message[1]]!=false;{title:$usertag}{descrption:**❌ | \`$message[1]\` Bir sayı değil.**}{footer:$username[$clientID]}{color:BLUE}]
$else
$author[$usertag;$authorAvatar]
$description[**❌ | \`$message[1]\` ID'li sunucu size bir istek göndermemiş**]
$footer[$username[$clientID];$userAvatar[$clientID]]
$color[BLUE]
$endif
$setServerVar[ps;no;$message[1]]
$setServerVar[ps;no]
$onlyIf[$message[1]!=$guildID;]
        $suppressErrors[{title:$usertag}{description:**❌ | Böyle Bir sunucuda yokum.**}{footer:$username[$clientID]}{color:BLUE}]
        `
}