const express = require("express");
const app = new express();
const fs = require("fs");

app.get("/add", (req, res) => {
    fs.readFile("../index.json", "utf8", function readFileCallBack(err, json_data) {
        if (err) {
            console.log(err);
        }
        else {
            var obj = JSON.parse(json_data);
            obj.Items.push({"Name": req.query.name, "Due": req.query.due, "Description": req.query.description});
            var json = JSON.stringify(obj, null, 2);
        }
        fs.writeFile("../index.json", json, "utf8", err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Wrote file")
                }
            }
        )}
    )}
)

app.get("/remove", (req, res) => {
    fs.readFile("../index.json", "utf8", function readFileCallBack(err, json_data) {
        if (err) {
            console.log(err);
        }
        else {
            var obj = JSON.parse(json_data);
            obj.Items.delete({"Name": req.query.name, "Due": req.query.due, "Description": req.query.description});
            var json = JSON.stringify(obj, null, 2);
        }
        fs.writeFile("../index.json", json, "utf8", err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Wrote file")
                }
            }
        )}
    )}
)

app.listen(3001);