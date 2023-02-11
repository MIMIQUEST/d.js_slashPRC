const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (message.content === "/nuke") {
    if (message.channel.type === "text") {
      let channel = message.channel;
      channel.delete().then(() => {
        message.guild.createChannel(channel.name, {
          type: "text",
        }).then((newChannel) => {
          message.channel.send(
            `Channel ${channel.name} has been nuked and recreated!`
          );
        });
      });
    }
  }
});

client.login("YOUR_DISCORD_BOT_TOKEN");
