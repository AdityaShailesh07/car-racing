class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

getCarsAtEnd(){

  //Here it is capital C in carsAtEnd. Reason: It should be same as you have written in database.
database.ref('CarsAtEnd').on("value",(data)=>{
this.rank = data.val();

})


}

static updateCarsAtEnd(rank) {
  database.ref('/').update({
    CarsAtEnd:rank
  })
}
}
