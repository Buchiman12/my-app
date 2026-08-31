const crypto = require("crypto");

async function asynchHandler() {

    try {

        
        const hashPasssword = await crypto
            
            .createHash("sha256")
            .update("myStrongPassword2311$")
            .digest("hex");

        console.log("createdHash result:", hashPasssword)
        }catch (error){
            console.log("an error occur: ", error.message)
        }

    
}
asynchHandler()
console.log("going about my business")
console.log(`${2 + 2} is 4`)