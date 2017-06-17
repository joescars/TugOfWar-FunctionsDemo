$( document ).ready(function() {
    
    // get team settings
    getSettings();

});

var Team1Name = "Loading... ";
var Team2Name = "Loading... ";

var siteDomain = "https://" + document.domain;

$("#team1btn").click(function(){
    vote(Team1Name);
}); 

$("#team2btn").click(function(){
    vote(Team2Name);
});    

var vote = function(teamId) {
    $.ajax({
            url : siteDomain + "/incrementpoint",
            type: "POST",
            data: JSON.stringify(
                {team: teamId}
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
                
                var Result = JSON.parse(data);
                Team1Name = Result.team1;
                Team2Name = Result.team2;

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