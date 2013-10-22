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
//  __dirname is .....js_ember_templ/
srv.use("/", express.static(__dirname));
srv.use("/", express.static(__dirname + "/build"));
srv.use("/vendor", express.static("vendor"));

srv.listen(3000);