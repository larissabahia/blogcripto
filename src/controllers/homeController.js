const path = require("path");
const fs = require("fs");
const postFilePath = path.join(__dirname, "../database/post.json");
const posts = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));


const homeControlller = {
    index: (req, res) => {
        
       return res.render("home", {posts});

    },
    post: (req, res) => {
        res.render("post-page");
    }

};

module.exports = homeControlller;

