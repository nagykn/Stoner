//karakterek sorsolása most számok lesznek (id)
var players = JSON.parse(localStorage.getItem('players'));
const stands = [1,2,3,4,5,6,7,8]

card = document.querySelector("#card");
test = document.querySelector("#test");

function start() {
    //Ki a stoner az id 1 pl
    players.getRandom().stand = 1;

    //
    for (player of players) {
        if (!player.stand) {
        player.stand = stands.getRandom();
        }
        
    }

}

function  epicCardStands(player) {
    
    //kell promise, vagy await vagy valami
}

//Prototypes 
Array.prototype.getRandom = function(){
  return this[Math.floor(Math.random()*this.length)];
}

/*
const Game = {
    count: 0,
    hasNext: true ? true:false,
    goNext: function() {
        if (this.hasNext) {
            this.count += 1;
            return true
        } else {
            return false
        }
    }
}*/
