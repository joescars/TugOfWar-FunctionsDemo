module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        var myScore = new oScoreItem(myReq.team);
        context.bindings.out = myScore;
    }

    context.done();
};

function oScoreItem(team) {
    this.PartitionKey = team;
    this.RowKey = guid();
    this.Point = 1;
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