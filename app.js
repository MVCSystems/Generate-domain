// 1: Crea un script que genere todas las combinaciones posibles de nombres de dominio de una lista de
// pronombres, adjetivos y sustantivos.

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let domain = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      domain.push(pronoun[i] + adj[j] + noun[k] + ".com");
    }
  }
}
// ejemplo:
// thegreatjogger.com // thegreatracoon.com // ourgreatjogger.com
// ourgreatracoon.com // thebigjogger.com // thebigracoon.com
// ourbigjogger.com   // ourbigracoon.com
console.log(domain);
