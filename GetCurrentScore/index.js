module.exports = function (context, req) {
   
    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        //myReq.team
        
        var s;
        var documents = context.bindings.documents;
        for (var i = 0; i < documents.length; i++) {
            var document = documents[i];
            context.log(document);
            s = new Score(myReq.team,document.Score);
        }     

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
