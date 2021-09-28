module.exports = {
        name: "partner-bul",
        code: `$author[$usertag;$replaceText[$serverIcon;null;$userAvatar[$clientID]]]
       $description[**》Sunucular aranıyor...**]
       $editIn[3s;{title:$usertag}{description:$replaceText[$serverIDs[
       ];$guildID;;-1]}{footer:$username[$clientID]}{color:BLUE}]
        $color[BLUE]
        $footer[$username[$clientID];$userAvatar[$clientID]]
        $addTimestamp
        `
}