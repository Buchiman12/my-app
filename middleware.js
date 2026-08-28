// app middleware 
const express = require('express')
const app = express();
const port = 3000;
const router = express.Router();

app.use((req, res, next) => {
    console.log("request received at: ", new Date());
    res.send(`the url  you are visiting is ${req.url}`)
    next()
})
app.get("/", (req, res) => {
    res.send("welcome to the home page")
});

app.listen((port), () => {
    console.log("the server is up and running")
})

// router middleware
router.use((req, res, next) => {
    console.log("request to /menu route");
    next() // pass control to the next handler
});

router.get("/drinks", (req, res) =>{
    res.send("welcome to the drinks menu!")
});

router.use("/food", (req, res, next) => {
    res.send(`your url ${req.url}`);
    next()

})
app.use("/menu", router)