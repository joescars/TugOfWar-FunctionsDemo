module.exports = function (context, req, myQueueItem) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (typeof req.body != 'undefined' && typeof req.body == 'object') {

        var myReq = req.body;
        context.log('---------->' + myReq.teamId)
        context.bindings.out = myReq.teamId;
    }

    context.done();
};

