/*
Callbacks can be used for realise different common algoritms
*/
exports = Array.prototype.filter = function(callback){
    let result = [];
    for(let i = 0, len = this.length; i < len; i++){
        if(callback(this[i])){
            result.push(this[i]);
        }
    }
    return result;
}
