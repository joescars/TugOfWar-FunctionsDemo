module.exports = function (context, req) {
   
    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        context.log("Score Team ---->: " + myReq.teamId);
        
        var s;
        var totalScore = context.bindings.myPoints.length;
        s = new Score(myReq.teamId,totalScore);

        context.res = {
            status: 200,
            body:  JSON.stringify(s)
        };

        context.done();

    }    

};

function Score(teamIdIn, scoreIn) {
    this.TeamId = teamIdIn;
    this.Score = scoreIn;
}
