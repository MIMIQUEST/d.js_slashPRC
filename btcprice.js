const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '/btcprice') {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
      .then(res => {
        const btcPrice = res.data.bpi.USD.rate_float;
        msg.reply(`The current price of BTC is $${btcPrice}`);
      })
      .catch(err => {
        console.error(err);
        msg.reply('Sorry, I was unable to retrieve the current BTC price.');
      });
  }
});

client.login('TOKEN');
