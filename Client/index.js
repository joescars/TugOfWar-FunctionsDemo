$( document ).ready(function() {
    // do nothing...
    setGameArea(); 
});

var gameAreaWidth = 0;

var Team1Name = "Team1";
var Team2Name = "Team2";                

var Team1Score = 0;
var Team2Score = 0;

var siteDomain = "https://" + document.domain

var setGameArea = function() {
    gameAreaWidth = $("#gameArea").width();
    var playerPadding = (gameAreaWidth - 100) / 2;
    $("#logo").css("left",playerPadding);
    //alert();
};
$("#btnLetsPlay").click(function(){
    
    // set team names
    Team1Name = $("#nameTeam1").val();
    Team2Name = $("#nameTeam2").val();

    // display team names
    $("#team1Display").text(Team1Name);
    $("#team2Display").text(Team2Name);

    // create the teams in the db
    setupTeams();

    // kick off the process
    updateScore();

}); 

var setupTeams = function() {

    var teamsData = 
        {
            "team1" : Team1Name,
            "team2" : Team2Name
        }

    $.ajax({
            url : siteDomain + "/createteams",
            type: "POST",
            data: JSON.stringify(teamsData),
            contentType: "application/json",
            dataType   : "json",
            success    : function(data){
                console.log("Teams Created");
            }
        });

};

var updateScore = function() {
    
    console.log("---------------")
    var scoreResult;

    var team1Data = {"team" : Team1Name};
    var team2Data = {"team" : Team2Name};                

    getScore(team1Data,1);
    getScore(team2Data,2);

    console.log("Team 1: " + Team1Score);
    console.log("Team 2: " + Team2Score);
                
    // Update scores
    refreshScore(Team1Score, Team2Score);

    // move logo based on scores
    moveLogo(Team1Score, Team2Score);

    // fire off the same function shortly
    rinseRepeat();                    

};

var getScore = function(teamData,teamNum) {

    $.ajax({
            url : siteDomain + "/getscores",
            type: "POST",
            data: JSON.stringify(teamData),
            contentType: "application/json",
            dataType   : "json",
            success    : function(data){
                var Result = JSON.parse(data);
                if(teamNum == 1) {
                    Team1Score = Result.Score;
                } else {
                    Team2Score = Result.Score;
                }
            }
        });

};

var refreshScore = function(score1, score2) {
    $("#team1").text(score1);
    $("#team2").text(score2);
};

var moveLogo = function(score1, score2) {
    // do the math
    var toMove = parseInt(score1) - parseInt(score2);    
    console.log("Moving: " + toMove);
        
    // move logo based on scores
    $("#logo").css({
        left: $("#logo").position().left - toMove + "px"
    });                  

    // show current position
    $("#debugPanel").text($("#logo").css("left"));

};

var rinseRepeat = function() {
    setTimeout(updateScore, 1000);
};