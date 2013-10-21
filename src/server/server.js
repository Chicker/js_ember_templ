/**
 * Created by dns on 21.10.13.
 */

var express = require("express");
var consolidate = require("consolidate");

var srv = new express();

srv.engine("html", consolidate.handlebars);
srv.set("views engine", "html");
srv.set("views", "build");
srv.use(express.logger());

srv.get("/", function (req, res) {
    res.render("index.html");
});

srv.use("/", express.static("build"));

srv.listen(3000);