var express = require('express');
var app = express();

const JSONcategories = {
  "brushes": ["Escoda", "Daley-Rowney", "Winsor&Newton", "EssDee", "Princeton", "Kozłowski"],
  "paper": ["Saunders", "Hahnemühle", "Farbiano", "Canson", "Backingford", "Arches"],
  "watercolor": ["White-Nights", "QOR", "Schmincke", "Van Gogh", "Cotman"],
  "oils": ["Amsterdam", "Rembrandt", "Talens", "Reeves", "Williamsburg", "Renesans"],
  "drawing": ["Pencils", "Crayons", "Pens", "Carbon", "Pastels"],
  "others": ["Easels", "Media", "Cardboard", "Notebooks", "Glues"]
}

// CORS fix
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8040");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/categories', function(req, res){
    res.send(JSONcategories);
});

app.listen(3000);

// node.js server with data at http://localhost:3000/categories
