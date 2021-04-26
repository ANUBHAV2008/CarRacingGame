class Player{
    constructor(){
    this.name =null;
    this.distance =0;
    this.index =null;
    this.rank =null;
    }
    getPlayerCount(){
     var playerCountRef = database.ref("playerCount");
     playerCountRef.on("value",function(data){
         playerCount = data.val()   
     })  
    }
     updatePlayerCount(count){
        database.ref("/").update({
        "playerCount": count
        })
     }
     updatePlayerDetails(){
         var playerIndex ="players/player"+this.index;
         database.ref(playerIndex).update({
             "name": this.name,
             "distance": this.distance
         })
     }
     static getPlayerDetails(){
var playerDetailsRef = database.ref("players");
playerDetailsRef.on("value",(data)=>{
allPlayers = data.val()
})
     }
     getCarPositionAtTheEnd(){
var playerCountRef = database.ref("carPositionAtTheEnd");
playerCountRef.on("value",(data)=>{
this.rank = data.val()
})
     }
     static updateCarPositionAtTheEnd(rank){
       database.ref("/").update({
           carPositionAtTheEnd :rank
       })
        }

    }