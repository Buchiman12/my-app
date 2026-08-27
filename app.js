const express = require("express")
const app = express();
const port = 3000;

//importing the user routes (a name of a file you will use to create diff routes together)
const userRoutes = require("./userRoutes")

//using the userRoutes router for /users path
app.use("/users", userRoutes);

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`)
});