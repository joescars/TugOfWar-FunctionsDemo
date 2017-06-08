module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        var myTeamSetting = new TeamSettings(myReq);
        context.bindings.out = myTeamSetting;
    }

    context.done();
};

function TeamSettings(myObj) {
    this.setting = "tugofwar";
    this.team1 = myObj.team1;
    this.team2 = myObj.team2;
}