const crypto = require("crypto");

const hashedMessage = crypto.createHmac("sha256", "secretkey")
    .update("important-secret-message").digest("hex")

console.log("createdHmac result:", hashedMessage)