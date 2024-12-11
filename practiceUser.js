let users = require("./user.js")
function p(users){
    
    for(let name in users){
        if(name=="Ron"){

            return users.Ron.qualification;
        }
    }
}

console.log(p(users))