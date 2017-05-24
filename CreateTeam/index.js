module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        var myTeam = new Team(myReq.team);
        context.bindings.out = myTeam;
    }

    context.done();
};

function Team(teamNameIn) {
    this.team = "tugofwar";
    this.TeamName = teamNameIn;
    this.Score = 0;
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