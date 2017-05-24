module.exports = function (context, req) {
   
    var Teams = [];
    var documents = context.bindings.documents;
    for (var i = 0; i < documents.length; i++) {
        var document = documents[i];
        context.log(document);
        var t = new Team(document.TeamName,document.Score);
        Teams.push(t);
    }     

    context.res = {
        status: 200,
        body:  JSON.stringify(Teams)
    };

    context.done();

};

function Team(teamNameIn, scoreIn) {
    this.TeamName = teamNameIn;
    this.Score = scoreIn;
}
