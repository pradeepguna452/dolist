     exports.getDate = function(){
    let today = new Date();
    let options = {
     weekday:"long",
     day:"numeric",
     month:"long"
    }
       let day = today.toLocaleDateString("us-en",options);
       return (day);
}



// both the are same ...even we can reduce the module. word
// function getDate(){
//     let today = new Date();
//     let options = {
//      weekday:"long",
//      day:"numeric",
//      month:"long"
//     }
//        let day = today.toLocaleDateString("us-en",options);
//        return (day);
// }

