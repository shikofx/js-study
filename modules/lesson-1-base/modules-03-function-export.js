
let currentDate = new Date();
exports.date = currentDate;
exports.getMessage = ( firstName, lastName ) => {
    let hour = currentDate.getHours();
    if(hour > 16){
        return `Добрый вечер, ${firstName} ${lastName}`;
    } else if(hour > 10){
        return `Добрый день, ${firstName} ${lastName}`;
    } else { 
        return `Доброе утро, ${firstName} ${lastName}`;
    }
};