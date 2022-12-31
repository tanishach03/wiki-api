const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://admin-tanisha:Tanisha@cluster0.k6hjmno.mongodb.net/wikiDB");
const articleSchema = {
    title: String,
    content: String
} 
const Article = mongoose.model("Article", articleSchema);


app.get("articles", function(req, res){
    Article.find(function(err, foundArticles){
        console.log(foundArticles);
    })
})

app.listen("3000", function(){
    console.log("Server started on port 3000");
})


