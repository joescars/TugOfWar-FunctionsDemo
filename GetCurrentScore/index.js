module.exports = function (context, req) {
   
    var documents = context.bindings.documents;
    for (var i = 0; i < documents.length; i++) {
        var document = documents[i];
        context.log(document);
    }     

    context.res = {
        status: 200,
        body: documents
    };

    context.done();

};
