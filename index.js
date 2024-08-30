
exports.pagination = function(data=[] , page=1 , limit=10) {

    if (limit >= data.length-1 || limit <= 0) {
        limit = 10;
        page = 1;
    }

    let upperLimit = page * limit - 1;
    let lowerLimit = (page - 1) * limit;

    let arr;

    if (lowerLimit < 0) {
        arr = [];
    } else if (lowerLimit > data.length-1) {
        arr = [];
    } else if (lowerLimit <= data.length-1) {
        arr = data.slice(lowerLimit , upperLimit+1);
    }

    return arr;
}