module.exports = function (context, req) {

    var myTeams = context.bindings.settingEntity;

    // we are always bringing back 1 record in the array
    var t = new TeamSettings(
            myTeams[0].team1,
            myTeams[0].team1Id,
            myTeams[0].team2,
            myTeams[0].team2Id
            );

    context.res = {
        status: 200,
        body:  JSON.stringify(t)
    };

    context.done();

};

function TeamSettings(team1, team1Id, team2, team2Id) {
    this.team1 = team1;
    this.team1Id = team1Id;
    this.team2 = team2;
    this.team2Id = team2Id;
}