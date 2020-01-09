$( document ).ready(function() {
    
    // get team settings
    getSettings();

});

var Team1Name = "Loading... ";
var Team2Name = "Loading... ";

var Team1Id;
var Team2Id;

var siteDomain = "https://" + document.domain;

// for local functions debugging
if(siteDomain.includes("localhost")) {
    siteDomain = "http://localhost:7071"
}
console.log("siteDomain: " + siteDomain);

$("#team1btn").click(function(){

    vote(Team1Id);
    
}); 

$("#team2btn").click(function(){

    vote(Team2Id);

});    

var vote = function(teamId) {

    $.ajax({
            url : siteDomain + "/incrementpoint",
            type: "POST",
            data: JSON.stringify(
                {teamId: teamId}
            ),
            contentType: "application/json; charset=utf-8",
            dataType   : "json",
            success    : function(){
                console.log("Voted");
            }
        });        

};      

var getSettings = function() {

    var currScore = 0;

    function setScore(score) {
        currScore = score;
    }

    $.ajax({
            url : siteDomain + "/getsettings",
            type: "GET",
            contentType: "application/json",
            dataType   : "json",
            success    : function(data){
                
                var Result = data;
                Team1Name = Result.team1;
                Team2Name = Result.team2;
                Team1Id = Result.team1Id;
                Team2Id = Result.team2Id;

                // set button labels
                setupLabels();        

            }
        });

    return currScore;

};            

var setupLabels = function() {

        $("#team1btn").text("Team: " + Team1Name);
        $("#team2btn").text("Team: " + Team2Name);

}