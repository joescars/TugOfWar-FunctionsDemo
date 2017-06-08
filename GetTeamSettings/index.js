module.exports = function (context, req) {
   
    var t;
    var documents = context.bindings.documents;
    
    for (var i = 0; i < documents.length; i++) {
        var document = documents[i];
        context.log(document);
        t = new TeamSettings(document.team1,document.team2);
    } 

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