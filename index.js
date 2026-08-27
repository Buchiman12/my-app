const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/profile", (req, res) => {
    res.render("profile", { username: "john_doe"});
});




app.use(express.json()); // Parse JSON request bodies

// Use app.route() to group handlers for the same path
app
  .route("/user")
  .get((req, res) => {
    res.send("Fetching user data");
  })
  .post((req, res) => {
    const { name } = req.body;
    res.send(`Creating a user with name: ${name}`);
  })
  .put((req, res) => {
    const { name } = req.body;
    res.send(`Updating the user to: ${name}`);
  })
  .delete((req, res) => {
    res.send("Deleting the user");
  });

// // app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

app
    .route("/blog/users/:Id")
    .get((req, res) => {
        const userId = req.params.Id
        res.send(`Hi ${userId} are viewing your posts`)
    });

