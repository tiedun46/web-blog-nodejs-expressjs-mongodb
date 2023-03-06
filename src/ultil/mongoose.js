module.exports = {
    mutipleMongooseToObject: function(mgArrs){
        return mgArrs.map(mgArr => mgArr.toObject());
    },
    mgToObject: function (mg){
        return mg ? mg.toObject() : mg;
    }
}