module.exports = function (context) {
   
    var myTeam = new TeamPoint(context.bindings.myScoreItem);  

    context.log('---------->' + context.bindings.myScoreItem)

    context.bindings.out = myTeam;
     
    context.done();
    
};

function TeamPoint(teamIdIn) {
    this.PartitionKey = "point";
    this.RowKey = guid();
    this.teamId = teamIdIn;
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