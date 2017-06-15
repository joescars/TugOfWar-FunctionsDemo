module.exports = function (context, req) {

    var myTeams = context.bindings.settingEntity;

    // we are always bringing back 1 record in the array
    var t = new TeamSettings(myTeams[0].team1,myTeams[0].team2);

    context.res = {
        status: 200,
        body:  JSON.stringify(t)
    };

    context.done();

};

function TeamSettings(team1, team2) {
    this.team1 = team1;
    this.team2 = team2;
}