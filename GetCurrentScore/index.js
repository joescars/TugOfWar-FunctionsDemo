module.exports = function (context, req) {
   
    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        context.log("Score Team ---->: " + myReq.team);
        
        var s;
        var totalScore = context.bindings.myPoints.length;
        s = new Score(myReq.team,totalScore);

        context.res = {
            status: 200,
            body:  JSON.stringify(s)
        };

        context.done();

    }    

};

function Score(teamNameIn, scoreIn) {
    this.TeamName = teamNameIn;
    this.Score = scoreIn;
}
