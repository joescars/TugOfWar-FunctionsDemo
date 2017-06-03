module.exports = function (context) {
   
    var myTeam = new Team(context.bindings.myScoreItem);  

    context.bindings.out = myTeam;
     
    context.done();
};

function Team(teamNameIn) {
    //this.team = "tugofwar";
    this.team = teamNameIn;
    //this.TeamName = teamNameIn;
    //this.Score = 0;
}