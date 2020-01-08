module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        var myTeamSetting = new TeamSettings(myReq);

        context.log(myTeamSetting.PartitionKey + " - "
        + myTeamSetting.RowKey + " - "
        + myTeamSetting.team1 + " - "
        + myTeamSetting.team2  + " - ")

        context.bindings.out = [];
        context.bindings.out.push(myTeamSetting);

        context.res = {
            status: 200,
            body:  JSON.stringify(myTeamSetting)
        };        

    }

    context.done();
};

function TeamSettings(myObj) {
    this.PartitionKey = "setting";
    this.RowKey = getInvertedTicks();
    this.team1 = myObj.team1;
    this.team1Id = guid();
    this.team2 = myObj.team2;
    this.team2Id = guid();
}

var getInvertedTicks = function() {
    var yourDate  = new Date();
    var epochTicks = 621355968000000000;
    var ticksPerMillisecond = 10000;
    var yourTicks = epochTicks - (yourDate.getTime() * ticksPerMillisecond);
    return yourTicks;
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