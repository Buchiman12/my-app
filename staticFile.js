const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// creating the static files from the "public" dir
app.use(express.static(path.join(__dirname, "public")));

// registering multiple dirs to serve files from //"/images" is a mount path
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
    res.send("welcome to the static file demo!");
});

app.listen(port, () => {
    console.log(`server runnig on port ${port}`);
});
