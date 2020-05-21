const express = require("express");
const app = express();

const routes = require("./routes.js");
routes(app);

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
