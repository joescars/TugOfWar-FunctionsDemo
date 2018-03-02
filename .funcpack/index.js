module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    "CreateTeamSettings": __webpack_require__(1),
    "GetCurrentScore": __webpack_require__(2),
    "GetTeamSettings": __webpack_require__(3),
    "IncrementPointTrigger": __webpack_require__(4),
    "IncrementPointUpdate": __webpack_require__(5)
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

    var yourDate = new Date();

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (context, req) {

    var myTeams = context.bindings.settingEntity;

    // we are always bringing back 1 record in the array
    var t = new TeamSettings(
            myTeams[0].team1,
            myTeams[0].team1Id,
            myTeams[0].team2,
            myTeams[0].team2Id
            );

    context.res = {
        status: 200,
        body:  JSON.stringify(t)
    };

    context.done();

};

function TeamSettings(team1, team1Id, team2, team2Id) {
    this.team1 = team1;
    this.team1Id = team1Id;
    this.team2 = team2;
    this.team2Id = team2Id;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (context, req, myQueueItem) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        context.log('---------->' + myReq.teamId)
        context.bindings.out = myReq.teamId;
    }

    context.done();
};



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (context) {
   
    var myTeam = new TeamPoint(context.bindings.myScoreItem);  

    context.log('---------->' + context.bindings.myScoreItem)

    context.bindings.out = myTeam;
     
    context.done();
    
};

function TeamPoint(teamIdIn) {
    this.PartitionKey = "point";
    this.RowKey = guid();
    this.teamId = teamIdIn;
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

/***/ })
/******/ ]);