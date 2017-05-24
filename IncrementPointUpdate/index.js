module.exports = function (context) {
   
    context.log('--------- UPDATING SCORE ---------');
    context.log(JSON.stringify(context.bindings.inputDocument));
    var curScore = parseInt(context.bindings.inputDocument.Score);
    context.log('--------- CUR SCORE: ' + curScore + '---------');
    var newScore = curScore + 1;
    context.log('--------- NEW SCORE: ' + newScore + '---------');
    context.log('--------- SCORE UPDATED ---------');

    context.bindings.inputDocumentOut = context.bindings.inputDocument;
    context.bindings.inputDocumentOut.Score = newScore;

    context.done();

};
