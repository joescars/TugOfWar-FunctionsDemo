module.exports = function (context) {
   
    var myTeam = new TeamPoint(context.bindings.myScoreItem);  

    context.bindings.out = myTeam;
     
    context.done();
    
};

function TeamPoint(teamNameIn) {
    this.PartitionKey = "point";
    this.RowKey = guid();
    this.team = teamNameIn;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}