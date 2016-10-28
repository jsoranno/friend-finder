/**
 * Created by juanitasoranno on 10/27/16.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));