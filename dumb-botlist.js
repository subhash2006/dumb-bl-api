const fetch = require("node-fetch");
module.exports = class UDL {
  constructor(token, client) {
    this['token'] = token;
    this['client'] = client;
    return this;
  }

  serverCount(message) {
  fetch(`https://dumbbotlist.tk/api/bots/stats`, {
        method: 'POST',
        headers: { 
          'serverCount': this.client.guilds.cache.size,
          'Content-Type': 'application/json', 
          'Authorization': this.token
        },
    })
    .then(console.log(message || "Server count posted."));
  }
  
  async search(id) {
  return await fetch(`https://dumbbotlist.tk/api/bots/${id}`, {
        method: 'GET'
    })
    .then(res => res.json()).then(json => json);
  }
  
  async hasVoted(id) {
  return await fetch(`https://dumbbotlist.tk/api/bots/check/${id}`, {method: 'GET',headers: { 
    'Content-Type': 'application/json', 'Authorization': this.token
  }
  }).then(res => res.json()).then(async json => json.voted);
  }
}
