module.exports = function (context, req) {
   
    var t;

    context.log(context.bindings.settingEntity);

    var documents = context.bindings.documents;

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